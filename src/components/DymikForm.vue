<template>
    <div class="dymik-form">
        <div class="field" :class="field.classes" v-for="field of props.form.fields">
            <label v-if="field.label" :for="field.name">
                {{ field.label }}
                <span v-if="field.required" class="required">*</span>
            </label>
            <component :modelValue="field.value" :value="field.value" :is="field.type" v-bind="field.props" :key="field.name"
                :invalid="!!field.error" @value-change="(value: any) => onValueChanged(field.name, value)"
                :disabled="form.disabled || field.disabled"
                @click="(event: any) => onFieldClick(field, event)" />
            <span v-if="!!field.error" class="error">{{ field.error }}</span>
        </div>
        <ProgressSpinner v-if="loading" styleClass="loading-spinner" />
        <Toast />
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { ProgressSpinner } from 'primevue';
import type FormModel from '../models/form';
import type { FormField } from '../interfaces';

const props = defineProps<{ form: FormModel }>();
const emit = defineEmits(['submit', 'value-change']);
const loading = ref(false);
const toast = useToast();

function showToast(message: string, type: 'success' | 'error') {
    toast.add({
        severity: type,
        summary: type === 'success' ? 'Success' : 'Error',
        detail: message,
        life: 3000
    });
}

function onValueChanged(fieldName: string, value: any) {
    // Update the field value in the form model
    const field = props.form.fields.find((f) => f.name === fieldName);

    if (field) {
        field.value = value;

        emit('value-change', props.form.getFormValue());
    }

    props.form.validateField(fieldName, value);
}

async function onFieldClick(field: FormField, event: Event) {
    if (field.type === 'Button' && field.props.type === 'submit') {
        const isValid = props.form.validate();

        if (!isValid) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        if (props.form.submit_endpoint) {
            loading.value = true;

            try {
                await props.form.submitToEndpoint();
                showToast('Form submitted successfully!', 'success');
            } catch (error) {
                console.error('Error:', error);
                showToast('Failed to submit form.', 'error');
            } finally {
                loading.value = false;
            }
        }

        emit('submit', props.form.getFormValue());
    }
}
</script>
<style scoped lang="scss">
.dymik-form {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding: 1rem;

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .required {
            color: red;
            margin-left: 0.25rem;
        }

        .error {
            color: red;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }

    }

    .loading-content {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: white;
    }
}

.toast {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    z-index: 1001;

    &.success {
        background-color: green;
    }

    &.error {
        background-color: red;
    }
}
</style>

<style lang="scss">
.dymik-form {
    .field {
        &.full_width {
            width: 100%;
        }

        &.half_width {
            width: calc(50% - 8px);
        }
    }
}
</style>

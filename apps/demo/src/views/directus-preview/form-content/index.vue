<template>
  <div class="form-content full-width">
    <DymikForm v-if="currentForm" :form="currentForm" @submit="onFormSubmit" @value-change="onValueChanged" 
               @loading="onLoading" @submit-result="onSubmitResult" />
    <ProgressSpinner v-if="loading" styleClass="loading-spinner" />
  </div>
  <Toast />

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { currentForm } from './index.viewmodel';
import { eventStore, onFormSubmit, onValueChanged } from './index.eventstore';
import { useToast } from 'primevue/usetoast';
import { ProgressSpinner } from 'primevue';
import Toast from 'primevue/toast';

const loading = ref(false);
const toast = useToast();

function onLoading(isLoading: boolean) {
  loading.value = isLoading;
}

function onSubmitResult({ message, type }: { message: string; type: 'success' | 'error' }) {
  console.log('Submit result:', message, type);


  toast.add({
    severity: type,
    summary: type === 'success' ? 'Success' : 'Error',
    detail: message,
    life: 3000,
  });
}

eventStore();
</script>

<style scoped lang="scss">


.form-content.full-width {
  width: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-content-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.form-content-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-content-item:hover {
  background-color: #f9f9f9;
}

.content-details {
  flex: 1;
  margin-right: 1rem;
}

.content-title {
  display: block;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.25rem;
}

.content-details p {
  margin: 0;
  color: #666;
  font-size: 0.875rem;
}
</style>

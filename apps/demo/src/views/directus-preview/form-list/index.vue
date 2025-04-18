<template>
  <div class="form-list full-width">
    <PanelMenu :model="menuItems" class="form-list-panel-menu" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PanelMenu from 'primevue/panelmenu';
import { forms } from './index.viewmodel';
import { FormModel, type FormListItem } from 'dymik-core';
import { currentForm } from "@/views/directus-preview/form-content/index.viewmodel";
import { useRouter } from 'vue-router';
import { eventStore } from './index.eventstore';
import FormController from '@/controllers/form.controller';

eventStore();

const router = useRouter();

function openForm(form: FormListItem) {
  FormController.getForm(form.id).then(item => {
    currentForm.value = new FormModel(item);
    router?.push({ query: { formId: form.id } });
  });
}

const menuItems = computed(() =>
  forms.value.map((form) => ({
    label: form.name,
    icon: 'pi pi-file',
    command: () => openForm(form),
    description: form.description,
  }))
);
</script>

<style scoped lang="scss">
.form-list.full-width {
  width: 100%;
}

.form-list-panel-menu {
  width: 100%;
}
</style>
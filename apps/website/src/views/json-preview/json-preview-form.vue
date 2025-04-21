<template>
  <div class="form-preview">
    <h2>Form Preview</h2>
    <p>Form ID: {{ formId }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const formId = ref<string | null>(null);

onMounted(() => {
  formId.value = route.query.id as string || 'No ID provided';
});
</script>

<style scoped>
.form-preview {
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
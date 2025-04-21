<template>
  <div class="app-layout">
    <Sidebar v-model:visible="showLeftPanel" position="left" class="side-panel left-panel">
      <FormList />
    </Sidebar>
    <main class="content">
      <div class="menu-button-group">
        <Button icon="pi pi-bars" class="menu-button" @click="showLeftPanel = true" rounded severity="contrast"
          outlined />
        <Button icon="pi pi-cog" class="menu-button" @click="showRightPanel = true" rounded severity="contrast"
          outlined />
      </div>
      <FormContent />
    </main>
    <transition name="slide-right">
      <div v-if="showRightPanel" class="side-panel right-panel">
        <div>
          <Button icon="pi pi-times" class="close-button" @click="showRightPanel = false" rounded severity="contrast"
            outlined />
          <h3>Form value</h3>
          <div class="json-viewer">
            <JsonViewer :data="displayValue" :deep="2" />
          </div>
          <h3>Form error</h3>
          <div class="json-viewer">
            <JsonViewer :data="displayErrors" :deep="2" />
          </div>
          <h3>Form Meta Data</h3>
          <div class="json-viewer">
            <Button icon="pi pi-copy" class="copy-button" @click="copyToClipboard(displayMeta)" rounded severity="contrast" outlined />
            <JsonViewer :data="displayMeta" :deep="2"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import FormList from './form-list/index.vue';
import FormContent from './form-content/index.vue';
import { currentForm } from './form-content/index.viewmodel';
import JsonViewer from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';

const showLeftPanel = ref(false);
const showRightPanel = ref(false);

const route = useRoute();

onMounted(() => {
  const id = route.query.formId;
  showLeftPanel.value = !id;
});


const displayValue = computed(() => {
  return currentForm.value?.getFormValue();
});

const displayMeta = currentForm as any;

const displayErrors = computed(() => {
  return currentForm.value?.getFormErrors();
});

function copyToClipboard(data: any) {
  const text = JSON.stringify(data, null, 2);
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
</script>

<style scoped lang="scss">
.app-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
}

.side-panel {

  padding: 1rem;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.left-panel {
  border-right: 1px solid #ddd;
}

.right-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  min-width: 400px;
  padding: 1rem;
  background-color: #f4f4f4;
  border-left: 1px solid #ddd;
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  font-size: 12px;

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #333;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #007ad9;
    }
  }

  .btn-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .json-viewer {
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    max-height: 700px;
    font-size: 12px;
    overflow-y: auto;
  }
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

.content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}

.menu-button-group {
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 1rem;
  z-index: 1000;
}
</style>
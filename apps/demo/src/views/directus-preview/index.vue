<template>
  <div class="app-layout">
    <Sidebar v-model:visible="showLeftPanel" position="left" class="side-panel left-panel">
      <FormList />
    </Sidebar>
    <main class="content">
      <div class="menu-button-group">
        <Button
          icon="pi pi-bars"
          class="menu-button"
          @click="showLeftPanel = true"
          rounded
          severity="contrast"
          outlined
        />
        <Button
          icon="pi pi-cog"
          class="menu-button"
          @click="showRightPanel = true"
          rounded
          severity="contrast"
          outlined
        />
      </div>
      <FormContent />
    </main>
    <transition name="slide-right">
      <FormInspector
        v-if="showRightPanel"
        :onClose="() => (showRightPanel = false)"
        :displayValue="displayValue"
        :displayErrors="displayErrors"
        :displayMeta="displayMeta"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import FormList from './form-list/index.vue';
import FormContent from './form-content/index.vue';
import FormInspector from './form-inspector/index.vue';
import { currentForm } from './form-content/index.viewmodel';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';

import 'vue-json-pretty/lib/styles.css';

const showLeftPanel = ref(false);
const showRightPanel = ref(false);

const route = useRoute();

onMounted(() => {
  const id = route.query.formId;
  showLeftPanel.value = !id;
});

const displayValue = computed(() => currentForm.value?.getFormValue());
const displayErrors = computed(() => currentForm.value?.getFormErrors());
const displayMeta = currentForm as any;
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
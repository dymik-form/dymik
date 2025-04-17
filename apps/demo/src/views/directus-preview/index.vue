<template>
  <div class="app-layout">
    <aside v-if="showLeftPanel" class="side-panel left-panel">
      <FormList />
    </aside>
    <main class="content">
      <FormContent />
    </main>
    <aside v-if="showRightPanel" class="side-panel right-panel">
      <div>
        <div class="btn-group">
          <Button @click="clear">Reset form</Button>
          <Button @click="populateData">Populate data</Button>
          <Button @click="setEmailError">Set Email Error</Button>
        </div>
        <h3>Form value</h3>
        <div class="json-viewer">
          <JsonViewer :data="displayValue" />
        </div>
        <h3>Form error</h3>
        <div class="json-viewer">
          <JsonViewer :data="displayErrors" />
        </div>
        <h3>Form Meta Data</h3>
        <div class="json-viewer">
          <JsonViewer :data="displayMeta" />
        </div>
      </div>
    </aside>
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

const showLeftPanel = ref(false);
const showRightPanel = ref(false);

const route = useRoute();

onMounted(() => {
  const id = route.query.formId;
  showLeftPanel.value = !id;
});

function clear() {
  currentForm.value?.reset();
}

function populateData() {
  const sampleData = {
    "id": "Tesst",
    "fullName": "Nguyễn Đăng Khoa",
    "phone": "0393689453",
    "email": "dangkhoaicao@gmail.com",
    "gender": "Nam",
    "quantity": 2,
    "birth_day": "1993-09-18T17:00:00",
    "id_number": "087093008430",
    "note": "Vợ con theo nữa"
  };

  currentForm.value?.setFormValue(sampleData);
}

function setEmailError() {
  currentForm.value?.setFormError('email', 'Email đã tồn tại trong hệ thống');
}

const displayValue = computed(() => {
  return currentForm.value?.getFormValue();
});

const displayMeta = currentForm as any;

const displayErrors = computed(() => {
  return currentForm.value?.getFormErrors();
});
</script>

<style scoped lang="scss">
.app-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
}

.side-panel {
  width: 20%;
  padding: 1rem;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.left-panel {
  border-right: 1px solid #ddd;
}

.right-panel {
  border-left: 1px solid #ddd;

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
    overflow-y: auto;
  }
}

.content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
</style>
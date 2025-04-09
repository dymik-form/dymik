<script setup lang="ts">
import FormList from './views/form-list/index.vue';
import FormContent from './views/form-content/index.vue';
import { formValue } from './models/global';
import { currentForm } from './views/form-content/index.viewmodel';
// @ts-ignore
import JsonViewer from 'vue-json-pretty'; // Import JSON viewer
import 'vue-json-pretty/lib/styles.css'; // Import styles for JSON viewer

function clear() {
  currentForm.value?.reset();
  formValue.value = currentForm.value?.getFormValue();
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
  }

  currentForm.value?.setFormValue(sampleData);

  formValue.value = currentForm.value?.getFormValue();
}

const displayValue = formValue as any;

const displayMeta = currentForm as any;

</script>

<template>
  <div class="app-layout">
    <aside class="side-panel left-panel">
      <FormList />
    </aside>
    <main class="content">
      <FormContent />
    </main>
    <aside class="side-panel right-panel">
      <div>
        <div class="btn-group">
          <Button @click="clear">Reset form</Button>
          <Button @click="populateData">Populate data</Button>
        </div>
        <h3>Form value</h3>
        <!-- Replace plain text with JSON viewer -->
         <div class="json-viewer">
          <JsonViewer :data="displayValue" />
         </div>
        <h3>Form Meta Data</h3>
        <div class="json-viewer">
          <JsonViewer :data="displayMeta" />
        </div>
       
      </div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  height: 100vh;
  width: 100%;
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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

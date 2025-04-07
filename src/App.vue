<script setup lang="ts">
import FormList from './views/form-list/index.vue';
import FormContent from './views/form-content/index.vue';
</script>

<template>
  <div class="app-layout">
    <aside class="side-panel left-panel">
      <FormList />
    </aside>
    <main class="content">
      <FormContent />
    </main>
    <!-- <aside class="side-panel right-panel">
      <h2>Right Panel</h2>
    </aside> -->
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

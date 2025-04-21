<template>
  <div class="preview-layout">
    <!-- Header -->
    <header class="header">
      <img src="/public/logo.png" alt="Dymik Logo" class="logo" />
      <!-- <nav class="nav">
        <a href="/" class="nav-link">Home</a>
        <a href="/preview" class="nav-link">Preview</a>
      </nav> -->
    </header>

    <div class="content-wrapper">
      <!-- Side Panel -->
      <aside class="side-panel">
        <ul>
          <li><a href="/preview/form?id=login">Login Form</a></li>
          <li><a href="/preview/form?id=register">Register Form</a></li>
        </ul>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Add any necessary script setup here
</script>

<style scoped>
.preview-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.logo {
  height: 40px;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.side-panel {
  width: 250px;
  background-color: #f0f0f0;
  padding: 1rem;
  border-right: 1px solid #ddd;
}

.side-panel ul {
  list-style: none;
  padding: 0;
}

.side-panel li {
  margin-bottom: 0.5rem;
}

.side-panel a {
  text-decoration: none;
  color: #333;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>
<template>
  <div class="landing-page">
    <!-- Header -->
    <header class="header">
      <img src="/public/logo.png" alt="Dymik Logo" class="logo" />
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <a href="https://github.com/dymik-form/dymik-vue" target="_blank" class="nav-link">
          <i class="pi pi-github"></i>
        </a>
        <a href="/preview" class="nav-link">Preview</a>
        <Button label="Getting Started" class="p-button-raised p-button-primary cta-button" />
      </nav>
      <Button icon="pi pi-bars" class="menu-toggle" @click="toggleMenu" />
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <h1>Create Dynamic Forms Effortlessly</h1>
      <p>The ultimate solution for lazy developers to build forms in minutes.</p>
      <Button label="Get Started" class="p-button-raised p-button-primary" />
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <h2>Key Features</h2>
      <div class="feature-list">
        <Card style="width: 25rem; overflow: hidden">
          <template #title>Easy Customization</template>
          <template #content>
            <p class="m-0">Create forms with fields in just a few clicks.</p>
          </template>
        </Card>
        <Card style="width: 25rem; overflow: hidden">
          <template #title>Powerful Integration</template>
          <template #content>
            <p class="m-0">Seamlessly connect with APIs and other services.</p>
          </template>
        </Card>
        <Card style="width: 25rem; overflow: hidden">
          <template #title>Live Preview</template>
          <template #content>
            <p class="m-0">Test your forms instantly during creation.</p>
          </template>
        </Card>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Dymik Form. All rights reserved.</p>
      <nav class="footer-nav">
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms of Service</a>
      </nav>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.landing-page {
  text-align: center;
  width: 100%;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  position: relative;
}

.logo {
  height: 40px;
}

.nav {
  display: flex;
  gap: 1rem;
  transition: transform 0.3s ease-in-out;
  align-items: center;
}

.nav.nav-open {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #f8f9fa;
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.menu-toggle {
  display: none;
}

.cta-button {
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav.nav-open {
    display: flex;
  }
}

.hero {
  margin-bottom: 3rem;
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-list {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer {
  margin-top: 3rem;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  text-align: center;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.footer-link {
  text-decoration: none;
  color: #333;
}
</style>
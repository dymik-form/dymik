<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Create Dynamic Forms Effortlessly</h1>
      <p>The ultimate solution for lazy developers to build forms in minutes.</p>
      <Button label="Get Started" class="p-button-raised p-button-primary" />
    </section>

    <!-- Features Section -->
    <section class="features">
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
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.landing-page {
  text-align: center;
  padding: 2rem;
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
</style>
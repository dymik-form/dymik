# Usage

## Import and Use Components

To use `DymikForm` in your Vue.js project, follow these steps:

1. Import and register `DymikForm` as a plugin in your `main.ts` file:

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import DymikForm from 'dymik-core';
import 'dymik-core/dist/dymik-core.css';

const app = createApp(App);

// Register DymikForm as a plugin
app.use(DymikForm);

app.mount('#app');
```

2. Use the `DymikForm` component in your Vue templates:

```vue
<template>
  <DymikForm />
</template>

<script setup>
import { DymikForm } from 'dymik-core';
</script>
```
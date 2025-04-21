<template>
  <div class="form-list full-width">
    <ul class="form-list-items">
      <li 
        v-for="form in forms" 
        :key="form.name" 
        class="form-list-item" 
        @click="openForm(form)"
      >
        <div class="form-details">
          <span class="form-name">{{ form.name }}</span>
          <p>{{ form.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { forms } from './index.viewmodel';
import { openForm, eventStore } from './index.eventstore';

eventStore();
</script>

<style scoped lang="scss">
.form-list.full-width {
  width: 100%;
}

.form-list-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.form-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem; /* Reduced padding for smaller height */
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.75rem; /* Reduced margin for compact spacing */
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-list-item:hover {
  background-color: #f9f9f9;
}

.form-details {
  flex: 1;
  margin-right: 1rem;
}

.form-name {
  display: block;
  font-weight: bold;
  color: #000; /* Black color for the form name */
  margin-bottom: 0.25rem; /* Spacing between name and description */
}

.form-details p {
  margin: 0;
  color: #666;
  font-size: 0.875rem; /* Reduced font size */
}
</style>
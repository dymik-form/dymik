<template>
    <div class="side-panel right-panel">
        <div>
            <Button icon="pi pi-times" class="close-button" @click="() => onClose?.()" rounded severity="contrast"
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
                <JsonViewer :data="displayMeta" :deep="2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import JsonViewer from 'vue-json-pretty';

import 'vue-json-pretty/lib/styles.css';

defineProps({
    onClose: Function,
    displayValue: Object,
    displayErrors: Object,
    displayMeta: Object,
});
</script>

<style scoped lang="scss">
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
</style>

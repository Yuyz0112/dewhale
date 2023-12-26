<script setup>
import { ToastProvider } from "radix-vue";

const props = defineProps({
  label: { type: String, required: false },
  duration: { type: Number, required: false },
  swipeDirection: { type: String, required: false },
  swipeThreshold: { type: Number, required: false },
});
</script>

<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>

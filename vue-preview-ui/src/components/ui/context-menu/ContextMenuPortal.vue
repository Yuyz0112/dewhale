<script setup>
import { ContextMenuPortal } from "radix-vue";

const props = defineProps({
  to: { type: null, required: false },
  disabled: { type: Boolean, required: false },
  forceMount: { type: Boolean, required: false },
});
</script>

<template>
  <ContextMenuPortal v-bind="props">
    <slot />
  </ContextMenuPortal>
</template>

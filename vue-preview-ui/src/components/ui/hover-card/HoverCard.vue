<script setup>
import { HoverCardRoot, useForwardProps } from "radix-vue";

const props = defineProps({
  defaultOpen: { type: Boolean, required: false },
  open: { type: Boolean, required: false },
  openDelay: { type: Number, required: false },
  closeDelay: { type: Number, required: false },
});
const forwarded = useForwardProps(props);
</script>

<template>
  <HoverCardRoot v-bind="forwarded">
    <slot />
  </HoverCardRoot>
</template>

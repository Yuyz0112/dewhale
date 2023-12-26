<script setup>
import { DropdownMenuSeparator } from "radix-vue";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <DropdownMenuSeparator v-bind="props" class="-mx-1 my-1 h-px bg-muted" />
</template>

<script setup>
import { DropdownMenuLabel } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  inset: { type: Boolean, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <DropdownMenuLabel
    v-bind="props"
    :class="
      cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', props.class)
    "
  >
    <slot />
  </DropdownMenuLabel>
</template>

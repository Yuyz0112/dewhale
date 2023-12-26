<script setup>
import { ContextMenuLabel } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
  inset: { type: Boolean, required: false },
});
</script>

<template>
  <ContextMenuLabel
    v-bind="props"
    :class="
      cn(
        'px-2 py-1.5 text-sm font-semibold text-foreground',
        inset && 'pl-8',
        props.class ?? ''
      )
    "
  >
    <slot />
  </ContextMenuLabel>
</template>

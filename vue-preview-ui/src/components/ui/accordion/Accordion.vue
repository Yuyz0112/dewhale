<script setup>
import { AccordionRoot, useEmitAsProps } from "radix-vue";

const props = defineProps({
  type: { type: String, required: true },
  modelValue: { type: [String, Array], required: false },
  defaultValue: { type: [String, Array], required: false },
  collapsible: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false },
  dir: { type: String, required: false },
  orientation: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <AccordionRoot v-bind="{ ...props, ...useEmitAsProps(emits) }">
    <slot />
  </AccordionRoot>
</template>

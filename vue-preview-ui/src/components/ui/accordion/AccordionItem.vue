<script setup>
import { AccordionItem } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  disabled: { type: Boolean, required: false },
  value: { type: String, required: true },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <AccordionItem v-bind="props" :class="cn('border-b', props.class ?? '')">
    <slot />
  </AccordionItem>
</template>

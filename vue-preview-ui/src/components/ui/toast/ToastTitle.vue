<script setup>
import { ToastTitle } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <ToastTitle v-bind="props" :class="cn('text-sm font-semibold', props.class)">
    <slot />
  </ToastTitle>
</template>

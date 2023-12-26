<script setup>
import { ToastViewport } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  hotkey: { type: Array, required: false },
  label: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <ToastViewport
    v-bind="props"
    :class="
      cn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        props.class
      )
    "
  />
</template>

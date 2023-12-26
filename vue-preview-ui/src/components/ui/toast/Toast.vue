<script>
export {};
</script>

<script setup>
import { ToastRoot, useEmitAsProps } from "radix-vue";

import { toastVariants } from ".";
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: String, required: false },
  variant: { type: null, required: false },
  onOpenChange: { type: Function, required: false, skipCheck: true },
  defaultOpen: { type: Boolean, required: false },
  forceMount: { type: Boolean, required: false },
  type: { type: String, required: false },
  open: { type: Boolean, required: false },
  duration: { type: Number, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const emits = defineEmits([
  "close",
  "escapeKeyDown",
  "pause",
  "resume",
  "swipeStart",
  "swipeMove",
  "swipeCancel",
  "swipeEnd",
  "update:open",
]);
</script>

<template>
  <ToastRoot
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
    :class="cn(toastVariants({ variant: props.variant }), props.class)"
    @update:open="onOpenChange"
  >
    <slot />
  </ToastRoot>
</template>

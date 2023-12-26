<script setup>
import { ProgressIndicator, ProgressRoot } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  modelValue: { type: [Number, null], required: false, default: 0 },
  max: { type: Number, required: false },
  getValueLabel: { type: Function, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false, default: "" },
});
</script>

<template>
  <ProgressRoot
    :class="
      cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
        props.class
      )
    "
    v-bind="props"
  >
    <ProgressIndicator
      :class="
        cn(
          'h-full w-full flex-1 duration-300 bg-foreground transition-all',
          props.class
        )
      "
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>

<script setup>
import { ScrollAreaScrollbar, ScrollAreaThumb } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  orientation: { type: String, required: false, default: "vertical" },
  forceMount: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="props"
    :class="
      cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' &&
          'h-2.5 border-t border-t-transparent p-[1px]',
        $attrs.class ?? ''
      )
    "
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
</template>

<script setup>
import { Separator } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  orientation: { type: String, required: false },
  decorative: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <Separator
    :class="[
      cn('shrink-0 bg-secondary', props.class),
      props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
    ]"
  />
</template>

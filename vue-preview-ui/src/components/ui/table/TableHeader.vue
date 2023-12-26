<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: String, required: false },
});
</script>

<template>
  <thead :class="cn('[&_tr]:border-b', props.class)">
    <slot />
  </thead>
</template>

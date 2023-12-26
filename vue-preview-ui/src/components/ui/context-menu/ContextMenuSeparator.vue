<script setup>
import { ContextMenuSeparator } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <ContextMenuSeparator
    v-bind="props"
    :class="cn('-mx-1 my-1 h-px bg-border', $attrs.class ?? '')"
  />
</template>

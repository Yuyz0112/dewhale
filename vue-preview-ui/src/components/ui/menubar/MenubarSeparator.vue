<script setup>
import { MenubarSeparator } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <MenubarSeparator
    :class="cn('-mx-1 my-1 h-px bg-secondary', $attrs.class ?? '')"
    v-bind="props"
  />
</template>

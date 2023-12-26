<script setup>
import { MenubarMenu } from "radix-vue";

const props = defineProps({
  value: { type: String, required: false },
});
</script>

<template>
  <MenubarMenu v-bind="props">
    <slot />
  </MenubarMenu>
</template>

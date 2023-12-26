<script setup>
import { NavigationMenuLink, useEmitAsProps } from "radix-vue";

const props = defineProps({
  active: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const emits = defineEmits(["select"]);
</script>

<template>
  <NavigationMenuLink v-bind="{ ...props, ...useEmitAsProps(emits) }">
    <slot />
  </NavigationMenuLink>
</template>

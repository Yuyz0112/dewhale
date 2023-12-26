<script setup>
import { NavigationMenuList } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <NavigationMenuList
    v-bind="props"
    :class="
      cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        props.class
      )
    "
  >
    <slot />
  </NavigationMenuList>
</template>

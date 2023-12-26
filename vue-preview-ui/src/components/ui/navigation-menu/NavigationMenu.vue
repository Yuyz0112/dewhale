<script setup>
import { NavigationMenuRoot } from "radix-vue";
import NavigationMenuViewport from "./NavigationMenuViewport.vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  modelValue: { type: String, required: false },
  defaultValue: { type: String, required: false },
  dir: { type: String, required: false },
  orientation: { type: String, required: false },
  delayDuration: { type: Number, required: false },
  skipDelayDuration: { type: Number, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});

const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <NavigationMenuRoot
    v-bind="props"
    :class="
      cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center',
        props.class
      )
    "
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>

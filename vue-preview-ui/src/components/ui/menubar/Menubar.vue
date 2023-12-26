<script setup>
import { MenubarRoot } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  modelValue: { type: String, required: false },
  defaultValue: { type: String, required: false },
  dir: { type: String, required: false },
  loop: { type: Boolean, required: false },
  class: { type: String, required: false },
});

const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <MenubarRoot
    v-bind="props"
    :class="
      cn(
        'flex h-10 items-center space-x-1 rounded-md border border-border p-1',
        props.class
      )
    "
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
  </MenubarRoot>
</template>

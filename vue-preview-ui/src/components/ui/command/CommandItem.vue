<script setup>
import { ComboboxItem, useEmitAsProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  value: { type: null, required: true },
  disabled: { type: Boolean, required: false },
  textValue: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const emits = defineEmits(["select"]);

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <ComboboxItem
    v-bind="{ ...props, ...emitsAsProps }"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        $attrs.class ?? ''
      )
    "
    @select.prevent
  >
    <slot />
  </ComboboxItem>
</template>

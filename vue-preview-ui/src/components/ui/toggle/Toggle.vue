<script setup>
import { Toggle, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";
import { toggleVariants } from ".";
import { cn } from "@/lib/utils";

const props = defineProps({
  variant: { type: null, required: false, default: "default" },
  size: { type: null, required: false, default: "default" },
  disabled: { type: Boolean, required: false, default: false },
  defaultValue: { type: Boolean, required: false },
  pressed: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const emits = defineEmits(["update:pressed"]);

const toggleProps = computed(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { variant, size, disabled, ...otherProps } = props;
  return otherProps;
});

const forwarded = useForwardPropsEmits(toggleProps, emits);
</script>

<template>
  <Toggle
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size, class: $attrs.class ?? '' }))"
    :disabled="props.disabled"
  >
    <slot />
  </Toggle>
</template>

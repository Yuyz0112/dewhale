<script setup>
import { AvatarRoot } from "radix-vue";
import { avatarVariant } from ".";
import { cn } from "@/lib/utils";

const props = defineProps({
  size: { type: null, required: false, default: "sm" },
  shape: { type: null, required: false, default: "circle" },
  class: { type: String, required: false },
});
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>

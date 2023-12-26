<script setup>
import { badgeVariants } from ".";
import { cn } from "@/lib/utils";

defineProps({
  variant: { type: null, required: false },
});
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), $attrs.class ?? '')">
    <slot />
  </div>
</template>

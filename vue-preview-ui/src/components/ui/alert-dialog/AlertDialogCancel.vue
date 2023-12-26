<script setup>
import { AlertDialogCancel } from "radix-vue";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <AlertDialogCancel
    v-bind="props"
    :class="
      cn(
        buttonVariants({ variant: 'outline' }),
        'mt-2 sm:mt-0',
        $attrs.class ?? ''
      )
    "
  >
    <slot />
  </AlertDialogCancel>
</template>

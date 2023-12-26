<script setup>
import { TabsContent } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  value: { type: String, required: true },
  forceMount: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});
</script>

<template>
  <TabsContent
    :class="
      cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        props.class
      )
    "
    v-bind="props"
  >
    <slot />
  </TabsContent>
</template>

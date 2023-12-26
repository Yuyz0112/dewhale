<script setup>
import { Search } from "lucide-vue-next";
import { ComboboxInput } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  type: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  autoFocus: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper>
    <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <ComboboxInput
      v-bind="{ ...props, ...$attrs }"
      auto-focus
      :class="
        cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          $attrs.class ?? ''
        )
      "
    />
  </div>
</template>

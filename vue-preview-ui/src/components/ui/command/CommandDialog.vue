<script setup>
import { useEmitAsProps } from "radix-vue";
import Command from "./Command.vue";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const props = defineProps({
  open: { type: Boolean, required: false },
  defaultOpen: { type: Boolean, required: false },
  modal: { type: Boolean, required: false },
});
const emits = defineEmits(["update:open"]);

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <Dialog v-bind="{ ...props, ...emitsAsProps }">
    <DialogContent class="p-0 overflow-hidden shadow-lg">
      <Command
        class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
      >
        <slot />
      </Command>
    </DialogContent>
  </Dialog>
</template>

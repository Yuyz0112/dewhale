<script setup>
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useEmitAsProps,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  name: { type: String, required: false },
  defaultValue: { type: Array, required: false },
  modelValue: { type: Array, required: false },
  disabled: { type: Boolean, required: false },
  orientation: { type: String, required: false },
  dir: { type: String, required: false },
  inverted: { type: Boolean, required: false },
  min: { type: Number, required: false },
  max: { type: Number, required: false },
  step: { type: Number, required: false },
  minStepsBetweenThumbs: { type: Number, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const emits = defineEmits(["update:modelValue", "valueCommit"]);

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <SliderRoot
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center',
        $attrs.class ?? ''
      )
    "
    v-bind="{ ...props, ...emitsAsProps }"
  >
    <SliderTrack
      class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
    >
      <SliderRange class="absolute h-full bg-primary" />
    </SliderTrack>
    <SliderThumb
      class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderRoot>
</template>

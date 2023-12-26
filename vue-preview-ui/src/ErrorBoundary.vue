<template>
  <div>
    <div
      v-if="hasError"
      class="p-4 bg-red-100 border border-red-400 text-red-700"
    >
      <h1 class="text-lg font-bold">Something went wrong.</h1>
      <pre v-if="error" class="overflow-auto text-sm mt-2 bg-red-50 p-2">
      <code>{{ error.toString() }}</code>
    </pre>
      <pre v-if="errorInfo" class="overflow-auto text-sm mt-2 bg-red-50 p-2">
      <code>{{ errorInfo.componentStack }}</code>
    </pre>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup(_, { slots }) {
    const hasError = ref(false);
    const error = ref(null);
    const errorInfo = ref(null);

    onMounted(() => {
      try {
        if (!slots.default) {
          throw new Error("No default slot content provided");
        }
      } catch (e) {
        hasError.value = true;
        error.value = e;
        // errorInfo.value can be populated as needed
      }
    });

    return {
      hasError,
      error,
      errorInfo,
    };
  },
});
</script>

<template>
  <main class="vx-dev-wrapper relative">
    <div class="flex justify-end p-1">
      <Button @click="toggleShowCanvas">
        {{ showCanvas ? "Code" : "Canvas" }}
      </Button>
    </div>
    <div
      v-if="showCanvas"
      class="rounded-lg border border-black/5 bg-white shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.04)] mx-1 p-1"
    >
      <ErrorBoundary>
        <Preview />
      </ErrorBoundary>
    </div>
    <div
      v-else
      class="bg-gray-100 mx-1 p-1 rounded overflow-auto relative text-xs whitespace-pre"
    >
      <Button
        @click="copyCode"
        variant="outline"
        class="mb-2 absolute top-1 right-1 whitespace-nowrap"
      >
        {{ copied ? "Copied!" : "Copy Code" }}
      </Button>
      <div v-html="code"></div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Button } from "./components/ui/button";
import ErrorBoundary from "./ErrorBoundary.vue";
import Preview from "./Preview.vue";
import previewStr from "./Preview.vue?raw";
import { getHighlighter, setCDN } from "shiki";

const code = ref("");
function setCodeHighlighter() {
  setCDN("https://cdn.jsdelivr.net/npm/shiki");
  getHighlighter({ theme: "one-dark-pro", langs: ["vue"] })
    .then((h) => {
      const html = h.codeToHtml(previewStr, { lang: "vue" });
      code.value = html;
    })
    .catch((error) => {
      code.value = error;
    });
}

const showCanvas = ref(true);
const copied = ref(false);

const toggleShowCanvas = () => {
  showCanvas.value = !showCanvas.value;
};

const copyCode = () => {
  // Implement copy-to-clipboard functionality
  navigator.clipboard.writeText(previewStr).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  });
};
onMounted(() => {
  setCodeHighlighter();
});
</script>

<style scoped>
</style>

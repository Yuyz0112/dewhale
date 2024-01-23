<script>
  import { Button } from "$lib/components/ui/button";
  import ErrorBoundary from "./error-boundary.svelte";
  import Preview from "./preview.svelte";
  import previewStr from "./preview.svelte?raw";
  import { onMount } from "svelte";
  import { getHighlighter, setCDN } from "shiki";

  let showCanvas = true;
  let copied = false;

  const toggleShowCanvas = () => {
    showCanvas = !showCanvas;
  };

  const copyCode = () => {
    // Implement copy-to-clipboard functionality
    navigator.clipboard.writeText(previewStr).then(() => {
      copied = true;
      setTimeout(() => (copied = false), 2000);
    });
  };

  let lightCode = "";
  let darkCode = "";
  function setCodeHighlighter() {
    setCDN("https://cdn.jsdelivr.net/npm/shiki");
    getHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["svelte"],
    })
      .then((h) => {
        lightCode = h.codeToHtml(previewStr, {
          lang: "svelte",
          theme: "github-light",
        });
        darkCode = h.codeToHtml(previewStr, {
          lang: "svelte",
          theme: "github-dark",
        });
      })
      .catch((error) => {
        lightCode = error;
        darkCode = error;
      });
  }
  onMount(() => {
    setCodeHighlighter();
  });
</script>

<main class="vx-dev-wrapper relative">
  <div class="flex justify-end p-1">
    <Button on:click={toggleShowCanvas}>
      {showCanvas ? "Code" : "Canvas"}
    </Button>
  </div>
  {#if showCanvas}
    <div
      class="rounded-lg border border-black/5 bg-white shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.04)] mx-1 p-1"
    >
      <ErrorBoundary>
        <Preview />
      </ErrorBoundary>
    </div>
  {:else}
    <div class="bg-gray-100 mx-1 p-1 rounded relative text-xs">
      <Button
        on:click={copyCode}
        variant="outline"
        class="mb-2 absolute top-1 right-1 whitespace-nowrap"
      >
        {copied ? "Copied!" : "Copy Code"}
      </Button>
      <div>{@html lightCode}</div>
      <div>{@html darkCode}</div>
    </div>
  {/if}
</main>

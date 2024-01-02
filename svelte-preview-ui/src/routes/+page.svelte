<script>
  import { Button } from "$lib/components/ui/button";
  import ErrorBoundary from "./error-boundary.svelte";
  import Preview from "./preview.svelte";
  import previewStr from "./preview.svelte?raw";

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
    <div
      class="bg-gray-100 mx-1 p-1 rounded overflow-auto relative text-xs whitespace-pre"
    >
      <Button
        on:click={copyCode}
        variant="outline"
        class="mb-2 absolute top-1 right-1 whitespace-nowrap"
      >
        {copied ? "Copied!" : "Copy Code"}
      </Button>
      <code>{previewStr}</code>
    </div>
  {/if}
</main>

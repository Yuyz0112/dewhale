<script>
  import { onMount } from "svelte";

  let hasError = false;
  let error;
  let errorInfo;

  onMount(async () => {
    try {
      if (!$$slots.default) {
        throw new Error("No default slot content provided");
      }
    } catch (e) {
      hasError = true;
      error = e;
      // populate errorInfo as needed
    }
  });
</script>

{#if hasError}
  <div class="p-4 bg-red-100 border border-red-400 text-red-700">
    <h1 class="text-lg font-bold">Something went wrong.</h1>

    {#if error}
      <pre class="overflow-auto text-sm mt-2 bg-red-50 p-2">
        <code>{error.toString()}</code>
      </pre>
    {/if}

    {#if errorInfo}
      <pre class="overflow-auto text-sm mt-2 bg-red-50 p-2">
        <code>{errorInfo.componentStack}</code>
      </pre>
    {/if}
  </div>
{:else}
  <slot />
{/if}

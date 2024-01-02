<script>

  import { AspectRatio } from '@/components/ui/aspect-ratio';
  import { Button } from '@/components/ui/button';
  import * as Dialog from "$lib/components/ui/dialog";
  import { Heart, Download, X } from "lucide-svelte";

  // Mock data for the photo wall
  const photos = [
    { src: "https://images.unsplash.com/photo-1", tags: ["Nature", "Mountains"], description: "A beautiful mountain range." },
    { src: "https://images.unsplash.com/photo-2", tags: ["City", "Nightlife"], description: "City lights at night." },
    { src: "https://images.unsplash.com/photo-3", tags: ["Ocean", "Beach"], description: "Relaxing beach day." },
    // ... more photos
  ];

  let openDialog = false;
  let selectedPhoto = null;

  // Function to handle photo click
  function handlePhotoClick(photo) {
    selectedPhoto = photo;
    openDialog = true;
  }

  // Function to close the dialog
  function closeDialog() {
    openDialog = false;
    selectedPhoto = null;
  }
</script>

<main class="space-y-12">
  <section class="text-center bg-cover bg-center py-20" style="background-image: url('https://images.unsplash.com/photo-main');">
    <h1 class="text-4xl font-bold text-white">Photographer's Nickname</h1>
    <p class="text-xl text-white mt-4">A brief introduction about the photographer and their work.</p>
  </section>

  <section class="photo-wall p-4">
    {#each photos as photo (photo.src)}
      <div class="inline-block p-2" on:click={() => handlePhotoClick(photo)}>
        <AspectRatio ratio={16 / 9} class="bg-muted w-[300px]">
          <img
            src={photo.src}
            alt="Photo"
            class="rounded-md object-cover"
            loading="lazy"
            style="height: auto;"
          />
        </AspectRatio>
        <div class="flex flex-wrap gap-2 justify-center mt-2">
          {#each photo.tags as tag}
            <span class="bg-gray-200 rounded-full px-3 py-1 text-sm">{tag}</span>
          {/each}
        </div>
      </div>
    {/each}
  </section>

  <Dialog.Root bind:open={openDialog}>
    <Dialog.Trigger />
    <Dialog.Content class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <Dialog.Panel class="bg-white p-6 rounded-lg max-w-2xl w-full space-y-4">
        <Dialog.Title class="text-2xl font-bold">{selectedPhoto?.description}</Dialog.Title>
        <img src={selectedPhoto?.src} alt="Selected Photo" class="rounded-md" />
        <div class="flex gap-4">
          <Button variant="outline" onClick={closeDialog}>
            <X class="w-5 h-5" />
          </Button>
          <Button variant="outline">
            <Heart class="w-5 h-5" />
          </Button>
          <Button variant="outline">
            <Download class="w-5 h-5" />
          </Button>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each selectedPhoto?.tags as tag}
            <span class="bg-gray-200 rounded-full px-3 py-1 text-sm">{tag}</span>
          {/each}
        </div>
      </Dialog.Panel>
    </Dialog.Content>
  </Dialog.Root>

  <footer class="text-center py-4">
    <p>© Photographer's Name - All rights reserved</p>
    <p>备案信息: XXXXXXXX号</p>
  </footer>
</main>

<style>
  /* Custom styles for the photo wall to achieve a masonry layout */
  .photo-wall {
    column-count: 3;
    column-gap: 1rem;
  }

  .photo-wall > div {
    break-inside: avoid;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .photo-wall {
      column-count: 2;
    }
  }

  @media (max-width: 480px) {
    .photo-wall {
      column-count: 1;
    }
  }
</style>
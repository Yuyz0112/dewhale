<script>

  import { Button } from "$lib/components/ui/button";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Menubar from "$lib/components/ui/menubar";
  import * as Sidebar from "$lib/components/ui/sidebar";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import { Search } from "lucide-svelte";
  import { Plus } from "lucide-svelte";
  import { Music, Radio, FileText, Disc, User, Star, Clock, Heart } from "lucide-svelte";
</script>

<style>
  :global(:root) {
    --color-primary: #ff6a00;
    --color-primary-light: #ff9333;
    --color-primary-dark: #cc5400;
    --color-text-on-primary: #ffffff;
    --color-sidebar: #1a1a1a;
    --color-sidebar-text: #cccccc;
    --color-sidebar-active: #2a2a2a;
    --color-content-background: #2d2d2d;
    --color-content-text: #ffffff;
  }
</style>

<div class="flex h-screen bg-gray-900 text-white">
  <Sidebar.Root defaultOpen={true} class="w-64 bg-color-sidebar text-color-sidebar-text">
    <Sidebar.Trigger class="p-4">
      <Search size="24" />
    </Sidebar.Trigger>
    <Sidebar.Content>
      <div class="flex flex-col p-4 space-y-2">
        <Sidebar.Item active>
          <Music size="20" class="mr-2" />
          Discover
        </Sidebar.Item>
        <Sidebar.Item>
          <Radio size="20" class="mr-2" />
          Radio
        </Sidebar.Item>
        <Sidebar.Item>
          <FileText size="20" class="mr-2" />
          Browse
        </Sidebar.Item>
        <div class="mt-4">
          <p class="uppercase tracking-wide text-xs text-color-sidebar-text mb-2">Library</p>
          <Sidebar.Item>
            <Disc size="20" class="mr-2" />
            Playlists
          </Sidebar.Item>
          <Sidebar.Item>
            <Music size="20" class="mr-2" />
            Songs
          </Sidebar.Item>
          <Sidebar.Item>
            <Heart size="20" class="mr-2" />
            Made for You
          </Sidebar.Item>
          <Sidebar.Item>
            <User size="20" class="mr-2" />
            Artists
          </Sidebar.Item>
          <Sidebar.Item>
            <FileText size="20" class="mr-2" />
            Albums
          </Sidebar.Item>
        </div>
        <div class="mt-4">
          <p class="uppercase tracking-wide text-xs text-color-sidebar-text mb-2">Playlists</p>
          <Sidebar.Item>
            <Star size="20" class="mr-2" />
            Top Songs
          </Sidebar.Item>
          <Sidebar.Item>
            <Clock size="20" class="mr-2" />
            Recently Played
          </Sidebar.Item>
        </div>
      </div>
    </Sidebar.Content>
  </Sidebar.Root>

  <div class="flex-1 flex flex-col">
    <Menubar.Root class="bg-color-primary p-4">
      <Menubar.Menu>
        <Menubar.Trigger class="text-color-text-on-primary">Music</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Preferences</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Log Out</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="text-color-text-on-primary">File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New Playlist</Menubar.Item>
          <Menubar.Item>Import Playlist</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="text-color-text-on-primary">Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="text-color-text-on-primary">View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Full Screen</Menubar.Item>
          <Menubar.Item>Minimize</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="text-color-text-on-primary">Account</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Profile</Menubar.Item>
          <Menubar.Item>Settings</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>

    <main class="flex-1 overflow-y-auto p-6 bg-color-content-background">
      <Tabs.Root value="music" class="mb-6">
        <Tabs.List class="mb-4">
          <Tabs.Trigger value="music" class="text-color-primary">Music</Tabs.Trigger>
          <Tabs.Trigger value="podcasts">Podcasts</Tabs.Trigger>
          <Tabs.Trigger value="live">Live</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="music" class="mb-6">
          <h2 class="text-xl font-semibold text-color-content-text mb-4">Listen Now</h2>
          <p class="text-color-content-text mb-4">Top picks for you. Updated daily.</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AspectRatio ratio={1} class="bg-muted">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="React Rendezvous"
                class="rounded-md object-cover"
              />
            </AspectRatio>
            <AspectRatio ratio={1} class="bg-muted">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Async Awakenings"
                class="rounded-md object-cover"
              />
            </AspectRatio>
            <AspectRatio ratio={1} class="bg-muted">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="The Art of Reusability"
                class="rounded-md object-cover"
              />
            </AspectRatio>
            <AspectRatio ratio={1} class="bg-muted">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Stateful Symphony"
                class="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </Tabs.Content>
        <Tabs.Content value="podcasts">
          <p>Podcasts content goes here.</p>
        </Tabs.Content>
        <Tabs.Content value="live">
          <p>Live content goes here.</p>
        </Tabs.Content>
      </Tabs.Root>

      <div class="mb-6">
        <h2 class="text-xl font-semibold text-color-content-text mb-4">Made for You</h2>
        <p class="text-color-content-text mb-4">Your personal playlists. Updated daily.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AspectRatio ratio={1} class="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Thinking Components"
              class="rounded-md object-cover"
            />
          </AspectRatio>
          <AspectRatio ratio={1} class="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Functional Fury"
              class="rounded-md object-cover"
            />
          </AspectRatio>
          <AspectRatio ratio={1} class="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="React Rendezvous"
              class="rounded-md object-cover"
            />
          </AspectRatio>
          <AspectRatio ratio={1} class="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Stateful Symphony"
              class="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>

      <div class="flex justify-end">
        <Button variant="outline" class="text-color-primary border-color-primary hover:bg-color-primary hover:text-color-text-on-primary">
          <Plus size="20" class="mr-2" />
          Add music
        </Button>
      </div>
    </main>
  </div>
</div>
<script>

  import { Button } from "$lib/components/ui/button";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Menubar from "$lib/components/ui/menubar";
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
  <div class="w-64 bg-color-sidebar text-color-sidebar-text">
    <div class="p-4">
      <Search size="24" />
    </div>
    <div class="flex flex-col p-4 space-y-2">
      <div class="flex items-center p-2 rounded-md bg-color-sidebar-active">
        <Music size="20" class="mr-2" />
        Discover
      </div>
      <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
        <Radio size="20" class="mr-2" />
        Radio
      </div>
      <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
        <FileText size="20" class="mr-2" />
        Browse
      </div>
      <div class="mt-4">
        <p class="uppercase tracking-wide text-xs text-color-sidebar-text mb-2">Library</p>
        <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
          <Disc size="20" class="mr-2" />
          Playlists
        </div>
        <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
          <Music size="20" class="mr-2" />
          Songs
        </div>
        <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
          <Heart size="20" class="mr-2" />
          Made for You
        </div>
        <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
          <User size="20" class="mr-2" />
          Artists
        </div>
        <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
          <FileText size="20" class="mr-2" />
          Albums
        </div>
      </div>
      <div class="mt-4">
        <p class="uppercase tracking-wide text-xs text-color-sidebar-text mb-2">Playlists</p>
        <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
          <Star size="20" class="mr-2" />
          Top Songs
        </div>
        <div class="flex items-center p-2 rounded-md hover:bg-color-sidebar-active transition-colors">
          <Clock size="20" class="mr-2" />
          Recently Played
        </div>
      </div>
    </div>
  </div>

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
            <!-- Image placeholders with solid colors -->
            <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
            <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
            <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
            <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
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
          <!-- Image placeholders with solid colors -->
          <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
          <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
          <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
          <div class="bg-orange-300 rounded-md aspect-w-1 aspect-h-1"></div>
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
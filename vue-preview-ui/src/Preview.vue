<template>
  <NavigationMenu class="bg-white shadow">
    <NavigationMenuList class="flex items-center space-x-4 p-4">
      <NavigationMenuItem>
        <NavigationMenuLink class="flex items-center gap-2 text-blue-600 font-semibold">
          <Home class="h-5 w-5" />
          首页
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="hover:text-blue-600 transition-colors">动态</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="hover:text-blue-600 transition-colors">热点</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="hover:text-blue-600 transition-colors">直播</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="hover:text-blue-600 transition-colors">活动</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="hover:text-blue-600 transition-colors">赛事</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="hover:text-blue-600 transition-colors">APP</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="hover:text-blue-600 transition-colors">招牌</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup>

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Home } from 'lucide-vue-next';
</script>

<style>
/* Tailwind CSS is being used for styling */
</style>
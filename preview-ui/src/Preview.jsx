import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuViewport } from '@/components/ui/navigation-menu';
import React from 'react';

export default function HeaderWithNav() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-4 h-16">
            <NavigationMenuItem as="div">
              <NavigationMenuLink href="#" className="hover:text-gray-700">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem as="div">
              <NavigationMenuLink href="#" className="hover:text-gray-700">Inventory</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem as="div">
              <NavigationMenuLink href="#" className="hover:text-gray-700">Sell or Trade</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem as="div">
              <NavigationMenuLink href="#" className="hover:text-gray-700">New Arrivals</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem as="div">
              <NavigationMenuLink href="#" className="hover:text-gray-700">Select a Store</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem as="div">
              <NavigationMenuLink href="#" className="hover:text-gray-700">About Us</NavigationMenuLink>
            </NavigationMenuItem>
            {/* Dropdown for Docs */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-gray-700">Docs</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-md p-2">
                <NavigationMenuViewport>
                  <NavigationMenuLink href="#" className="block px-4 py-2 hover:bg-gray-100">Introduction</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="block px-4 py-2 hover:bg-gray-100">Installation</NavigationMenuLink>
                  <NavigationMenuLink href="#" className="block px-4 py-2 hover:bg-gray-100">Typography</NavigationMenuLink>
                </NavigationMenuViewport>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
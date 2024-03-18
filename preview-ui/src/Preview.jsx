import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Search, Bell, ShoppingCart, Home, User } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { useState } from 'react';

export default function PhoneHomePage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&dpr=2&q=80" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold">Home</h1>
        <div className="flex space-x-4">
          <Search className="w-6 h-6" />
          <Bell className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&dpr=2&q=80"
                alt="Carousel Slide 1"
                className="rounded-md object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://images.unsplash.com/photo-1581291519195-ef114bfb3cd6?w=800&dpr=2&q=80"
                alt="Carousel Slide 2"
                className="rounded-md object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://images.unsplash.com/photo-1581291519268-0c3b3a6c8ab1?w=800&dpr=2&q=80"
                alt="Carousel Slide 3"
                className="rounded-md object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Special Offer</CardTitle>
              <CardDescription>Don't miss out on our exclusive offer!</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1581291519195-ef114bfb3cd6?w=800&dpr=2&q=80"
                alt="Special Offer"
                className="rounded-md object-cover"
              />
            </CardContent>
            <CardFooter>
              <Button variant="solid">Shop Now</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink as="button" onClick={() => setActiveTab('home')}>
                <Home className={`w-6 h-6 ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-500'}`} />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink as="button" onClick={() => setActiveTab('search')}>
                <Search className={`w-6 h-6 ${activeTab === 'search' ? 'text-blue-500' : 'text-gray-500'}`} />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink as="button" onClick={() => setActiveTab('user')}>
                <User className={`w-6 h-6 ${activeTab === 'user' ? 'text-blue-500' : 'text-gray-500'}`} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
    </div>
  );
}
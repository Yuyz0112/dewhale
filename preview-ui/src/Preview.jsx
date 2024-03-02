import { Button } from '@/components/ui/button';
import { User, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useState } from 'react';

export default function RideNowWebsite() {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">RideNow</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Button>
            <Button variant="ghost">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4">
          {/* Carousel */}
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Motorcycle"
                  className="rounded-md object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Motorcycle"
                  className="rounded-md object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious>
              <ChevronLeft className="w-8 h-8" />
            </CarouselPrevious>
            <CarouselNext>
              <ChevronRight className="w-8 h-8" />
            </CarouselNext>
          </Carousel>

          {/* Search and Navigation */}
          <div className="flex justify-between items-center my-6">
            <Input placeholder="Search for vehicles, brands, and more..." />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Inventory</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>New Inventory</NavigationMenuLink>
                    <NavigationMenuLink>Pre-Owned Inventory</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Financing</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Parts</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Tabs for Inventory, Financing, etc. */}
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="financing">Financing</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="parts">Parts</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
            </TabsList>
            <TabsContent value="inventory">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <Table>
                  <TableCaption>A list of available vehicles.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Model</TableHead>
                      <TableHead>Brand</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Model X</TableCell>
                      <TableCell>Brand A</TableCell>
                      <TableCell className="text-right">$20,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Model Y</TableCell>
                      <TableCell>Brand B</TableCell>
                      <TableCell className="text-right">$25,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="financing">Financing options and information.</TabsContent>
            <TabsContent value="service">Service schedules and booking.</TabsContent>
            <TabsContent value="parts">Parts catalog and ordering.</TabsContent>
            <TabsContent value="company">Company information and history.</TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h2 className="font-bold">About Us</h2>
              <p>Learn more about RideNow and our commitment to riders.</p>
            </div>
            <div>
              <h2 className="font-bold">Customer Service</h2>
              <p>Get help with your orders and our products.</p>
            </div>
            <div>
              <h2 className="font-bold">Follow Us</h2>
              <p>Stay updated with our latest news and offers.</p>
            </div>
            <div>
              <h2 className="font-bold">Contact</h2>
              <p>Reach out for inquiries, feedback, or support.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
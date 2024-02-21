import { Button } from '@/components/ui/button';
import { Carousel, CarouselPrevious, CarouselContent, CarouselItem, CarouselNext } from '@/components/ui/carousel';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react';

export default function ProductShowcasePage() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Your Store</h1>
        </div>
        <div className="flex items-center">
          <Button variant="outline">Sign in</Button>
          <span className="ml-2">New customer? <a href="#" className="text-blue-600">Start here.</a></span>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <Carousel>
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Featured Product"
                className="rounded-md object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Featured Product"
                className="rounded-md object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Featured Product"
                className="rounded-md object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Deal</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&dpr=2&q=80"
                alt="Top Deal"
                className="rounded-md object-cover"
              />
            </CardContent>
            <CardFooter>
              <Button variant="solid">Up to 30% off</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Available now: AREA</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&dpr=2&q=80"
                alt="AREA"
                className="rounded-md object-cover"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Editors' pick for Kindle Unlimited</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&dpr=2&q=80"
                alt="Kindle Unlimited"
                className="rounded-md object-cover"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Find your romance trope</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&dpr=2&q=80"
                alt="Romance Trope"
                className="rounded-md object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}
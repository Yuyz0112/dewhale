import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function PhotographyPortfolio() {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      label: "Nature",
      description: "A serene lake surrounded by mountains.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      label: "City Life",
      description: "The hustle and bustle of the urban jungle.",
    },
    // Add more photos as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&dpr=2&q=80"
            alt="Main background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-xl">Passionate Photographer & Visual Storyteller</p>
        </div>
      </header>

      <main className="p-8 bg-white flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <AspectRatio ratio={1 / (1 + Math.random())}>
                    <img
                      src={photo.src}
                      alt={`Photo by John Doe - ${photo.label}`}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="outline">{photo.label}</Badge>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col items-center p-4">
                  <img
                    src={photo.src}
                    alt={`Photo by John Doe - ${photo.label}`}
                    className="rounded-md mb-4"
                  />
                  <p className="text-lg mb-2">{photo.description}</p>
                  <div className="flex space-x-2 mb-4">
                    <Badge>{photo.label}</Badge>
                  </div>
                  <Button>Contact for Original</Button>
                  <Button variant="outline" className="mt-2">Like</Button>
                  <DialogClose asChild>
                    <Button variant="outline" className="mt-2">Close</Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2021 John Doe Photography. All rights reserved.</p>
      </footer>
    </div>
  );
}
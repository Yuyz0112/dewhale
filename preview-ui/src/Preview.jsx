import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Mail, Heart, X } from 'lucide-react';
import React from 'react';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=800&dpr=2&q=80',
    label: 'Nature',
    description: 'A beautiful sunrise over the mountains.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&dpr=2&q=80',
    label: 'City Life',
    description: 'The hustle and bustle of the city at noon.',
  },
  // Add more photos as needed
];

export default function PhotographyPortfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Photographer's Nickname and Introduction */}
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&dpr=2&q=80"
          alt="Main background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-bold">John Doe</h1>
          <p className="mt-4 text-xl">Capturing moments from today, creating memories for a lifetime.</p>
        </div>
      </div>

      {/* Photo Display Wall */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {photos.map((photo) => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <AspectRatio ratio={1 / (1 + Math.random())} className="bg-gray-200">
                  <img src={photo.src} alt={`Photo by John Doe - ${photo.label}`} className="object-cover" />
                </AspectRatio>
                <div className="mt-2 text-center">
                  <Button variant="outline" className="text-white border-white">{photo.label}</Button>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
              <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full">
                <img src={photo.src} alt={`Photo by John Doe - ${photo.label}`} className="rounded-md" />
                <p className="mt-4">{photo.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <Button variant="outline" className="text-white border-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact for Original
                  </Button>
                  <Button variant="outline" className="text-white border-white">
                    <Heart className="w-5 h-5 mr-2" />
                    Like
                  </Button>
                </div>
                <DialogClose asChild>
                  <Button variant="outline" className="text-white border-white mt-4">
                    <X className="w-5 h-5 mr-2" />
                    Close
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 text-center">
          <p>© {new Date().getFullYear()} John Doe Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from '@/components/ui/drawer';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '@/components/ui/pagination';
import React from 'react';

export default function PhotoViewerApp() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1", author: "Author A", createTime: "2021-01-01", labels: ["Nature", "Forest"] },
    { src: "https://images.unsplash.com/photo-2", author: "Author B", createTime: "2021-02-01", labels: ["City", "Night"] },
    { src: "https://images.unsplash.com/photo-3", author: "Author C", createTime: "2021-03-01", labels: ["Ocean", "Beach"] },
    { src: "https://images.unsplash.com/photo-4", author: "Author D", createTime: "2021-04-01", labels: ["Mountains", "Snow"] },
    { src: "https://images.unsplash.com/photo-5", author: "Author E", createTime: "2021-05-01", labels: ["Desert", "Dunes"] },
  ];

  const authors = ["Author A", "Author B", "Author C", "Author D", "Author E", "Author F", "Author G", "Author H", "Author I", "Author J", "Author K", "Author L", "Author M", "Author N", "Author O", "Author P", "Author Q", "Author R", "Author S", "Author T", "Author U", "Author V", "Author W", "Author X", "Author Y", "Author Z"];
  authors.sort();

  return (
    <div className="flex flex-col h-screen">
      <Carousel>
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <Drawer>
                <DrawerTrigger>
                  <img src={photo.src} alt={`Photo by ${photo.author}`} className="cursor-pointer" />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>{photo.author}</DrawerTitle>
                    <DrawerDescription>Photo Details</DrawerDescription>
                  </DrawerHeader>
                  <p>Created on: {photo.createTime}</p>
                  <p>Labels: {photo.labels.join(', ')}</p>
                  <DrawerClose>
                    <button className="mt-4">Close</button>
                  </DrawerClose>
                </DrawerContent>
              </Drawer>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex-1 overflow-y-auto p-4">
        <ResizablePanelGroup direction="horizontal">
          {authors.slice(0, 5).map((author, index) => (
            <React.Fragment key={index}>
              <ResizablePanel>{author}</ResizablePanel>
              {index < 4 && <ResizableHandle />}
            </React.Fragment>
          ))}
        </ResizablePanelGroup>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">20</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
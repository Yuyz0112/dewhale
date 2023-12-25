import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from '@/components/ui/drawer';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '@/components/ui/pagination';
import React from 'react';

export default function PhotoViewerApp() {
  const photos = [
    { src: "https://source.unsplash.com/random/1", author: "Author A", createTime: "2021-01-01", labels: ["Nature", "Forest"] },
    { src: "https://source.unsplash.com/random/2", author: "Author B", createTime: "2021-02-01", labels: ["City", "Night"] },
    { src: "https://source.unsplash.com/random/3", author: "Author C", createTime: "2021-03-01", labels: ["Ocean", "Beach"] },
    { src: "https://source.unsplash.com/random/4", author: "Author D", createTime: "2021-04-01", labels: ["Mountains", "Snow"] },
    { src: "https://source.unsplash.com/random/5", author: "Author E", createTime: "2021-05-01", labels: ["Desert", "Dunes"] },
  ];

  const authors = Array.from({ length: 100 }, (_, i) => `Author ${String.fromCharCode(65 + i % 26)}${Math.floor(i / 26) + 1}`);
  authors.sort();

  const [currentPage, setCurrentPage] = React.useState(1);
  const authorsPerPage = 5;
  const totalPages = Math.ceil(authors.length / authorsPerPage);

  const currentAuthors = authors.slice(
    (currentPage - 1) * authorsPerPage,
    currentPage * authorsPerPage
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="ml-12 max-w-xs">
        <Carousel>
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <Drawer>
                  <DrawerTrigger>
                    <img src={photo.src} alt={`Photo by ${photo.author}`} className="cursor-pointer w-full h-full object-cover" />
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
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <ResizablePanelGroup direction="horizontal">
          {currentAuthors.map((author, index) => (
            <React.Fragment key={index}>
              <ResizablePanel>{author}</ResizablePanel>
              {index < authorsPerPage - 1 && <ResizableHandle />}
            </React.Fragment>
          ))}
        </ResizablePanelGroup>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
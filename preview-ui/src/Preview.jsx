import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';
import React from 'react';

export default function FansList() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Fans List</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <ScrollArea className="h-full">
          <Card>
            <CardHeader>
              <CardTitle>Fans</CardTitle>
              <CardDescription>Most engaged fans of the channel</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Avatar</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* This data would typically be fetched from an API */}
                  {Array.from({ length: 10 }, (_, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">User{index + 1}</TableCell>
                      <TableCell>{Math.floor(Math.random() * 10000)}</TableCell>
                      <TableCell>{Math.floor(Math.random() * 100)}%</TableCell>
                      <TableCell>
                        <Button variant="outline">View Profile</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ScrollArea>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </footer>
    </div>
  );
}
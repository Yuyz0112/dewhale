import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Users, Settings, Home, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import React from 'react';

export default function DiscordApp() {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <header className="flex items-center justify-between p-4 bg-gray-900 shadow-md">
        <h1 className="text-xl font-bold">Discord</h1>
        <div className="flex items-center space-x-3">
          <Button variant="ghost">
            <Search className="w-6 h-6" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/Yuyz0112.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Tabs defaultValue="chats" className="flex h-full">
          <div className="bg-gray-700 w-16 flex flex-col items-center justify-between p-2">
            <TabsList className="flex flex-col space-y-2">
              <TabsTrigger value="chats" className="p-2 rounded hover:bg-gray-600">
                <MessageSquare className="w-6 h-6" />
              </TabsTrigger>
              <TabsTrigger value="friends" className="p-2 rounded hover:bg-gray-600">
                <Users className="w-6 h-6" />
              </TabsTrigger>
              <TabsTrigger value="settings" className="p-2 rounded hover:bg-gray-600">
                <Settings className="w-6 h-6" />
              </TabsTrigger>
            </TabsList>
            <Button variant="ghost" className="mb-2">
              <Home className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex-1">
            <TabsContent value="chats" className="h-full">
              <ScrollArea className="h-full p-4 space-y-4">
                {/* This is where the chat list would go */}
                <p>Chat 1</p>
                <p>Chat 2</p>
                <p>Chat 3</p>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="friends" className="h-full">
              <ScrollArea className="h-full p-4 space-y-4">
                {/* This is where the friends list would go */}
                <p>Friend 1</p>
                <p>Friend 2</p>
                <p>Friend 3</p>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="settings" className="h-full">
              <ScrollArea className="h-full p-4 space-y-4">
                {/* This is where the settings would go */}
                <p>Setting 1</p>
                <p>Setting 2</p>
                <p>Setting 3</p>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </main>
      <footer className="flex items-center justify-between p-4 bg-gray-900">
        <Input placeholder="Type a message..." className="flex-1 text-black rounded px-4" />
        <Button variant="ghost" className="ml-2">
          <User className="w-6 h-6" />
        </Button>
      </footer>
    </div>
  );
}
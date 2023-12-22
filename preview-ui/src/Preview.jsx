import { Button } from '@/components/ui/button';
import { Search, Plus, Settings, MessageSquare, Home, User } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function DiscordApp() {
  const [selectedTab, setSelectedTab] = useState('chats');

  const channels = [
    { name: 'general', active: true },
    { name: 'random', active: false },
    { name: 'games', active: false },
    { name: 'music', active: false },
    { name: 'tech-talk', active: false },
  ];

  const chats = [
    { name: 'Jane Doe', message: 'Hey, how are you?', time: '2:30 PM', unread: 2 },
    { name: 'John Smith', message: 'Sent a photo', time: 'Yesterday', unread: 0 },
    { name: 'Alice Johnson', message: 'Can you send me the file?', time: 'Yesterday', unread: 1 },
  ];

  return (
    <div className="flex flex-col h-screen bg-purple-700 text-white">
      <header className="flex items-center justify-between p-4 shadow-md bg-purple-800">
        <h1 className="text-xl font-bold">Discord Clone</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="bg-purple-600 hover:bg-purple-500">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="bg-purple-600 hover:bg-purple-500">
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="bg-purple-600 hover:bg-purple-500">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Tabs defaultValue="chats" className="flex h-full">
          <TabsList className="w-16 bg-purple-800 flex flex-col items-center p-2 space-y-1">
            <TabsTrigger value="chats" className="p-2 rounded hover:bg-purple-600" onClick={() => setSelectedTab('chats')}>
              <MessageSquare className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="channels" className="p-2 rounded hover:bg-purple-600" onClick={() => setSelectedTab('channels')}>
              <Home className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="profile" className="p-2 rounded hover:bg-purple-600" onClick={() => setSelectedTab('profile')}>
              <User className="w-6 h-6" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chats" className="flex-1">
            <ScrollArea className="h-full p-2 space-y-2">
              {chats.map((chat, index) => (
                <div key={index} className="flex items-center justify-between bg-purple-600 p-3 rounded-lg">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                    <AvatarFallback delayMs={600}>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 ml-3">
                    <h3 className="font-semibold">{chat.name}</h3>
                    <p className="text-purple-200 text-sm">{chat.message}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs">{chat.time}</p>
                    {chat.unread > 0 && (
                      <Badge variant="solid" className="mt-1 bg-red-500">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="channels" className="flex-1">
            <ScrollArea className="h-full p-2 space-y-2">
              {channels.map((channel, index) => (
                <div key={index} className={`p-3 rounded-lg ${channel.active ? 'bg-purple-600' : 'bg-purple-500'}`}>
                  <h3 className="font-semibold">#{channel.name}</h3>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="profile" className="flex-1">
            {/* Profile content goes here */}
          </TabsContent>
        </Tabs>
      </main>
      <footer className="flex items-center justify-between p-4 bg-purple-800">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=8" />
          <AvatarFallback delayMs={600}>UN</AvatarFallback>
        </Avatar>
        <div className="flex-1 ml-3">
          <h3 className="font-semibold">Username</h3>
          <p className="text-purple-300 text-sm">#1234</p>
        </div>
        <Button variant="outline" className="bg-purple-600 hover:bg-purple-500">
          <MessageSquare className="w-5 h-5" />
        </Button>
      </footer>
    </div>
  );
}
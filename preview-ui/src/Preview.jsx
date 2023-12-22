import { Button } from '@/components/ui/button';
import { Search, Bell, AtSign, Settings, Plus, Hash, MessageCircle, User, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function DiscordApp() {
  const [selectedTab, setSelectedTab] = useState('chats');

  const channels = [
    { name: 'general', active: true },
    { name: 'help', active: false },
    { name: 'react', active: false },
    { name: 'tailwind', active: false },
    { name: 'design', active: false },
  ];

  const chats = [
    { name: 'Jane Doe', message: 'Hey, how are you?', time: '2:30 PM', unread: 2 },
    { name: 'John Smith', message: 'That sounds great!', time: 'Yesterday', unread: 0 },
    { name: 'Andrew Clark', message: 'I will send you the details.', time: 'Yesterday', unread: 1 },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <header className="flex items-center justify-between p-4 border-b border-purple-700">
        <h1 className="text-xl font-bold">Discord</h1>
        <div className="flex items-center space-x-2">
          <Button variant="ghost">
            <Search className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <Bell className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <AtSign className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <Settings className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <div className="flex h-full">
          <div className="w-64 bg-purple-800 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Channels</h2>
              <Button variant="ghost">
                <Plus className="w-6 h-6" />
              </Button>
            </div>
            <ScrollArea className="h-[calc(100%-3rem)]">
              {channels.map((channel) => (
                <div key={channel.name} className={`flex items-center p-2 rounded ${channel.active ? 'bg-purple-700' : ''}`}>
                  <Hash className="w-4 h-4 mr-2" />
                  <span>{channel.name}</span>
                </div>
              ))}
            </ScrollArea>
          </div>
          <div className="flex-1 bg-purple-800 p-4">
            <Tabs defaultValue="chats" className="flex h-full flex-col">
              <TabsList className="flex space-x-1 mb-4">
                <TabsTrigger value="chats" className="flex-1 text-center py-2 rounded-tl-lg bg-purple-700">Chats</TabsTrigger>
                <TabsTrigger value="friends" className="flex-1 text-center py-2 rounded-tr-lg bg-purple-700">Friends</TabsTrigger>
              </TabsList>
              <TabsContent value="chats" className="flex-1">
                <ScrollArea className="h-full">
                  {chats.map((chat) => (
                    <div key={chat.name} className="flex items-center justify-between p-2 rounded mb-2 bg-purple-700">
                      <div className="flex items-center">
                        <Avatar className="mr-3">
                          <AvatarImage src={`https://ui-avatars.com/api/?name=${chat.name}&background=random&color=fff`} />
                          <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{chat.name}</h3>
                          <p className="text-sm text-purple-300">{chat.message}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-purple-300 mr-2">{chat.time}</span>
                        {chat.unread > 0 && (
                          <Badge variant="solid" className="bg-blue-500">{chat.unread}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="friends" className="flex-1">
                {/* Placeholder for friends content */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between p-4 bg-purple-700">
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarImage src="https://github.com/Yuyz0112.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Your Name</h3>
            <p className="text-sm text-purple-300">#1234</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost">
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <User className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
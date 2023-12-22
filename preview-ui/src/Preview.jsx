import { Home, Plus, Settings, MessageSquare, Users, User, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';

export default function MobileApp() {
  const [currentTab, setCurrentTab] = useState('chat');

  return (
    (<div className="flex flex-col h-screen bg-purple-700 text-white">
      <header className="flex items-center justify-between p-4 bg-purple-800">
        <h1 className="text-xl font-bold">Discord Clone</h1>
        <div className="flex space-x-2">
          <Button variant="ghost">
            <Plus className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <Settings className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Tabs defaultValue="chat" className="flex h-full">
          <TabsList className="flex-none w-16 bg-purple-900 flex flex-col items-center p-2 space-y-2">
            <TabsTrigger value="chat" onClick={() => setCurrentTab('chat')} className={`w-full p-2 rounded ${currentTab === 'chat' ? 'bg-purple-600' : ''}`}>
              <MessageSquare className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="channels" onClick={() => setCurrentTab('channels')} className={`w-full p-2 rounded ${currentTab === 'channels' ? 'bg-purple-600' : ''}`}>
              <Users className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="profile" onClick={() => setCurrentTab('profile')} className={`w-full p-2 rounded ${currentTab === 'profile' ? 'bg-purple-600' : ''}`}>
              <User className="w-6 h-6" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="flex-1 flex flex-col bg-purple-600">
            <ScrollArea className="flex-1 p-4 space-y-4">
              <Home isOwn={true} />
              <Home />
              <Home />
              <Home isOwn={true} />
              <Home />
            </ScrollArea>
            <div className="p-4 flex items-center space-x-2">
              <Input className="flex-1 rounded p-2" placeholder="Type a message..." />
              <Button variant="ghost">
                <Send className="w-6 h-6" />
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="channels" className="flex-1 bg-purple-600 p-4">
            <ScrollArea className="space-y-2">
              <Home name="# general" />
              <Home name="# random" />
              <Home name="# help" />
              <Home name="# announcements" />
              <Home name="# events" />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="profile" className="flex-1 bg-purple-600 p-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/Yuyz0112.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">Username</h2>
                <p>#1234</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="flex justify-around p-2 bg-purple-800">
        <Button variant="ghost">
          <Home className="w-6 h-6" />
        </Button>
        <Button variant="ghost">
          <MessageSquare className="w-6 h-6" />
        </Button>
        <Button variant="ghost">
          <Users className="w-6 h-6" />
        </Button>
      </footer>
    </div>)
  );
}

function ChatMessage({ isOwn }) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : ''}`}>
      <div className={`max-w-xs p-2 rounded-lg ${isOwn ? 'bg-purple-500' : 'bg-purple-400'}`}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

function ChannelItem({ name }) {
  return (
    <div className="p-2 rounded hover:bg-purple-500">
      <p>{name}</p>
    </div>
  );
}
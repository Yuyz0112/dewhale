import { MessageCircle, Plus, Hash, User, Settings, Bell, Search, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function DiscordApp() {
  const [activeChannel, setActiveChannel] = useState('general');

  const channels = [
    { name: 'general', id: 'general' },
    { name: 'help', id: 'help' },
    { name: 'react', id: 'react' },
    { name: 'vue', id: 'vue' },
    { name: 'angular', id: 'angular' },
    { name: 'design', id: 'design' },
    { name: 'random', id: 'random' },
  ];

  const chats = [
    { user: 'User1', message: 'Hey, how are you?', time: '10:00 AM' },
    { user: 'User2', message: 'I am good, thanks! How about you?', time: '10:02 AM' },
    { user: 'User3', message: 'Did anyone check the new update?', time: '10:05 AM' },
  ];

  return (
    <div className="flex h-screen bg-discord-gray">
      {/* Sidebar */}
      <div className="bg-discord-dark w-20 flex flex-col items-center py-4 space-y-4">
        <div className="text-discord-purple">
          <MessageCircle className="w-8 h-8" />
        </div>
        <div className="text-white">
          <Plus className="w-6 h-6" />
        </div>
        <div className="text-white">
          <Hash className="w-6 h-6" />
        </div>
        <div className="text-white">
          <User className="w-6 h-6" />
        </div>
        <div className="text-white">
          <Settings className="w-6 h-6" />
        </div>
      </div>

      {/* Channels */}
      <div className="bg-discord-light w-64 p-4 flex flex-col">
        <div className="flex items-center justify-between text-white mb-4">
          <h2 className="text-lg font-bold">Channels</h2>
          <Plus className="w-5 h-5" />
        </div>
        <ScrollArea className="flex-1">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className={`px-2 py-1 rounded hover:bg-discord-hover cursor-pointer ${
                activeChannel === channel.id ? 'bg-discord-active' : ''
              }`}
              onClick={() => setActiveChannel(channel.id)}
            >
              <p className="text-white text-sm flex items-center">
                <Hash className="w-4 h-4 mr-2" />
                {channel.name}
              </p>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col bg-discord-chat">
        <div className="flex items-center justify-between bg-discord-dark p-4 text-white">
          <div className="flex items-center">
            <Hash className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">{activeChannel}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <Search className="w-5 h-5" />
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
        <ScrollArea className="flex-1 p-4 space-y-4">
          {chats.map((chat, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Avatar className="shrink-0">
                <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                <AvatarFallback delayMs={600}>{chat.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-baseline space-x-2">
                  <h5 className="text-white font-semibold">{chat.user}</h5>
                  <span className="text-discord-time text-xs">{chat.time}</span>
                </div>
                <p className="text-discord-message">{chat.message}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex items-center p-4 bg-discord-dark">
          <Input className="flex-1 rounded bg-discord-input p-2 text-white" placeholder="Message" />
          <Button className="ml-2 bg-discord-purple text-white px-4 py-2 rounded">Send</Button>
        </div>
      </div>
    </div>
  );
}

// Tailwind CSS styles
document.documentElement.style.setProperty('--discord-gray', '#36393f');
document.documentElement.style.setProperty('--discord-dark', '#2f3136');
document.documentElement.style.setProperty('--discord-light', '#202225');
document.documentElement.style.setProperty('--discord-chat', '#40444b');
document.documentElement.style.setProperty('--discord-purple', '#5865f2');
document.documentElement.style.setProperty('--discord-hover', '#3a3c43');
document.documentElement.style.setProperty('--discord-active', '#4f545c');
document.documentElement.style.setProperty('--discord-input', '#484c52');
document.documentElement.style.setProperty('--discord-message', '#dcddde');
document.documentElement.style.setProperty('--discord-time', '#72767d');
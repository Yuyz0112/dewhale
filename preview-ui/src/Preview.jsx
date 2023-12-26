import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Plus, Paperclip, Smile, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import React from 'react';

export default function ChatApp() {
  return (
    <div className="max-w-[600px] mx-auto flex flex-col h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&dpr=2&q=80" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Sofia Davis</div>
            <div className="text-gray-400 text-sm">m@example.com</div>
          </div>
        </div>
        <button className="p-2 rounded-full bg-gray-700">
          <Plus className="w-6 h-6" />
        </button>
      </header>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex flex-col space-y-2">
          <div className="self-start bg-gray-700 rounded px-4 py-2 max-w-xs">
            Hi, how can I help you today?
          </div>
          <div className="self-end bg-orange-500 rounded px-4 py-2 max-w-xs">
            Hey, I'm having trouble with my account.
          </div>
          <div className="self-start bg-gray-700 rounded px-4 py-2 max-w-xs">
            What seems to be the problem?
          </div>
          <div className="self-end bg-orange-500 rounded px-4 py-2 max-w-xs">
            I can't log in.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <button className="p-2 rounded-full bg-gray-700">
          <Paperclip className="w-6 h-6" />
        </button>
        <Input placeholder="Type your message..." className="flex-1 mx-2 text-black rounded px-4 py-2" />
        <button className="p-2 rounded-full bg-gray-700">
          <Smile className="w-6 h-6" />
        </button>
        <button className="ml-2 p-2 rounded-full bg-orange-500">
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
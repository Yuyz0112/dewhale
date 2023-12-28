import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import React from 'react';

const ChatInterface = () => {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Chat area */}
      <div className="flex flex-col flex-1 p-4">
        <ScrollArea className="flex-1 mb-4 p-4 bg-gray-700 rounded">
          {/* Messages will be here */}
        </ScrollArea>
        <div className="flex items-center space-x-2">
          <Input className="flex-1 rounded p-2 text-gray-800" placeholder="Type your message here..." />
          <Button variant="solid" className="bg-blue-500 hover:bg-blue-600">
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* AI Model Selection */}
      <div className="w-64 bg-gray-700 p-4">
        <ToggleGroup type="single" className="w-full">
          <ToggleGroupItem value="chatgpt" className="mb-2 rounded p-2 text-center bg-gray-600 hover:bg-gray-500">ChatGPT</ToggleGroupItem>
          <ToggleGroupItem value="gemini" className="rounded p-2 text-center bg-gray-600 hover:bg-gray-500">Gemini</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ChatInterface;
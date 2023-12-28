import { ChevronDown, Inbox, Home, Send, FileText, Trash2, Archive, Printer, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

export default function MailboxUI() {
  return (
    (<div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white text-gray-800 w-64 p-6 hidden sm:block">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Alicia Koch</h2>
          <ChevronDown className="w-5 h-5" />
        </div>
        <nav className="space-y-1">
          <Button variant="outline" className="text-left w-full mb-4">
            <Inbox className="w-5 h-5 mr-2" /> Inbox <Badge variant="solid" className="ml-2">128</Badge>
          </Button>
          <Button variant="outline" className="text-left w-full mb-4">
            <div className="w-5 h-5 mr-2" /> Drafts <Badge variant="solid" className="ml-2">9</Badge>
          </Button>
          <Button variant="outline" className="text-left w-full mb-4">
            <Send className="w-5 h-5 mr-2" /> Sent <Badge variant="solid" className="ml-2">23</Badge>
          </Button>
          <Button variant="outline" className="text-left w-full mb-4">
            <FileText className="w-5 h-5 mr-2" /> Junk <Badge variant="solid" className="ml-2">23</Badge>
          </Button>
          <Button variant="outline" className="text-left w-full mb-4">
            <Trash2 className="w-5 h-5 mr-2" /> Trash <Badge variant="solid" className="ml-2">21</Badge>
          </Button>
          <Button variant="outline" className="text-left w-full">
            <Archive className="w-5 h-5 mr-2" /> Archive
          </Button>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <h1 className="text-xl font-semibold">Inbox</h1>
          <div className="flex items-center">
            <Button variant="outline" className="mr-2">
              All mail
            </Button>
            <Button variant="outline">Unread</Button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="px-4 py-2 bg-white">
          <Input placeholder="Search" className="w-full" />
        </div>

        {/* Email List */}
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4">
            {/* Email Item */}
            <div className="bg-white p-4 rounded shadow flex justify-between items-start">
              <div>
                <h3 className="font-semibold">William Smith</h3>
                <p className="text-gray-600">Meeting Tomorrow</p>
                <p className="text-sm text-gray-500">Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success....</p>
                <div className="flex mt-2">
                  <Badge variant="outline" className="mr-2">meeting</Badge>
                  <Badge variant="outline" className="mr-2">work</Badge>
                  <Badge variant="outline">important</Badge>
                </div>
              </div>
              <span className="text-sm text-gray-400">2 months ago</span>
            </div>
            {/* ... more email items */}
          </div>
        </ScrollArea>

        {/* Email Detail View */}
        <div className="bg-white text-gray-800 w-96 p-6 hidden lg:block">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">William Smith</h2>
            <div className="flex items-center">
              <Printer className="w-5 h-5 mr-4" />
              <Settings className="w-5 h-5" />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">Meeting Tomorrow</h3>
              <span className="text-sm text-gray-500">Oct 22, 2023, 9:00:00 AM</span>
            </div>
            <div className="flex items-center mb-4">
              <Avatar className="mr-2">
                <AvatarImage src="https://images.unsplash.com/photo-1603415528371-546a7bc1c6e4?w=800&dpr=2&q=80" />
                <AvatarFallback>WS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm">Reply-To:</p>
                <p className="text-sm font-semibold">William Smith</p>
              </div>
            </div>
            <p className="text-sm mb-4">Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.</p>
            <p className="text-sm mb-4">Please come prepared with any questions or insights you may have. Looking forward to our meeting!</p>
            <p className="text-sm">Best regards, William</p>
          </div>
          <Separator className="mb-6" />
          <Textarea className="mb-4" placeholder="Reply William Smith..." />
          <div className="flex items-center justify-between">
            <Button variant="outline" className="mr-2">Mute this thread</Button>
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>)
  );
}
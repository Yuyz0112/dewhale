import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import React from 'react';

export default function WebsitePrototype() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-lg font-bold">Video Downloader</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Video URL
          </label>
          <Input id="url-input" placeholder="Paste your video link here" className="w-full p-2 text-lg" />
        </div>
        <div className="mb-6">
          <Tabs defaultValue="youtube" className="w-full">
            <TabsList>
              <TabsTrigger value="youtube">YouTube</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="vimeo">Vimeo</TabsTrigger>
              <TabsTrigger value="dailymotion">Dailymotion</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
            </TabsList>
            <TabsContent value="youtube" className="p-4 bg-white rounded shadow">
              Download videos directly from YouTube.
            </TabsContent>
            <TabsContent value="facebook" className="p-4 bg-white rounded shadow">
              Save your favorite videos from Facebook.
            </TabsContent>
            <TabsContent value="vimeo" className="p-4 bg-white rounded shadow">
              Download high-quality videos from Vimeo.
            </TabsContent>
            <TabsContent value="dailymotion" className="p-4 bg-white rounded shadow">
              Get videos from Dailymotion in a few clicks.
            </TabsContent>
            <TabsContent value="instagram" className="p-4 bg-white rounded shadow">
              Download Instagram videos to watch offline.
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-500">© 2023 Video Downloader. All rights reserved.</p>
      </footer>
    </div>
  );
}
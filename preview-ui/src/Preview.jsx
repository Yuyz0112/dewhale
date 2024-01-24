import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import React from 'react';

export default function WebsitePrototype() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-lg font-bold">Website Manager</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Website URL
          </label>
          <Input id="url-input" placeholder="https://example.com" className="w-full" />
        </div>
        <div className="mb-6">
          <Tabs defaultValue="site1" className="w-full">
            <TabsList>
              <TabsTrigger value="site1">Site 1</TabsTrigger>
              <TabsTrigger value="site2">Site 2</TabsTrigger>
              <TabsTrigger value="site3">Site 3</TabsTrigger>
            </TabsList>
            <TabsContent value="site1" className="p-4 bg-white rounded shadow">
              Content for Site 1
            </TabsContent>
            <TabsContent value="site2" className="p-4 bg-white rounded shadow">
              Content for Site 2
            </TabsContent>
            <TabsContent value="site3" className="p-4 bg-white rounded shadow">
              Content for Site 3
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-500">© 2023 Website Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}
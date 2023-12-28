import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';

export default function ComponentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('components');
  const [selectedItem, setSelectedItem] = useState('Accordion');

  const categories = {
    components: ['Accordion', 'Button', 'Card'],
    hooks: ['useState', 'useEffect', 'useContext'],
    wiki: ['Installation Guide', 'Contribution Guidelines', 'Code of Conduct'],
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'components':
        return (
          <Card>
            <CardHeader>
              <CardTitle>{selectedItem} Component</CardTitle>
              <CardDescription>A collapsible component to show/hide content</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Component specific content goes here */}
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="props">Props</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <p>This is an overview of the {selectedItem} component.</p>
                </TabsContent>
                <TabsContent value="examples">
                  <p>Here are some examples of the {selectedItem} component in action.</p>
                </TabsContent>
                <TabsContent value="props">
                  <p>Here's a list of props for the {selectedItem} component.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        );
      case 'hooks':
        return (
          <Card>
            <CardHeader>
              <CardTitle>{selectedItem} Hook</CardTitle>
              <CardDescription>Allows you to add state to your functional components</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Hook specific content goes here */}
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="params">Params</TabsTrigger>
                  <TabsTrigger value="returns">Returns</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <p>This is an overview of the {selectedItem} hook.</p>
                </TabsContent>
                <TabsContent value="examples">
                  <p>Here are some examples of the {selectedItem} hook in action.</p>
                </TabsContent>
                <TabsContent value="params">
                  <p>Here's a list of parameters for the {selectedItem} hook.</p>
                </TabsContent>
                <TabsContent value="returns">
                  <p>Here's a list of return values for the {selectedItem} hook.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        );
      case 'wiki':
        return (
          <Card>
            <CardHeader>
              <CardTitle>{selectedItem}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Wiki specific content goes here */}
              <p>This is the content of the {selectedItem} article.</p>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-white w-64 p-6 hidden sm:block">
        <ScrollArea className="h-full">
          <div className="flex flex-col space-y-2">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`text-left ${selectedCategory === category ? 'font-bold' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedItem(categories[category][0]);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
            <Separator />
            {categories[selectedCategory].map((item) => (
              <button
                key={item}
                className={`text-left ${selectedItem === item ? 'font-bold' : ''}`}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}
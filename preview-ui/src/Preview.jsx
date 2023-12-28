import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React, { useState } from 'react';

export default function ComponentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('components');
  const [selectedItem, setSelectedItem] = useState('accordion');

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
          <div className="flex flex-col">
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
            <Accordion type="single" collapsible>
              {categories[selectedCategory].map((item) => (
                <AccordionItem key={item} value={item}>
                  <AccordionTrigger onClick={() => setSelectedItem(item)}>
                    {item}
                  </AccordionTrigger>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}
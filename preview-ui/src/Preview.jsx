import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';

export default function ComponentShowcase() {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-64 p-6 hidden sm:block">
        <ScrollArea className="h-full">
          <Tabs defaultValue="components" className="flex flex-col">
            <TabsList>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="hooks">Hooks</TabsTrigger>
              <TabsTrigger value="wiki">Wiki</TabsTrigger>
            </TabsList>
            <TabsContent value="components" className="mt-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="accordion">
                  <AccordionTrigger>Accordion</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="button">
                  <AccordionTrigger>Button</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="card">
                  <AccordionTrigger>Card</AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="hooks" className="mt-4">
              {/* Hooks list can be added here */}
            </TabsContent>
            <TabsContent value="wiki" className="mt-4">
              {/* Wiki articles list can be added here */}
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        <Tabs defaultValue="components">
          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle>Accordion Component</CardTitle>
                <CardDescription>A collapsible component to show/hide content</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Basic Demo:</p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Separator />
                <p>Example Code:</p>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <code>
                    {`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                  </code>
                </ScrollArea>
                {/* More demos and code examples can be added here */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hooks">
            {/* Hook details can be added here */}
          </TabsContent>
          <TabsContent value="wiki">
            {/* Wiki content can be added here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
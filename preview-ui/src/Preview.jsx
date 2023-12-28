import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';

export default function ComponentShowcase() {
  const [selectedTab, setSelectedTab] = useState('components');

  return (
    <div className="flex h-screen">
      <div className="bg-white w-64 p-6 hidden sm:block">
        <ScrollArea className="h-full">
          <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="flex flex-col">
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
                {/* More components can be added here */}
              </Accordion>
            </TabsContent>
            <TabsContent value="hooks" className="mt-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="useState">
                  <AccordionTrigger>useState</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="useEffect">
                  <AccordionTrigger>useEffect</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="useContext">
                  <AccordionTrigger>useContext</AccordionTrigger>
                </AccordionItem>
                {/* More hooks can be added here */}
              </Accordion>
            </TabsContent>
            <TabsContent value="wiki" className="mt-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="installation">
                  <AccordionTrigger>Installation Guide</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="contribution">
                  <AccordionTrigger>Contribution Guidelines</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="code-of-conduct">
                  <AccordionTrigger>Code of Conduct</AccordionTrigger>
                </AccordionItem>
                {/* More wiki articles can be added here */}
              </Accordion>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        <Tabs defaultValue={selectedTab}>
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
            <Card>
              <CardHeader>
                <CardTitle>useState Hook</CardTitle>
                <CardDescription>Allows you to add state to your functional components</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Basic Demo:</p>
                {/* Basic demo of useState */}
                <Separator />
                <p>Example Code:</p>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <code>
                    {`const [state, setState] = useState(initialState);`}
                  </code>
                </ScrollArea>
                {/* More demos and code examples can be added here */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="wiki">
            <Card>
              <CardHeader>
                <CardTitle>Installation Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <article>
                  <h2>Step 1: Setting up the environment</h2>
                  <p>Before you begin, make sure you have a fresh version of Node.js installed.</p>
                  <h2>Step 2: Install the package</h2>
                  <p>Run the following command to install the package:</p>
                  <code>npm install your-package-name</code>
                  {/* More steps and details can be added here */}
                </article>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
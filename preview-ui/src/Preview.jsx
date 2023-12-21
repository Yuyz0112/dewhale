import { useEffect, useState } from 'react';
import { ResponsiveBar } from "@nivo/bar";
import { ArrowRight, Home, Settings, Star, Camera } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function ColorfulUI() {
  const data = [
    { name: "A", data: 100 },
    { name: "B", data: 200 },
    { name: "C", data: 150 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <NavigationMenu>
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex">
            <NavigationMenuTrigger asChild>
              <Button variant="ghost" className="text-white">
                <Home />
              </Button>
            </NavigationMenuTrigger>
            <h1 className="text-xl text-white font-bold ml-2">Colorful Dashboard</h1>
          </div>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-gray-300">
                <Settings className="w-5 h-5" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-gray-300">
                <Star className="w-5 h-5" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
      <main className="p-4 text-white">
        <section className="mb-8">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Data Overview</CardTitle>
                  <CardDescription>Statistics from the last month</CardDescription>
                </div>
                <Button variant="outline" className="text-blue-500 border-white">
                  See all <ArrowRight className="ml-2"/>
                </Button>
              </div>
              <div className="mt-4">
                <ResponsiveBar
                  data={data}
                  keys={["data"]}
                  indexBy="name"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "nivo" }}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Items',
                    legendPosition: 'middle',
                    legendOffset: 32
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Quantity',
                    legendPosition: 'middle',
                    legendOffset: -40
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                />
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Badge variant="outline" className="mb-2">Progress</Badge>
            <Progress value={70} />
          </div>
          <div>
            <Badge variant="outline" className="mb-2">Tasks</Badge>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">
                  <Camera />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-white text-black p-4 rounded">
                Capture the moment
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>FAQ</AccordionTrigger>
                <AccordionContent>
                  Frequently Asked Questions
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Account information</TabsContent>
              <TabsContent value="settings">Application settings</TabsContent>
            </Tabs>
          </div>
        </section>
        <section>
          <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Latest Activities</h2>
            <ul>
              <li className="mb-2"><ArrowRight className="inline mr-2"/>Uploaded new photos</li>
              <li className="mb-2"><ArrowRight className="inline mr-2"/>Updated profile</li>
              <li><ArrowRight className="inline mr-2"/>Set a new goal</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
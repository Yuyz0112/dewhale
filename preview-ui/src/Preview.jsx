import { useState } from 'react';
import { ResponsiveBar } from "@nivo/bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Bell, Heart, Settings, User } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ColorfulUI() {
  const [tabValue, setTabValue] = useState('analytics');
  
  return (
    <div className="font-sans antialiased text-gray-900">
      <main className="min-h-screen bg-gradient-to-br from-blue-400 to-green-300 p-8">
        {/* Alert Notification at the top */}
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertTitle>New Updates!</AlertTitle>
          <AlertDescription>
            Check out the new analytics dashboard.
          </AlertDescription>
        </Alert>

        {/* User Profile Card */}
        <section className="my-5">
          <Card className="bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-md">
            <CardHeader className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/Yuyz0112.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <CardTitle className="text-lg font-bold">John Doe</CardTitle>
                  <p className="text-sm text-gray-600">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>
                        <Settings className="w-5 h-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Settings</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="primary">
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Go to profile</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-green-600">
                  Active Plan: <span className="font-bold">Premium</span>
                </p>
                <Badge variant="solid" className="bg-green-200 text-green-800">
                  PRO
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Update payment info
              </a>
              <Switch checked />
            </CardFooter>
          </Card>
        </section>

        {/* Tabs Selection */}
        <section className="my-5">
          <Tabs defaultValue={tabValue} onValueChange={setTabValue} className="max-w-md mx-auto">
            <TabsList className="flex space-x-1">
              <TabsTrigger value="analytics" className={`px-5 py-3 rounded-t-lg focus:outline-none focus-visible:ring ring-blue-300 ${tabValue === 'analytics' ? 'bg-white shadow' : 'text-gray-400'}`}>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="settings" className={`px-5 py-3 rounded-t-lg focus:outline-none focus-visible:ring ring-blue-300 ${tabValue === 'settings' ? 'bg-white shadow' : 'text-gray-400'}`}>
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="analytics" className="p-4 bg-white shadow rounded-b-lg">
              <p>Analytics Content Here...</p>
            </TabsContent>
            <TabsContent value="settings" className="p-4 bg-white shadow rounded-b-lg">
              <p>Settings Content Here...</p>
            </TabsContent>
          </Tabs>
        </section>

        {/* Aspect Ratio Image Box */}
        <section className="my-5">
          <AspectRatio ratio={16 / 9} className="max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Image"
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </section>

        {/* Charts */}
        <section className="my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bar Chart */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-bold mb-4">Bar Chart</h3>
              <div style={{ height: '250px' }}>
                <ResponsiveBar
                  data={[
                    { country: 'AD', value: 100 },
                    { country: 'AE', value: 200 },
                    { country: 'AF', value: 260 },
                    { country: 'AG', value: 120 },
                  ]}
                  keys={['value']}
                  indexBy="country"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'nivo' }}
                  borderColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]],
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'value',
                    legendPosition: 'middle',
                    legendOffset: -40
                  }}
                  enableLabel={false}
                />
              </div>
            </div>
            {/* Dot Chart */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-bold mb-4">Dot Chart</h3>
              <div style={{ height: '250px' }}>
                <ResponsiveScatterPlot
                  data={[
                    {
                      id: 'series 1',
                      data: [
                        { x: 10, y: 20 },
                        { x: 30, y: 40 },
                        { x: 70, y: 80 },
                      ],
                    },
                  ]}
                  margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
                  xScale={{ type: 'linear', min: 0, max: 'auto' }}
                  yScale={{ type: 'linear', min: 0, max: 'auto' }}
                  blendMode="multiply"
                  colors={{ scheme: 'set2' }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
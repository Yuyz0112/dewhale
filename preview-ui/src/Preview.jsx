import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { Sun, CloudRain, Wind } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WeatherApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '500px' }}>
          <Tabs defaultValue="today" className="w-full">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
            </TabsList>
            <TabsContent value="today">
              <Card>
                <CardHeader>
                  <CardTitle>San Francisco</CardTitle>
                  <CardDescription>Today, 5:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Sun className="w-24 h-24 text-yellow-400" />
                    <div className="text-6xl">72°</div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <CloudRain className="w-6 h-6 text-blue-500 mr-2" />
                      <span>10%</span>
                    </div>
                    <div className="flex items-center">
                      <Wind className="w-6 h-6 text-gray-500 mr-2" />
                      <span>6 mph</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="week">
              <AspectRatio ratio={16 / 9}>
                <ResponsiveLine
                  data={[
                    {
                      id: "temp",
                      data: [
                        { x: "Monday", y: 70 },
                        { x: "Tuesday", y: 75 },
                        { x: "Wednesday", y: 70 },
                        { x: "Thursday", y: 80 },
                        { x: "Friday", y: 78 },
                        { x: "Saturday", y: 85 },
                        { x: "Sunday", y: 90 },
                      ],
                    },
                  ]}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: 0,
                    max: "auto",
                  }}
                  axisTop={null}
                  axisRight={null}
                  enableGridX={false}
                  enableGridY={false}
                  colors={{ scheme: "nivo" }}
                  enablePoints={false}
                  enableCrosshair={false}
                  useMesh={true}
                  legends={[]}
                />
              </AspectRatio>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
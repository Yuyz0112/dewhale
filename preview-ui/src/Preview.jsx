import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherIcon } from "lucide-react";
import { ResponsiveLine } from "@nivo/line";

export default function WeatherApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[500px] bg-white bg-opacity-80 rounded-lg shadow-lg p-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">San Francisco</CardTitle>
              <CardDescription className="text-sm text-gray-600">CA, USA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <WeatherIcon className="w-12 h-12 text-blue-500" />
                  <div className="ml-4">
                    <div className="text-5xl font-semibold">72°</div>
                    <div className="text-sm text-gray-600">Sunny</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">H: 77° L: 56°</div>
                  <div className="text-sm text-gray-600">10% chance of rain</div>
                </div>
              </div>
              <AspectRatio ratio={16 / 9} className="hidden">
                <div className="w-full h-full">
                  <ResponsiveLine
                    data={[
                      {
                        id: "temperature",
                        data: [
                          { x: "6 AM", y: 56 },
                          { x: "9 AM", y: 60 },
                          { x: "12 PM", y: 68 },
                          { x: "3 PM", y: 72 },
                          { x: "6 PM", y: 70 },
                          { x: "9 PM", y: 65 },
                        ],
                      },
                    ]}
                    margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto" }}
                    axisTop={null}
                    axisRight={null}
                    enableGridX={false}
                    enableGridY={false}
                    colors={{ scheme: "nivo" }}
                    lineWidth={3}
                    pointSize={10}
                    pointColor={{ from: 'color', modifiers: [] }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    useMesh={true}
                    legends={[]}
                  />
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
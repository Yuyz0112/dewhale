import { useState } from 'react';
import { ResponsiveBar } from "@nivo/bar";
import { ArrowRight, CloudRain, Sun, Wind } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WeatherApp() {
  const [selectedDay, setSelectedDay] = useState('Today');

  const days = [
    { name: 'Today', high: 76, low: 68, icon: <Sun className="w-8 h-8 text-yellow-300" /> },
    { name: 'Mon', high: 70, low: 65, icon: <CloudRain className="w-8 h-8 text-gray-300" /> },
    { name: 'Tue', high: 75, low: 64, icon: <Wind className="w-8 h-8 text-gray-300" /> },
    { name: 'Wed', high: 80, low: 70, icon: <Sun className="w-8 h-8 text-yellow-300" /> },
    { name: 'Thu', high: 78, low: 67, icon: <CloudRain className="w-8 h-8 text-gray-300" /> },
  ];

  const hourlyData = [
    { hour: 'Now', temperature: 76 },
    { hour: '1 PM', temperature: 75 },
    { hour: '2 PM', temperature: 74 },
    { hour: '3 PM', temperature: 73 },
    { hour: '4 PM', temperature: 72 },
    { hour: '5 PM', temperature: 71 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      <div className="p-4">
        <h1 className="text-4xl font-bold">San Francisco</h1>
        <p className="text-xl">Mostly Sunny</p>
        <div className="flex items-center justify-between my-4">
          <div className="text-6xl font-bold">76°</div>
          <ArrowRight className="w-8 h-8" />
        </div>
        <Tabs defaultValue="Today" className="mb-4">
          <TabsList>
            {days.map((day) => (
              <TabsTrigger
                key={day.name}
                value={day.name}
                onClick={() => setSelectedDay(day.name)}
                className={`p-2 rounded-lg ${selectedDay === day.name ? 'bg-blue-700' : ''}`}
              >
                {day.icon}
                <div>{day.name}</div>
                <div className="text-sm">
                  {day.high}° / {day.low}°
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {hourlyData.map((data) => (
            <div key={data.hour} className="flex flex-col items-center">
              <div className="text-sm">{data.hour}</div>
              <div className="text-2xl font-bold">{data.temperature}°</div>
            </div>
          ))}
        </div>
        <div className="h-64">
          <ResponsiveBar
            data={hourlyData.map((data) => ({ hour: data.hour, temperature: data.temperature }))}
            keys={['temperature']}
            indexBy="hour"
            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Hour',
              legendPosition: 'middle',
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Temperature',
              legendPosition: 'middle',
              legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </div>
    </div>
  );
}
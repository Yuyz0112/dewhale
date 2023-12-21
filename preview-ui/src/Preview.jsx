import React from 'react';
import { ResponsiveBar } from "@nivo/bar";
import { Camera, Heart, Settings, Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/card";
import "@/components/ui/tailwind.css";

function ColorfulUI() {
  return (
    <div className="font-sans">
      {/* Header with Avatar and Badges */}
      <div className="bg-blue-400 text-white p-5 flex justify-between items-center">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=250&dpr=2&q=80" alt="Profile image" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h1 className="text-2xl font-bold">Jane Doe</h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="space-x-2">
          <Badge variant="solid" className="bg-purple-500">PRO</Badge>
          <Badge variant="solid" className="bg-green-500">New</Badge>
          <Badge variant="solid" className="bg-red-500">Sale</Badge>
        </div>
      </div>

      {/* Content Area with Cards */}
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Photography</CardTitle>
            <CardDescription>Snap and edit like a pro</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between items-center p-4 bg-yellow-200">
            <Camera className="w-12 h-12 text-yellow-900" />
            <Button variant="solid" className="bg-yellow-500 text-yellow-900">Learn More</Button>
          </CardContent>
          <CardFooter className="flex justify-between items-center p-4 bg-yellow-100">
            <Star className="w-5 h-5 text-yellow-400" />
            <p className="text-yellow-800">4.8 Rating</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Favorite Places</CardTitle>
            <CardDescription>Bookmark your loves</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between items-center p-4 bg-pink-200">
            <Heart className="w-12 h-12 text-pink-900" />
            <Button variant="solid" className="bg-pink-500 text-pink-900">View All</Button>
          </CardContent>
          <CardFooter className="flex justify-between items-center p-4 bg-pink-100">
            <Settings className="w-5 h-5 text-pink-400" />
            <p className="text-pink-800">Settings</p>
          </CardFooter>
        </Card>

        {/* Bar Chart Card */}
        <Card>
          <CardHeader>
            <CardTitle>Annual Review</CardTitle>
            <CardDescription>Yearly performance</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveBar
              data={[
                { name: "Jan", Sales: 200 },
                { name: "Feb", Sales: 400 },
                { name: "Mar", Sales: 300 },
                { name: "Apr", Sales: 500 },
              ]}
              keys={["Sales"]}
              indexBy="name"
              margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
              padding={0.3}
              colors={{ scheme: 'nivo' }}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 p-5 text-white text-center">
        <p>&copy;2023 Colorful UI. A React Prototype by Jane Doe.</p>
      </footer>
    </div>
  );
}

export default ColorfulUI;
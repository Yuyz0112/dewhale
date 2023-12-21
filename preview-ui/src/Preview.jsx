import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Home, Bell, Camera, Edit, Trash } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const BarChart = () => {
  return (
    <div style={{ height: 300 }}>
      <ResponsiveBar
        data={[
          { country: "AD", hotdogs: 100 },
          { country: "AE", hotdogs: 120 },
          { country: "AF", hotdogs: 140 }
        ]}
        keys={['hotdogs']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
      />
    </div>
  );
}

export default function ColorfulUI() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center">
        <div className="flex">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1601758123927-3f61f7b2e005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI2MTQ1MjQ3&ixlib=rb-1.2.1&q=80&w=400" />
            <AvatarFallback delayMs={600}>BR</AvatarFallback>
          </Avatar>
          <Input className="ml-3 p-2" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <ul className="flex">
          <li className="mx-2">
            <Tooltip>
              <TooltipTrigger>
                <Home className="text-white" />
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>
          </li>
          <li className="mx-2">
            <Tooltip>
              <TooltipTrigger>
                <Bell className="text-white" />
              </TooltipTrigger>
              <TooltipContent>Notifications</TooltipContent>
            </Tooltip>
          </li>
          <li className="mx-2">
            <Tooltip>
              <TooltipTrigger>
                <Edit className="text-white" />
              </TooltipTrigger>
              <TooltipContent>Edit Profile</TooltipContent>
            </Tooltip>
          </li>
          <li className="mx-2">
            <Tooltip>
              <TooltipTrigger>
                <Trash className="text-white" />
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </nav>
      <main className="p-4">
        <Alert className="mb-8">
          <Camera className="h-6 w-6"/>
          <AlertTitle>Check out our photos!</AlertTitle>
          <AlertDescription>We've updated our gallery with new photos.</AlertDescription>
        </Alert>
        <BarChart />
        <div className="flex justify-between items-center mt-8">
          <Card className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>Here's what's happening with your projects today:</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="mb-2">34 Tasks</Badge>
              <Badge variant="outline">5 Messages</Badge>
            </CardContent>
          </Card>
          <Button variant="outline">View More</Button>
        </div>
      </main>
    </div>
  );
}
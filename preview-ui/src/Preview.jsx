import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';

// Screen 1: Adding Mindfulness Break Feature
const ScreenOne = () => (
  <div className="flex flex-col items-center justify-center p-6">
    <Card>
      <CardHeader>
        <CardTitle>Mindfulness Break</CardTitle>
        <CardDescription>Take a break from your busy feed and focus on what matters.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="solid">Activate Mindfulness Break</Button>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-600">Available exclusively for Premium members.</p>
      </CardFooter>
    </Card>
  </div>
);

// Screen 2: Selecting Keywords for Mindfulness Break
const ScreenTwo = () => (
  <div className="flex flex-col items-center justify-center p-6">
    <Card>
      <CardHeader>
        <CardTitle>Customize Your Mindfulness Break</CardTitle>
        <CardDescription>Select up to 3 keywords to filter your feed and notifications.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="keyword1">Keyword 1</Label>
            <Input id="keyword1" placeholder="Enter keyword" />
          </div>
          <div>
            <Label htmlFor="keyword2">Keyword 2</Label>
            <Input id="keyword2" placeholder="Enter keyword" />
          </div>
          <div>
            <Label htmlFor="keyword3">Keyword 3</Label>
            <Input id="keyword3" placeholder="Enter keyword" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="solid">Save and Continue</Button>
      </CardFooter>
    </Card>
  </div>
);

// Screen 3: Filtered Content During Mindfulness Break
const ScreenThree = () => (
  <div className="flex flex-col items-center justify-center p-6">
    <Alert>
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Mindfulness Mode Active</AlertTitle>
      <AlertDescription>Your feed is now filtered based on your selected keywords.</AlertDescription>
    </Alert>
    <div className="mt-4">
      <Card>
        <CardHeader>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1606788075765-f5e80bdf8f7b?w=800&dpr=2&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Posted about Mindfulness</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>Discover the benefits of taking a short mindfulness break during your workday.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Read More</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

// Exporting the components
export default { ScreenOne, ScreenTwo, ScreenThree };
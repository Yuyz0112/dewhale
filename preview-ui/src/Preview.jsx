import { Home, User, Clipboard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';

export default function MentalHealthTestPage() {
  const [progress, setProgress] = useState(25);

  return (
    (<div className="flex flex-col h-screen">
      <header className="bg-blue-600 p-4 shadow-md text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Mental Health Check</h1>
          <nav className="flex space-x-4">
            <a href="#" className="flex items-center space-x-1 hover:text-blue-300">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-300">
              <User className="w-5 h-5" />
              <span>About</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-300">
              <Clipboard className="w-5 h-5" />
              <span>Tests</span>
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="container mx-auto">
          <div value={progress} className="mb-4" />
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="30" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <RadioGroup defaultValue="male">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="symptoms">Symptoms</Label>
                  <Textarea id="symptoms" placeholder="Describe your symptoms" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setProgress(progress + 25)}>Next Section</Button>
            </CardFooter>
          </Card>
          {progress >= 50 && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Lifestyle Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="exercise">Do you exercise regularly?</Label>
                    <Checkbox id="exercise" />
                  </div>
                  <div>
                    <Label htmlFor="diet">Do you follow a healthy diet?</Label>
                    <Checkbox id="diet" />
                  </div>
                  <div>
                    <Label htmlFor="sleep">Do you get enough sleep?</Label>
                    <Checkbox id="sleep" />
                  </div>
                  <div>
                    <Label htmlFor="stress">Are you experiencing stress?</Label>
                    <Checkbox id="stress" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setProgress(progress + 25)}>Next Section</Button>
              </CardFooter>
            </Card>
          )}
          {progress >= 75 && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="conditions">Do you have any medical conditions?</Label>
                    <Textarea id="conditions" placeholder="List any medical conditions" />
                  </div>
                  <div>
                    <Label htmlFor="medications">Are you taking any medications?</Label>
                    <Textarea id="medications" placeholder="List any medications" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setProgress(100)}>Complete Test</Button>
              </CardFooter>
            </Card>
          )}
          {progress === 100 && (
            <Alert className="mt-4">
              <AlertTitle>Test Complete!</AlertTitle>
              <AlertDescription>
                Thank you for completing the test. A specialist will review your information and contact you soon.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </main>
      <footer className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto text-center">
          &copy; 2023 Mental Health Check. All rights reserved.
        </div>
      </footer>
    </div>)
  );
}
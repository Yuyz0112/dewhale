import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Home, Car, Heart, Tshirt, Hammer, CreditCard, Briefcase } from 'lucide-react';

export default function RetirementGoalsCalculator() {
  const [selectedGoal, setSelectedGoal] = useState('Travel');
  const [cost, setCost] = useState(20000);
  const [frequency, setFrequency] = useState('Every 2 years');
  const [ageRange, setAgeRange] = useState([65, 89]);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">HSBC</h1>
          <div className="flex items-center">
            <span className="text-sm mr-2">Step 3 of 4</span>
            <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-red-600"></div>
            </div>
          </div>
        </header>
        <main className="bg-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Add your dream retirement goals</h2>
          <p className="text-gray-300 mb-8">What dream retirement goals would you like to include?</p>
          <Tabs defaultValue={selectedGoal} onValueChange={setSelectedGoal} className="mb-8">
            <TabsList>
              <TabsTrigger value="Travel"><Plane className="w-5 h-5" /></TabsTrigger>
              <TabsTrigger value="Rental"><Home className="w-5 h-5" /></TabsTrigger>
              <TabsTrigger value="Car"><Car className="w-5 h-5" /></TabsTrigger>
              <TabsTrigger value="Medical"><Heart className="w-5 h-5" /></TabsTrigger>
              <TabsTrigger value="Legacy"><Briefcase className="w-5 h-5" /></TabsTrigger>
              <TabsTrigger value="Clothes"><Tshirt className="w-5 h-5" /></TabsTrigger>
              <TabsTrigger value="Construction"><Hammer className="w-5 h-5" /></TabsTrigger>
              <TabsTrigger value="Payment"><CreditCard className="w-5 h-5" /></TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Your dream retirement goals</h3>
            <p className="text-gray-400 mb-4">Set your dream retirement goals in today's dollars</p>
            <div className="mb-6">
              <label htmlFor="cost" className="block text-sm font-medium text-gray-300 mb-1">Cost</label>
              <Input id="cost" type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full mb-2" />
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-300 mb-1">Frequency</label>
              <Select id="frequency" defaultValue={frequency} onValueChange={setFrequency} className="w-full mb-2">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Every year">Every year</SelectItem>
                  <SelectItem value="Every 2 years">Every 2 years</SelectItem>
                  <SelectItem value="Every 5 years">Every 5 years</SelectItem>
                </SelectContent>
              </Select>
              <label htmlFor="age-range" className="block text-sm font-medium text-gray-300 mb-1">Age period</label>
              <Slider id="age-range" defaultValue={ageRange} onValueChange={setAgeRange} min={50} max={100} step={1} className="w-full" />
            </div>
            <div className="flex justify-between items-center">
              <Button variant="outline" className="text-gray-400 border-gray-600">Previous</Button>
              <Button className="bg-red-600">Next</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
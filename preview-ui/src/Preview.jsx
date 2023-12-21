import React from 'react';
import { Heart, Home, Car, Medical, Edit, Trash, Plus, Minus } from 'lucide-react';
import { Button, Slider, Input, Label } from "@/components/ui";

const RetirementGoalsCalculator = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-red-600 text-3xl font-bold mb-8">HSBC</header>
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Add your dream retirement goals</h2>
        <p className="text-gray-400 mb-8">What dream retirement goals would you like to include?</p>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded">
            <Heart className="w-8 h-8 mb-2" />
            <span>Travel</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded">
            <Home className="w-8 h-8 mb-2" />
            <span>Rental</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded">
            <Car className="w-8 h-8 mb-2" />
            <span>Car</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded">
            <Medical className="w-8 h-8 mb-2" />
            <span>Medical</span>
          </div>
          {/* Additional goal icons can be added here */}
        </div>
        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Heart className="w-6 h-6 mr-2" />
            <span className="font-semibold">Travel</span>
          </div>
          <Button variant="ghost" className="text-red-600">
            <Trash className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Label className="flex-1 mr-4">
            Cost
            <Input className="mt-1" placeholder="20,000" />
          </Label>
          <Label className="flex-1">
            Frequency
            <Input className="mt-1" placeholder="Every 2 years" />
          </Label>
        </div>
        <div className="flex items-center mb-8">
          <Label className="flex-1 mr-4">
            Age period
            <Slider className="mt-1" defaultValue={[65, 89]} />
          </Label>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" className="text-gray-400 border-gray-600">
            Previous
          </Button>
          <Button className="bg-red-600">
            Next
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-4xl mt-4">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-gray-400">Step 03/04</span>
      </div>
    </div>
  );
};

export default RetirementGoalsCalculator;
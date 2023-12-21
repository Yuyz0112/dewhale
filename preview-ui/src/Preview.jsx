import React from 'react';
import { ArrowRight, Home, Car, Heart, Camera, Edit, Trash, Plus, Minus } from 'lucide-react';
import { Button, Input, Slider } from "@/components/ui";
import { Label } from "@/components/ui/label";

export default function RetirementGoalsCalculator() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-2xl font-bold mb-8">
        <span className="text-red-500">HSBC</span> 🏦
      </header>
      <main className="bg-gray-800 p-8 rounded-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">What dream retirement goals would you like to include?</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Button variant="outline" className="flex flex-col items-center justify-center p-4">
            <Home className="mb-2" />
            <span>Rental</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center justify-center p-4">
            <Car className="mb-2" />
            <span>Car</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center justify-center p-4">
            <Heart className="mb-2" />
            <span>Medical</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center justify-center p-4">
            <Camera className="mb-2" />
            <span>Travel</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center justify-center p-4">
            <Edit className="mb-2" />
            <span>Legacy</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center justify-center p-4">
            <Trash className="mb-2" />
            <span>Clothes</span>
          </Button>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Your dream retirement goals</h3>
            <span className="text-red-500">1 goal</span>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <Plus className="text-red-500 mr-2" />
              <span className="font-semibold">Travel</span>
            </div>
            <div className="flex items-center">
              <Label htmlFor="cost">Cost</Label>
              <Input id="cost" defaultValue="20000" className="mx-2" />
              <Label htmlFor="frequency">Frequency</Label>
              <Select id="frequency" defaultValue="Every 2 years" className="mx-2">
                <option>Every year</option>
                <option>Every 2 years</option>
                <option>Every 5 years</option>
              </Select>
              <Label htmlFor="age-range">Age period</Label>
              <Slider id="age-range" defaultValue={[65, 89]} min={50} max={100} className="mx-2" />
              <Minus className="text-red-500 ml-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="outline">Previous</Button>
          <Button>Next</Button>
        </div>
      </main>
    </div>
  );
}
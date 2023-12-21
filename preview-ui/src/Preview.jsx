import React from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Plane, Home, Car, Heart, ShoppingBag, Hammer, CreditCard, Map } from 'lucide-react';

const RetirementGoalsCalculator = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex justify-center items-center">
      <div className="max-w-4xl p-8 bg-gray-800 rounded-lg">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">HSBC <span className="text-red-500">❤️</span></h1>
          <div className="text-gray-400">03</div>
        </header>
        <h2 className="text-3xl font-bold mb-6">What dream retirement goals would you like to include?</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <Plane className="mx-auto mb-2" />
            <div>Travel</div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <Home className="mx-auto mb-2" />
            <div>Rental</div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <Car className="mx-auto mb-2" />
            <div>Car</div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <Heart className="mx-auto mb-2" />
            <div>Medical</div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <ShoppingBag className="mx-auto mb-2" />
            <div>Clothes</div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <Hammer className="mx-auto mb-2" />
            <div>Construction</div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <CreditCard className="mx-auto mb-2" />
            <div>Payment</div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg text-center">
            <Map className="mx-auto mb-2" />
            <div>Legacy</div>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Your dream retirement goals</h3>
            <span className="text-red-500">1 goal</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Plane className="mr-2" />
              <span>Travel</span>
            </div>
            <button className="text-red-500">
              <Map className="w-4 h-4" />
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Cost</span>
            <span>$20,000</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Frequency</span>
            <ToggleGroup type="single" defaultValue="a">
              <ToggleGroupItem value="a" className="text-xs">Every 2 years</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex justify-between items-center">
            <span>Age period</span>
            <div className="w-1/2">
              <Slider defaultValue={[65, 89]} max={100} step={1} />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="outline">Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default RetirementGoalsCalculator;
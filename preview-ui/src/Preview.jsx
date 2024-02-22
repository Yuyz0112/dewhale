import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

const RideNowPrototype = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="font-bold text-xl">RideNow PowerSports</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Inventory</a>
          <a href="#" className="hover:underline">Sell</a>
          <a href="#" className="hover:underline">New Arrivals</a>
          <a href="#" className="hover:underline">Store</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Pick Your Store</a>
          <a href="#" className="hover:underline">Login</a>
          <Button variant="outline">Create Account</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 relative bg-gray-300">
        <img
          src="https://images.unsplash.com/photo-1516734212187-a5f3b3ebe9b7?w=1267&dpr=2&q=80"
          alt="Endless Adventures"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-6">
          <h1 className="text-white text-5xl font-bold text-center">ENDLESS ADVENTURES</h1>
          <p className="text-yellow-400 text-3xl">20,773+ VEHICLES TO CHOOSE FROM!</p>
          <div className="flex space-x-2">
            <Input placeholder="Search by Make, Model, or Keyword" className="w-96" />
            <Button variant="solid" className="bg-red-600 text-white">
              <Search className="w-4 h-4 mr-2" />
              SEARCH INVENTORY
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md text-center">
        Footer content goes here.
      </footer>
    </div>
  );
};

export default RideNowPrototype;
import { Search } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

const OfflineCalendarPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">OFFLINE</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Shop Analog</button>
          <div className="relative">
            <Search className="w-5 h-5 absolute top-2 left-2 text-gray-500" />
            <input type="search" placeholder="Search" className="pl-10 pr-4 py-2 rounded-md" />
          </div>
          <div className="space-x-2">
            <button className="text-white">Login</button>
            <button className="text-white">Cart</button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Stendig-Style Vintage Calendar</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Calendar
              mode="single"
              className="rounded-md border"
            />
          </div>
        </div>
      </main>
      <footer className="bg-black text-white p-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2023 OFFLINE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OfflineCalendarPage;
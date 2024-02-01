import { Button } from '@/components/ui/button';
import React from 'react';

export default function Calculator() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-black p-4 rounded-lg">
        <div className="bg-gray-800 text-white text-right p-4 rounded mb-4">
          0
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Button className="bg-red-600 text-white col-span-2">C</Button>
          <Button className="bg-yellow-400 text-white">⌫</Button>
          <Button className="bg-yellow-400 text-white">/</Button>
          <Button className="bg-gray-600 text-white">7</Button>
          <Button className="bg-gray-600 text-white">8</Button>
          <Button className="bg-gray-600 text-white">9</Button>
          <Button className="bg-yellow-400 text-white">*</Button>
          <Button className="bg-gray-600 text-white">4</Button>
          <Button className="bg-gray-600 text-white">5</Button>
          <Button className="bg-gray-600 text-white">6</Button>
          <Button className="bg-yellow-400 text-white">-</Button>
          <Button className="bg-gray-600 text-white">1</Button>
          <Button className="bg-gray-600 text-white">2</Button>
          <Button className="bg-gray-600 text-white">3</Button>
          <Button className="bg-yellow-400 text-white">+</Button>
          <Button className="bg-gray-600 text-white col-span-2">0</Button>
          <Button className="bg-gray-600 text-white">.</Button>
          <Button className="bg-green-500 text-white">=</Button>
        </div>
      </div>
    </div>
  );
}
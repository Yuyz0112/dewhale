import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import React from 'react';

export default function CalculatorUI() {
  return (
    <div className="max-w-xl mx-auto my-10 p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" className="rounded-full p-2">
          <RefreshCw className="w-5 h-5" />
        </Button>
        <Input className="text-right p-2 rounded-lg border-2 border-gray-200" readOnly value="0" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Button className="rounded-lg bg-red-500 text-white">AC</Button>
        <Button className="rounded-lg">(</Button>
        <Button className="rounded-lg">)</Button>
        <Button className="rounded-lg">%</Button>
        <Button className="rounded-lg">7</Button>
        <Button className="rounded-lg">8</Button>
        <Button className="rounded-lg">9</Button>
        <Button className="rounded-lg">÷</Button>
        <Button className="rounded-lg">4</Button>
        <Button className="rounded-lg">5</Button>
        <Button className="rounded-lg">6</Button>
        <Button className="rounded-lg">×</Button>
        <Button className="rounded-lg">1</Button>
        <Button className="rounded-lg">2</Button>
        <Button className="rounded-lg">3</Button>
        <Button className="rounded-lg">-</Button>
        <Button className="rounded-lg">0</Button>
        <Button className="rounded-lg">.</Button>
        <Button className="rounded-lg bg-blue-600 text-white">=</Button>
        <Button className="rounded-lg">+</Button>
      </div>
    </div>
  );
}
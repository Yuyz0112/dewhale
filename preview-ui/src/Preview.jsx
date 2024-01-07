import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function PaymentForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
      <h1 className="text-2xl font-semibold mb-4 text-green-600">Payment Method</h1>
      <p className="text-gray-600 mb-6">Add a new payment method to your account.</p>
      <ToggleGroup type="single" defaultValue="card" className="mb-6">
        <ToggleGroupItem value="card" className="rounded-lg border border-green-500 text-green-500">
          Card
        </ToggleGroupItem>
        <ToggleGroupItem value="paypal" className="rounded-lg border border-gray-300">
          Paypal
        </ToggleGroupItem>
        <ToggleGroupItem value="apple" className="rounded-lg border border-gray-300">
          Apple
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
          <Input id="name" placeholder="First Last" className="mt-1 block w-full" />
        </div>
        <div>
          <Label htmlFor="city" className="block text-sm font-medium text-gray-700">City</Label>
          <Input id="city" placeholder="City" className="mt-1 block w-full" />
        </div>
        <div>
          <Label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</Label>
          <Input id="card-number" placeholder="Card number" className="mt-1 block w-full" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="expires-month" className="block text-sm font-medium text-gray-700">Expires</Label>
            <Select id="expires-month" className="mt-1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="01">01</SelectItem>
                <SelectItem value="02">02</SelectItem>
                {/* ... other months */}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="expires-year" className="block text-sm font-medium text-gray-700">Year</Label>
            <Select id="expires-year" className="mt-1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                {/* ... other years */}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</Label>
            <Input id="cvc" placeholder="CVC" className="mt-1 block w-full" />
          </div>
        </div>
      </div>
      <Button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Continue</Button>
    </div>
  );
}
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Camera, Calendar, File } from "lucide-react";

export default function PersonalFinanceDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-64 p-6 hidden sm:block">
        <div className="flex items-center space-x-3 mb-6">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&dpr=2&q=80" alt="Profile" />
            <AvatarFallback>Mike</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold">Mike</div>
            <div className="text-sm text-gray-600">Your Money</div>
          </div>
        </div>
        <nav className="space-y-2">
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-pink-600">
              <Camera className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-pink-600">
              <File className="w-5 h-5" />
              <span>View Transactions</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-pink-600">
              <Calendar className="w-5 h-5" />
              <span>Incomes</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-pink-600">
              <Edit className="w-5 h-5" />
              <span>Expenses</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-pink-600">
              <Camera className="w-5 h-5" />
              <span>Sign Out</span>
            </a>
          </Button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="flex justify-between items-center mb-4">
            <CardTitle className="text-2xl font-bold text-gray-800">Incomes</CardTitle>
            <CardDescription className="text-3xl font-bold text-pink-600">Total Income: $16500</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input placeholder="Salary Title" className="border p-2 rounded" />
              <Input placeholder="Salary Amount" className="border p-2 rounded" />
              <Input placeholder="Enter A Date" className="border p-2 rounded" />
              <Select>
                <SelectTrigger className="border p-2 rounded">
                  <SelectValue placeholder="Select Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Add A Reference" className="border p-2 rounded" />
              <Button variant="outline" className="text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white">
                <Plus className="w-5 h-5 mr-2" />
                Add Income
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <Camera className="w-6 h-6 text-pink-600 mr-3" />
                  <div>
                    <div className="font-bold">From Freelance</div>
                    <div className="text-sm text-gray-600">$1300 - 25/02/2023</div>
                    <div className="text-sm text-gray-600">From freelance works.</div>
                  </div>
                </div>
                <Edit className="w-5 h-5 text-gray-600 cursor-pointer" />
              </div>
              {/* Repeat for other income items */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
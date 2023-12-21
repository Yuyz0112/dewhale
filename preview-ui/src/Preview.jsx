import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Camera, Plus, Trash } from 'lucide-react';

export default function PersonalFinanceDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-64 p-6 hidden sm:block">
        <div className="flex items-center space-x-3 mb-6">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Mike" />
            <AvatarFallback delayMs={600}>M</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold">Mike</div>
            <div className="text-sm text-gray-600">Your Money</div>
          </div>
        </div>
        <nav className="space-y-2">
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <Camera className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <Edit className="w-5 h-5" />
              <span>View Transactions</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <Camera className="w-5 h-5" />
              <span>Incomes</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <Edit className="w-5 h-5" />
              <span>Expenses</span>
            </a>
          </Button>
          <Button asChild>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <Trash className="w-5 h-5" />
              <span>Sign Out</span>
            </a>
          </Button>
        </nav>
      </div>
      {/* Main content */}
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Income: $16500</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Salary Title" className="mb-4" />
                <Input placeholder="Salary Amount" className="mb-4" />
                <Input placeholder="Enter A Date" className="mb-4" />
                <Select>
                  <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="Select Option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Add A Reference" className="mb-4" />
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Income
                </Button>
              </div>
              <div>
                <div className="space-y-4">
                  <IncomeItem title="From Freelance" amount="$1300" date="25/02/2023" description="From freelance works." />
                  <IncomeItem title="Shopify" amount="$8000" date="21/02/2023" description="My January Shopify earnings." />
                  <IncomeItem title="Youtube Adsense" amount="$1200" date="18/01/2023" description="My January youtube earnings." />
                  <IncomeItem title="Developer Salary" amount="$6000" date="26/01/2023" description="My January developer salary." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function IncomeItem({ title, amount, date, description }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex items-center">
        <Camera className="w-6 h-6 text-blue-500 mr-3" />
        <div>
          <div className="font-bold">{title}</div>
          <div className="text-sm text-gray-600">{description}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold">{amount}</div>
        <div className="text-sm text-gray-600">{date}</div>
      </div>
      <Button variant="ghost">
        <Edit className="w-5 h-5 text-gray-600 hover:text-gray-800" />
      </Button>
    </div>
  );
}
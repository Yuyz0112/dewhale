import { Home, User, Phone, Lock, Mail } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Home className="w-8 h-8 text-gray-800" />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          </nav>
          <User className="w-8 h-8 text-gray-800" />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="flex space-x-1 mb-4">
              <TabsTrigger value="login" className="flex-1">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="flex-1">
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      <Phone className="w-5 h-5" />
                    </span>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" className="flex-1 block w-full rounded-none rounded-r-md" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      <Lock className="w-5 h-5" />
                    </span>
                    <Input id="password" type="password" placeholder="Enter your password" className="flex-1 block w-full rounded-none rounded-r-md" />
                  </div>
                </div>
                <Button className="w-full">Login</Button>
              </div>
            </TabsContent>
            <TabsContent value="signup" className="space-y-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      <Mail className="w-5 h-5" />
                    </span>
                    <Input id="email" type="email" placeholder="Enter your email" className="flex-1 block w-full rounded-none rounded-r-md" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      <Lock className="w-5 h-5" />
                    </span>
                    <Input id="signup-password" type="password" placeholder="Create a password" className="flex-1 block w-full rounded-none rounded-r-md" />
                  </div>
                </div>
                <Button className="w-full">Sign Up</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <div className="text-center text-sm text-gray-500">
          © 2021 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
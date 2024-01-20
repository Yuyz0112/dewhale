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
        <div className="container mx-auto flex justify-between items-center">
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
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
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
              <div className="flex flex-col space-y-2">
                <Label htmlFor="phone-login">Phone Number</Label>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <Input id="phone-login" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password-login">Password</Label>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-gray-500" />
                  <Input id="password-login" type="password" placeholder="Enter your password" />
                </div>
              </div>
              <Button className="w-full">Login</Button>
            </TabsContent>
            <TabsContent value="signup" className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="phone-signup">Phone Number</Label>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <Input id="phone-signup" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email-signup">Email</Label>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <Input id="email-signup" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password-signup">Password</Label>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-gray-500" />
                  <Input id="password-signup" type="password" placeholder="Create a password" />
                </div>
              </div>
              <Button className="w-full">Sign Up</Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2021 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
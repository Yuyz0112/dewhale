import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowRight, Frown, Meh, Smile, Star, Home } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';

const ProductPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <nav className="flex space-x-4">
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">How it works</Button>
          <Button variant="ghost">Testimonials</Button>
        </nav>
        <Button variant="outline">Log in</Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <section className="text-center my-12">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">HEALTH INFO <Badge variant="outline" className="text-green-500">IN ONE APP</Badge></h1>
          <p className="text-lg text-gray-600 mb-6">Doctors, medicine, lab tests – all in one service 24/7 availability...</p>
          <div className="flex justify-center space-x-2 mb-8">
            <Button variant="solid" className="bg-green-500 text-white">
              <Download className="w-4 h-4 mr-2" /> Download on the App Store
            </Button>
            <Button variant="solid" className="bg-green-500 text-white">
              <Download className="w-4 h-4 mr-2" /> Get it on Google Play
            </Button>
          </div>
          <a href="#details" className="text-green-500 hover:underline">See details <ArrowRight className="inline-block" /></a>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>What symptoms are troubling you today?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-green-500">Chest pain</Badge>
                <Badge variant="outline" className="text-green-500">Headache</Badge>
                <Badge variant="outline" className="text-green-500">Fever</Badge>
                <Badge variant="outline" className="text-green-500">Cough</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>What level of tiredness do you have now?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-2">
                <Frown className="text-yellow-400 w-6 h-6" />
                <Meh className="text-yellow-500 w-6 h-6" />
                <Smile className="text-green-500 w-6 h-6" />
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Doctor" />
                <AvatarFallback>Dr</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">+100k happy clients</h2>
              <p className="text-lg text-gray-600">Join our community and start improving your health today.</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">App store rating</h2>
              <div className="flex justify-center items-center">
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-yellow-400 w-6 h-6" />
                <span className="text-lg text-gray-600 ml-2">4.9</span>
              </div>
              <p className="text-sm text-gray-500">456 reviews</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-600">© 2023 Health App, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;
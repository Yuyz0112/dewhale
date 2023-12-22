import { Button } from '@/components/ui/button';
import { Download, Star, ArrowRight } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import React from 'react';

export default function HealthAppProductPage() {
  return (
    <div className="bg-white text-gray-700">
      <header className="flex justify-between items-center p-4 border-b">
        <nav className="flex space-x-4">
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">How it works</Button>
          <Button variant="ghost">Testimonials</Button>
        </nav>
        <Button variant="outline">Log in</Button>
      </header>
      <main className="p-8">
        <section className="text-center">
          <h1 className="text-6xl font-bold mb-4">HEALTH INFO IN ONE APP</h1>
          <p className="text-lg mb-6">Doctors, medicine, lab tests – all in one service 24/7 availability...</p>
          <div className="flex justify-center space-x-2 mb-8">
            <Button variant="solid">
              <Download className="w-4 h-4 mr-2" /> Download on the App Store
            </Button>
            <Button variant="solid">
              <Download className="w-4 h-4 mr-2" /> Get it on Google Play
            </Button>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-orange-100 p-4 rounded-lg shadow-md">
              <p className="mb-2">There is a little fatigue, but in general I feel good</p>
              <ToggleGroup type="single" defaultValue="neutral">
                <ToggleGroupItem value="sad" aria-label="Sad">
                  😔
                </ToggleGroupItem>
                <ToggleGroupItem value="neutral" aria-label="Neutral">
                  🙂
                </ToggleGroupItem>
                <ToggleGroupItem value="happy" aria-label="Happy">
                  😄
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">What symptoms troubling you today?</h3>
              <div className="flex justify-around">
                <Badge variant="outline">Chest pain</Badge>
                <Badge variant="outline">Headache</Badge>
                <Badge variant="outline">Fever</Badge>
                <Badge variant="outline">Cough</Badge>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">What level of tiredness do you have now?</h3>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Tiredness Level"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <AspectRatio ratio={1} className="w-32 h-32">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Doctor"
                  className="rounded-full object-cover"
                />
              </AspectRatio>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">+100k happy clients</h3>
                <div className="flex items-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-sm">App store rating</p>
                <p className="font-bold">4.9</p>
                <p className="text-sm">456 reviews</p>
              </div>
            </div>
            <div className="text-right">
              <Button variant="link">
                See details <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
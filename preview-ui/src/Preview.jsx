import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:space-y-10">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-none lg:text-6xl">
            Elevate Your Business with Our Digital Marketing Solutions
          </h1>
          <p className="text-lg sm:text-xl">
            We provide innovative strategies to expand your brand's online presence, engage your audience, and drive conversions.
          </p>
          <div className="flex space-x-4">
            <Button variant="solid" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:border-gray-300 hover:text-gray-300">
              Learn More
            </Button>
          </div>
        </div>
        <AspectRatio ratio={16 / 9} className="shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&dpr=2&q=80"
            alt="Digital Marketing"
            className="rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    </section>
  );
}
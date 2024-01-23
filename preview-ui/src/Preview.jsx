import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import React from 'react';

const NewsletterSubscribeForm = () => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Subscribe to our Newsletter</h2>
      <p className="text-gray-600 text-center mb-8">
        Get the latest news and updates right in your inbox.
      </p>
      <form className="space-y-4">
        <div>
          <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </Label>
          <Input id="email" type="email" placeholder="name@company.com" className="w-full" required />
        </div>
        <div className="flex items-center">
          <Input id="terms" type="checkbox" required />
          <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
          </Label>
        </div>
        <Button className="w-full flex items-center justify-center">
          <Check className="w-5 h-5 mr-2" /> Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSubscribeForm;
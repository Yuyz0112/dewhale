import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="bg-gray-100 min-h-screen p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <Card className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
          <CardHeader className="bg-blue-500 text-white p-4 rounded-t-lg">
            <CardTitle className="text-2xl font-semibold">Basic</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-center text-4xl font-bold mb-4">$19<span className="text-lg">/mo</span></p>
            <ul className="text-sm space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>1 Website</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>5 GB Storage</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>Unlimited Traffic</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
          <CardHeader className="bg-yellow-500 text-white p-4 rounded-t-lg">
            <CardTitle className="text-2xl font-semibold">Pro</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-center text-4xl font-bold mb-4">$49<span className="text-lg">/mo</span></p>
            <ul className="text-sm space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>5 Websites</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>15 GB Storage</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>Unlimited Traffic</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>Priority Support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
          <CardHeader className="bg-red-500 text-white p-4 rounded-t-lg">
            <CardTitle className="text-2xl font-semibold">Premium</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-center text-4xl font-bold mb-4">$99<span className="text-lg">/mo</span></p>
            <ul className="text-sm space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>Unlimited Websites</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>50 GB Storage</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>Unlimited Traffic</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>Priority Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" /><span>Custom SSL Certificate</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
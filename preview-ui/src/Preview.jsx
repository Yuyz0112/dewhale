import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-between p-12 hidden lg:block">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="rounded-full bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=32&dpr=2&q=80"
                alt="Company Logo"
                className="h-8 w-8"
              />
            </div>
            <span className="text-2xl font-bold">Acme Inc</span>
          </div>
          <blockquote className="italic border-l-4 border-gray-500 pl-4">
            "This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before."
            <div className="mt-4 font-semibold">Sofia Davis</div>
          </blockquote>
        </div>
        <div className="text-right">
          <Button variant="outline" className="text-white border-white">
            Login
          </Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6">Create an account</h2>
          <div className="mb-4">
            <p className="text-gray-600 mb-2">
              Enter your email below to create your account
            </p>
            <Input placeholder="name@example.com" className="mb-4" />
            <Button className="w-full">Sign In with Email</Button>
          </div>
          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <Button className="w-full gap-2">
            <GithubIcon className="w-5 h-5" />
            Github
          </Button>
          <p className="text-gray-500 text-sm text-center mt-6">
            By clicking continue, you agree to our{" "}
            <a href="#" className="text-black underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-black underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function DeploymentStatusCard() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader className="bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Cloud"
                className="w-10 h-10 rounded-full"
              />
              <CardTitle className="ml-2">Deploying with Cloudflare Pages</CardTitle>
            </div>
            <Badge variant="outline" className="text-orange-500 border-orange-500">
              bot
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <CardDescription>Latest commit:</CardDescription>
              <span className="font-mono text-sm">5bf0023</span>
            </div>
            <div className="flex justify-between items-center">
              <CardDescription>Status:</CardDescription>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500" />
                <span className="ml-1 text-green-500">Deploy successful!</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <CardDescription>Preview URL:</CardDescription>
              <a href="https://42c9b8a7.vx-dev.pages.dev" className="text-blue-500 hover:underline">
                https://42c9b8a7.vx-dev.pages.dev
              </a>
            </div>
            <div className="flex justify-between items-center">
              <CardDescription>Branch Preview URL:</CardDescription>
              <a href="https://ui-gen-issue-2.vx-dev.pages.dev" className="text-blue-500 hover:underline">
                https://ui-gen-issue-2.vx-dev.pages.dev
              </a>
            </div>
          </div>
        </CardContent>
        <div className="bg-gray-100 p-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">View logs</a>
        </div>
      </Card>
    </div>
  );
}
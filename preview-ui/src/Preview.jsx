import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check } from 'lucide-react';

export default function DeploymentStatusCard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex justify-center items-center">
        <Card className="max-w-md w-full bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <CardHeader className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Deploying with Cloudflare Pages
              </CardTitle>
            </div>
            <Switch checked={darkMode} onChange={setDarkMode} />
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <CardDescription className="font-medium text-gray-600 dark:text-gray-300">
                  Latest commit:
                </CardDescription>
                <span className="text-gray-900 dark:text-white">5bf0023</span>
              </div>
              <div className="flex justify-between items-center">
                <CardDescription className="font-medium text-gray-600 dark:text-gray-300">
                  Status:
                </CardDescription>
                <div className="flex items-center space-x-1">
                  <Check className="text-green-500" />
                  <span className="text-green-500 dark:text-green-400 font-semibold">Deploy successful!</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <CardDescription className="font-medium text-gray-600 dark:text-gray-300">
                  Preview URL:
                </CardDescription>
                <a href="https://42c9b8a7.vx-dev.pages.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://42c9b8a7.vx-dev.pages.dev
                </a>
              </div>
              <div className="flex justify-between items-center">
                <CardDescription className="font-medium text-gray-600 dark:text-gray-300">
                  Branch Preview URL:
                </CardDescription>
                <a href="https://ui-gen-issue-2.vx-dev.pages.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://ui-gen-issue-2.vx-dev.pages.dev
                </a>
              </div>
            </div>
          </CardContent>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 text-right">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View logs</a>
          </div>
        </Card>
      </div>
    </div>
  );
}
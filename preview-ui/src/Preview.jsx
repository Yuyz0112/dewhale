import { Mail, Star, Wifi, Clock, Settings, InboxIcon, Edit, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EmailClientComponent() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="flex-1 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-4">
          Revolutionize Your Inbox
        </h1>
        <p className="max-w-md text-center mb-8">
          Experience the future of email with our cutting-edge client. Organize, prioritize, and beautify your daily communication.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 p-8 border-t border-gray-800">
        <FeatureCard
          icon={<Mail className="w-8 h-8 text-opacity-70" />}
          title="Unified Inbox"
          description="Manage all your emails from multiple accounts in one convenient location."
        />
        <FeatureCard
          icon={<Star className="w-8 h-8 text-opacity-70" />}
          title="Important First"
          description="Automatically prioritize your most important messages with our smart filters."
        />
        <FeatureCard
          icon={<Wifi className="w-8 h-8 text-opacity-70" />}
          title="Always Connected"
          description="Stay up to date with real-time notifications and continuous sync."
        />
        <FeatureCard
          icon={<Clock className="w-8 h-8 text-opacity-70" />}
          title="Snooze Emails"
          description="Clear out distractions by snoozing emails until you're ready to handle them."
        />
        <FeatureCard
          icon={<Settings className="w-8 h-8 text-opacity-70" />}
          title="Customizable"
          description="Tailor your email experience with customizable swipes, views, and more."
        />
        <FeatureCard
          icon={<InboxIcon className="w-8 h-8 text-opacity-70" />}
          title="Smart Search"
          description="Find exactly what you're looking for with our powerful search and filtering tools."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-transparent border border-gray-700 rounded-lg p-4">
      <CardContent className="flex flex-col items-center">
        <Badge variant="outline" className="p-3 rounded-full border border-gray-700 mb-4">
          {icon}
        </Badge>
        <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
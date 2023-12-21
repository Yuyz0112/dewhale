import { ArrowRight, InboxIcon, Edit, Bell, Wifi, Star, Clock, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EmailClientComponent() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="flex-1 flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-4">
            Simplify Your Email Experience
          </h1>
          <p className="text-gray-400 mb-6">
            Manage your emails with ease and enhance productivity with our intuitive email client.
          </p>
          <Badge variant="outline" className="text-white border-gray-700">
            Get Started <ArrowRight className="ml-2" />
          </Badge>
        </div>
      </div>
      <div className="bg-white p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center text-gray-800 font-bold mb-10">
            Powerful Features
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 rounded-lg border border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-gray-700 bg-opacity-20 rounded-full border border-gray-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Unified Inbox",
    description: "Access all your emails from different accounts in one convenient location.",
    icon: <InboxIcon className="w-8 h-8 text-white opacity-75" />,
  },
  {
    title: "Seamless Integration",
    description: "Integrate with your favorite apps and services without any hassle.",
    icon: <Wifi className="w-8 h-8 text-white opacity-75" />,
  },
  {
    title: "Instant Notifications",
    description: "Never miss an important email with real-time notifications.",
    icon: <Bell className="w-8 h-8 text-white opacity-75" />,
  },
  {
    title: "Smart Organization",
    description: "Automatically categorize emails for efficient management.",
    icon: <Edit className="w-8 h-8 text-white opacity-75" />,
  },
  {
    title: "Customizable Themes",
    description: "Personalize your email client with themes that reflect your style.",
    icon: <Star className="w-8 h-8 text-white opacity-75" />,
  },
  {
    title: "Scheduled Sending",
    description: "Compose emails now and schedule them to send later at the perfect time.",
    icon: <Clock className="w-8 h-8 text-white opacity-75" />,
  },
  {
    title: "Advanced Security",
    description: "Protect your privacy with leading security protocols and encryption.",
    icon: <Settings className="w-8 h-8 text-white opacity-75" />,
  },
];
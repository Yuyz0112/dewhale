import { Mail, Settings, Star, InboxIcon, Wifi, Clock, Edit, Camera, File } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[url('/images/pattern.png')] bg-cover bg-fixed text-white">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-4">
          Revolutionize Your Inbox
        </h1>
        <p className="max-w-md mx-auto mb-6">
          Experience the ultimate email client that brings efficiency and style to your email management. Stay connected, organized, and in control.
        </p>
      </div>
      <AspectRatio ratio={16 / 9} className="w-full max-w-2xl">
        <div className="bg-gradient-to-r from-gray-800 to-black rounded-md shadow-lg"></div>
      </AspectRatio>
    </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 border-r border-gray-700 last:border-r-0">
      <div className="p-3 bg-white bg-opacity-10 rounded-full mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="bg-black bg-opacity-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Everything You Need at Your Fingertips
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <Feature
            icon={<Mail className="w-8 h-8 text-white opacity-70" />}
            title="Unified Inbox"
            description="Manage all your emails from multiple accounts in one single place."
          />
          <Feature
            icon={<Settings className="w-8 h-8 text-white opacity-70" />}
            title="Customizable Interface"
            description="Tailor your email experience with customizable settings and themes."
          />
          <Feature
            icon={<Star className="w-8 h-8 text-white opacity-70" />}
            title="Important First"
            description="Prioritize your most important emails so you never miss a thing."
          />
          <Feature
            icon={<InboxIcon className="w-8 h-8 text-white opacity-70" />}
            title="Smart Organization"
            description="Automatic filters and tags to keep your inbox tidy."
          />
          <Feature
            icon={<Wifi className="w-8 h-8 text-white opacity-70" />}
            title="Always Connected"
            description="Stay updated with real-time notifications and sync."
          />
          <Feature
            icon={<Clock className="w-8 h-8 text-white opacity-70" />}
            title="Scheduled Send"
            description="Write now, send later with scheduled email delivery."
          />
          <Feature
            icon={<Edit className="w-8 h-8 text-white opacity-70" />}
            title="Effortless Composing"
            description="Compose emails with ease using our intuitive editor."
          />
          <Feature
            icon={<Camera className="w-8 h-8 text-white opacity-70" />}
            title="Multimedia Friendly"
            description="Easily manage and send multimedia attachments."
          />
          <Feature
            icon={<File className="w-8 h-8 text-white opacity-70" />}
            title="Document Integration"
            description="Seamlessly integrate with popular document management systems."
          />
        </div>
      </div>
    </div>
  );
};

const EmailClientComponent = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white">
      <HeroSection />
      <div className="my-12">
        <FeaturesSection />
      </div>
    </div>
  );
};

export default EmailClientComponent;
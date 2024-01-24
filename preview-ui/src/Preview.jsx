import { Home, Clock, ArrowRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const DailyNewsHomepage = () => {
  return (
    (<div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Daily News</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="flex items-center space-x-1"><div className="w-5 h-5"/><span>Home</span></a></li>
            <li><a href="#">World</a></li>
            <li><a href="#">Politics</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Sports</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <ScrollArea className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Breaking News: Market Hits Record High</CardTitle>
              <CardDescription>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>30 minutes ago</span>
                </div>
              </CardDescription>
            </CardHeader>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1542223616-740d5dff7f56?w=800&dpr=2&q=80"
                alt="Market"
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <CardContent>
              <p>The stock market reached a new high today, with the Dow Jones Industrial Average soaring above 30,000 for the first time ever...</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Read More <ArrowRight className="ml-2" /></Button>
            </CardFooter>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, index) => (
              <Card key={index}>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={`https://images.unsplash.com/photo-${1542223616 + index}?w=800&dpr=2&q=80`}
                    alt={`News ${index + 1}`}
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <CardContent>
                  <Badge variant="outline" className="mb-2">Category</Badge>
                  <CardTitle>News Headline {index + 1}</CardTitle>
                  <CardDescription>
                    <p>Summary of the news article. This is a placeholder for the actual news content...</p>
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More <ArrowRight className="ml-2" /></Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
      <footer className="bg-white p-4 shadow-md text-center">
        <p>&copy; 2023 Daily News. All rights reserved.</p>
      </footer>
    </div>)
  );
};

export default DailyNewsHomepage;
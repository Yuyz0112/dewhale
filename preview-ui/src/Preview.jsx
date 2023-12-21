import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ReviewAndRatingPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4 hidden sm:block">
        {/* Sidebar content can be added here */}
      </aside>
      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Review and rating › Marshall Islands</h1>
          <div className="space-y-4">
            {/* Review Card 1 */}
            <Card>
              <CardContent className="flex space-x-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/300?img=1" />
                  <AvatarFallback>NH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Nina Holloway</p>
                  <p className="text-xs text-gray-500">29 Aug 2017</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                    <Badge variant="outline" className="ml-2">7</Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    So you're going abroad, you've chosen your destination and now you have to choose a hotel. Ten years ago, you'd have probably visited your local travel agent and trusted the face-to-face advice you were given by the so called 'experts'. Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline">Share Review</Button>
                <Button variant="outline">Respond</Button>
                <Button variant="outline">Download</Button>
                <Button variant="outline">Delete Review</Button>
              </CardFooter>
            </Card>
            {/* Review Card 2 */}
            {/* Additional review cards can be added following the same structure as above */}
          </div>
        </div>
      </main>
    </div>
  );
}
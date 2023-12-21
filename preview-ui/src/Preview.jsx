import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Share2, MessageCircle, Download, Trash2 } from "lucide-react";

export default function ReviewAndRatingPage() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Review and rating &gt; Marshall Islands</h1>
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&dpr=2&q=80" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="ml-2">George Kennedy</span>
          </div>
        </header>
        <main>
          {[
            {
              name: "Nina Holloway",
              date: "29 Aug 2017",
              comment: "So you're going abroad, you've chosen your destination and now you have to choose a hotel. Ten years ago, you'd have probably visited your local travel agent and trusted the face-to-face advice you were given by the so called 'experts'. Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend",
              rating: 5,
              reactions: 7,
            },
            {
              name: "Steve Fletcher",
              date: "30 Aug 2017",
              comment: "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It's also big tour business and the are many options. As you dream of that hot apple cider on a crisp afternoon do a quick check list whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It's also big tour business.",
              rating: 4,
              reactions: 6,
            },
            {
              name: "Oscar Rogers",
              date: "29 Aug 2017",
              comment: "It's also big tour business and the are many options. As you dream of that hot apple cider on a crisp afternoon do a quick check list leaf viewing is a great way to spend a fall vacation. It's also big tour business and the are many options. As you dream of that hot apple cider on a crisp afternoon do a quick check list",
              rating: 3,
              reactions: 2,
            },
          ].map((review, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="flex">
                <Avatar className="mr-4">
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 w-5 h-5" />
                      ))}
                      <span className="ml-2 text-gray-500">{review.reactions}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
        <aside className="flex justify-end space-x-2">
          <Button variant="outline" className="flex items-center space-x-2 bg-yellow-200 text-yellow-700 border-yellow-700">
            <Share2 className="w-5 h-5" />
            <span>Share Review</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2 bg-green-200 text-green-700 border-green-700">
            <MessageCircle className="w-5 h-5" />
            <span>Respond</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Download</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2 bg-red-200 text-red-700 border-red-700">
            <Trash2 className="w-5 h-5" />
            <span>Delete Review</span>
          </Button>
        </aside>
      </div>
    </div>
  );
}
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function ReviewAndRatingPage() {
  const reviews = [
    {
      id: 1,
      name: "Nina Holloway",
      date: "29 Aug 2017",
      comment: "So you're going abroad, you've chosen your destination and now you have to choose a hotel. Ten years ago, you'd have probably visited your local travel agent and trusted the face-to-face advice you were given by the so called 'experts'. Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend",
      rating: 5,
      helpfulCount: 7,
    },
    {
      id: 2,
      name: "Steve Fletcher",
      date: "30 Aug 2017",
      comment: "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It's also big tour business and the are many options. As you dream of that hot apple cider on a crisp afternoon do a quick check list whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It's also big tour business.",
      rating: 4,
      helpfulCount: 6,
    },
    {
      id: 3,
      name: "Oscar Rogers",
      date: "29 Aug 2017",
      comment: "It's also big tour business and the are many options. As you dream of that hot apple cider on a crisp afternoon do a quick check list whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It's also big tour business and the are many options. As you dream of that hot apple cider on a crisp afternoon do a quick check list",
      rating: 3,
      helpfulCount: 2,
    },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Review and rating › Marshall Islands</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {reviews.map((review) => (
            <Card key={review.id} className="mb-4">
              <CardContent className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${review.id}`} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className={`w-4 h-4 ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Button variant="ghost" className="text-green-600">
                  <Star className="w-4 h-4 mr-1" />
                  {review.helpfulCount}
                </Button>
                <div className="flex space-x-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="text-yellow-600">
                        <Share className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share Review</TooltipContent>
                  </Tooltip>
                  <Button variant="ghost" className="text-blue-600">
                    <Reply className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="text-gray-600">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="text-red-600">
                        <Trash className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete Review</TooltipContent>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Heart, MessageCircle, Gift } from 'lucide-react';
import { useState } from 'react';

const LiveStreamPage = () => {
  const [comments, setComments] = useState([
    { id: 1, user: "User1", message: "This is amazing!", avatar: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee" },
    { id: 2, user: "User2", message: "Wow! 😍", avatar: "https://images.unsplash.com/photo-1606112219350-0b4e6a30d9b6" },
    { id: 3, user: "User3", message: "I love this!", avatar: "https://images.unsplash.com/photo-1606112219353-4da8f3187b09" },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendComment = () => {
    if (inputValue.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: `User${comments.length + 1}`,
        message: inputValue,
        avatar: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
      };
      setComments([...comments, newComment]);
      setInputValue('');
    }
  };

  return (
    <div className="flex h-screen bg-pink-50">
      <div className="flex-grow flex-shrink w-2/3">
        <AspectRatio ratio={16 / 9} className="bg-black">
          {/* Placeholder for video player */}
          <div className="flex justify-center items-center h-full">
            <span className="text-white text-2xl">Live Stream Video Player</span>
          </div>
        </AspectRatio>
      </div>
      <div className="w-1/3 flex flex-col">
        <ScrollArea className="flex-grow overflow-y-auto">
          {comments.map(comment => (
            <div key={comment.id} className="flex items-center space-x-2 mb-4">
              <Avatar>
                <AvatarImage src={comment.avatar} />
                <AvatarFallback>{comment.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">{comment.user}</div>
                <div className="text-sm">{comment.message}</div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 bg-white border-t-2 border-pink-200">
          <div className="flex items-center space-x-2">
            <Input
              className="flex-grow"
              placeholder="Say something nice..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendComment()}
            />
            <Button variant="primary" className="bg-pink-500 text-white" onClick={handleSendComment}>
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="primary" className="bg-pink-500 text-white">
              <Heart className="w-5 h-5 mr-2" />
              Like
            </Button>
            <Button variant="primary" className="bg-pink-500 text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              Comment
            </Button>
            <Button variant="primary" className="bg-pink-500 text-white">
              <Gift className="w-5 h-5 mr-2" />
              Gift
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamPage;
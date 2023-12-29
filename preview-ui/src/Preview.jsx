import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Home } from 'lucide-react';
const GitHubPullRequestCard = () => {
  return (
    (<Card className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md">
      <CardHeader className="flex items-center space-x-3 border-b p-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" />
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold">react / react</CardTitle>
          <CardDescription className="text-sm text-gray-500">Pull Request #3456</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-gray-700 mb-2">
          Add new hook for managing state synchronously.
        </p>
        <div className="text-sm text-gray-600 mb-1">
          <strong>Source:</strong> feature/state-hook
        </div>
        <div className="text-sm text-gray-600 mb-1">
          <strong>Target:</strong> main
        </div>
        <div className="text-sm text-gray-600 mb-1">
          <strong>Raised by:</strong> johndoe
        </div>
        <div className="text-sm text-gray-600 mb-4">
          <strong>Language:</strong> JavaScript
        </div>
        <div className="flex justify-center">
          <div className="w-8 h-8 text-gray-800" />
        </div>
      </CardContent>
    </Card>)
  );
};

export default GitHubPullRequestCard;
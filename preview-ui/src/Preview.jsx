import { Card, CardContent, Avatar, AvatarImage, AvatarFallback, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui";
import { User } from "lucide-react";

export default function TeamMemberCard() {
  return (
    <Card className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
      <h2 className="text-lg font-semibold">Team Members</h2>
      <p className="text-sm text-gray-600 mb-4">Invite your team members to collaborate.</p>
      <CardContent>
        <div className="flex items-center space-x-4 mb-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&dpr=2&q=80" alt="Sofia Davis" />
            <AvatarFallback delayMs={600}>SD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium text-gray-800">Sofia Davis</div>
            <div className="text-gray-500 text-sm">m@example.com</div>
          </div>
          <Select>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Owner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1607746881559-7b8c535e29f9?w=800&dpr=2&q=80" alt="Jackson Lee" />
            <AvatarFallback delayMs={600}>JL</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium text-gray-800">Jackson Lee</div>
            <div className="text-gray-500 text-sm">p@example.com</div>
          </div>
          <Select>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Member" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
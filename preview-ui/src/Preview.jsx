import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const TeamMemberCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold">Team Members</h2>
      <p className="text-sm text-gray-600 mb-4">Invite your team members to collaborate.</p>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=250&dpr=2&q=80" alt="Sofia Davis" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-gray-800">Sofia Davis</div>
              <div className="text-sm text-gray-500">m@example.com</div>
            </div>
          </div>
          <Select>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Owner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=250&dpr=2&q=80" alt="Jackson Lee" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-gray-800">Jackson Lee</div>
              <div className="text-sm text-gray-500">p@example.com</div>
            </div>
          </div>
          <Select>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Member" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
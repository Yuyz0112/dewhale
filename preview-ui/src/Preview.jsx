import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TeamMemberCard() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Invite your team members to collaborate.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&dpr=2&q=80" alt="Sofia Davis" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <div>Sofia Davis</div>
                  <div className="text-sm text-gray-500">m@example.com</div>
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&dpr=2&q=80" alt="Jackson Lee" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div>
                  <div>Jackson Lee</div>
                  <div className="text-sm text-gray-500">p@example.com</div>
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
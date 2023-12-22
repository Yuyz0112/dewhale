import { Folder, Home, Trash, User, Settings, Upload, File, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableCaption, TableHeader, TableRow, TableCell, TableBody } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';

export default function FileManager() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
        <div className="flex items-center space-x-2 mb-5">
          <Folder className="w-6 h-6" />
          <span className="font-bold text-lg">Turbo Folder</span>
        </div>
        <div className="space-y-2">
          <Button variant="ghost" className="justify-start w-full">
            <Home className="w-5 h-5 mr-2" /> My Drive
          </Button>
          <Button variant="ghost" className="justify-start w-full">
            <Trash className="w-5 h-5 mr-2" /> Trash
          </Button>
          <Button variant="ghost" className="justify-start w-full">
            <User className="w-5 h-5 mr-2" /> Users
          </Button>
          <Button variant="ghost" className="justify-start w-full">
            <Settings className="w-5 h-5 mr-2" /> Logs
          </Button>
        </div>
      </div>
      <div className="flex-1 p-6">
        <Table>
          <TableCaption className="text-left">My Drive</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Last modified</TableCell>
              <TableCell>Created at</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2">
                  <Upload className="w-4 h-4 mr-1" /> Upload
                </Button>
                <Button variant="outline" className="mr-2">
                  <Folder className="w-4 h-4 mr-1" /> New folder
                </Button>
                <Button variant="outline">
                  <File className="w-4 h-4 mr-1" /> New file
                </Button>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Example file row */}
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>
                <File className="w-4 h-4 mr-2" />
                example_document.pdf
              </TableCell>
              <TableCell>1.2 MB</TableCell>
              <TableCell>Jan 1, 2023</TableCell>
              <TableCell>Dec 1, 2022</TableCell>
            </TableRow>
            {/* Example folder row */}
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>
                <Folder className="w-4 h-4 mr-2" />
                Photos
              </TableCell>
              <TableCell>—</TableCell>
              <TableCell>Jan 2, 2023</TableCell>
              <TableCell>Dec 2, 2022</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
        <div className="flex justify-between items-center mb-5">
          <Switch />
          <Button variant="ghost" className="justify-start">
            <ArrowRight className="w-5 h-5 mr-2" /> Sign out
          </Button>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/150" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              User Profile
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
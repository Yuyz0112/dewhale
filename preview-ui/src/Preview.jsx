import React from 'react';
import { Folder, File, Upload, Plus, Minus, Trash, Image, Video, Music, Document, Archive, Settings, ArrowRight } from 'lucide-react';
import { Button, Table, TableBody, TableCaption, TableCell, TableHead, TableRow, Checkbox, TooltipProvider, Tooltip, TooltipContent, TooltipTrigger, Switch, Avatar, AvatarImage, AvatarFallback } from '@/components/ui';

export default function FileManager() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 w-64 p-6 hidden sm:block">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold dark:text-white">Turbo Folder</h1>
          <Switch />
        </div>
        <nav className="mb-6">
          <ul>
            <li className="flex items-center space-x-2 mb-2">
              <Folder className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">My Drive</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <Trash className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">Trash</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <User className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">Users</span>
            </li>
            <li className="flex items-center space-x-2">
              <Settings className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">Logs</span>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between mt-auto">
          <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
            Sign out
          </Button>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold dark:text-white">My Drive</h2>
          <div className="flex space-x-2">
            <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
              <Upload className="w-4 h-4 mr-2" /> Upload
            </Button>
            <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
              <Plus className="w-4 h-4 mr-2" /> New folder
            </Button>
            <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
              <File className="w-4 h-4 mr-2" /> New file
            </Button>
          </div>
        </div>
        <Table>
          <TableCaption className="dark:text-gray-300">
            Total 3 items in the current directory.
          </TableCaption>
          <TableRow>
            <TableHead className="w-[100px] dark:text-gray-300">Name</TableHead>
            <TableHead className="dark:text-gray-300">Size</TableHead>
            <TableHead className="dark:text-gray-300">Last modified</TableHead>
            <TableHead className="dark:text-gray-300">Created at</TableHead>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium dark:text-white">
                <Checkbox id="file1" />
                <label htmlFor="file1" className="ml-2 flex items-center">
                  <Folder className="text-yellow-500 dark:text-yellow-400 w-5 h-5 mr-2" />
                  Directory
                </label>
              </TableCell>
              <TableCell className="dark:text-gray-300">64 B</TableCell>
              <TableCell className="dark:text-gray-300">Nov 22, 2023 06:26 AM</TableCell>
              <TableCell className="dark:text-gray-300">Nov 22, 2023 06:26 AM</TableCell>
            </TableRow>
            {/* Repeat for other files */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
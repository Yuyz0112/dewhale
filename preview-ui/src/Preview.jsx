import React from 'react';
import { Folder, File, FileText, Image, Music, Video, Archive, Upload, Plus, Edit, Trash, Download, ArrowRight, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';

export default function FileManager() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold dark:text-white">Turbo Folder</h1>
          <Switch />
        </div>
        <nav>
          <ul>
            <li className="flex items-center space-x-2 mb-4">
              <Folder className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">My Drive</span>
            </li>
            <li className="flex items-center space-x-2 mb-4">
              <Trash className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">Trash</span>
            </li>
            <li className="flex items-center space-x-2 mb-4">
              <User className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">Users</span>
            </li>
            <li className="flex items-center space-x-2">
              <Settings className="text-gray-500 dark:text-gray-400" />
              <span className="dark:text-gray-300">Logs</span>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 p-6 w-64">
          <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            Sign out
          </Button>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
              <Upload className="w-4 h-4 mr-2" /> Upload
            </Button>
            <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
              <Plus className="w-4 h-4 mr-2" /> New folder
            </Button>
            <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
              <FileText className="w-4 h-4 mr-2" /> New file
            </Button>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded shadow p-6">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader className="w-[100px] dark:text-gray-300">Name</TableHeader>
                <TableHeader className="dark:text-gray-300">Size</TableHeader>
                <TableHeader className="dark:text-gray-300">Last modified</TableHeader>
                <TableHeader className="dark:text-gray-300">Created at</TableHeader>
                <TableHeader className="dark:text-gray-300">Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Placeholder for file and folder rows */}
              <TableRow>
                <TableCell className="font-medium dark:text-white">
                  <div className="flex items-center space-x-2">
                    <Folder className="text-yellow-500" />
                    <span>Directory</span>
                  </div>
                </TableCell>
                <TableCell className="dark:text-gray-300">64 B</TableCell>
                <TableCell className="dark:text-gray-300">Nov 22, 2023</TableCell>
                <TableCell className="dark:text-gray-300">Nov 22, 2023</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Open in new tab</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Move</DropdownMenuItem>
                      <DropdownMenuItem>Copy</DropdownMenuItem>
                      <DropdownMenuItem>Compress</DropdownMenuItem>
                      <DropdownMenuItem>Extract</DropdownMenuItem>
                      <DropdownMenuItem>Move to trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              {/* Repeat for each file/folder */}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
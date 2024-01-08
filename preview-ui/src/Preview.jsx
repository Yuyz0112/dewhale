import { Folder, Home, Trash, User, Settings, FileText, MoreHorizontal, Download, Share2, Copy, Move, Trash2, FilePlus, PlusCircle, Archive, FileMinus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableCaption, TableHeader, TableRow, TableCell, TableBody } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Example file rows */}
            <TableRow>
              <TableCell><Checkbox /></TableCell>
              <TableCell>
                <FileText className="w-4 h-4 mr-2" />
                example_document.pdf
              </TableCell>
              <TableCell>1.2 MB</TableCell>
              <TableCell>Jan 1, 2023</TableCell>
              <TableCell>Dec 1, 2022</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Download className="w-4 h-4 mr-2" /> Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="w-4 h-4 mr-2" /> Share
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="w-4 h-4 mr-2" /> Copy
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Move className="w-4 h-4 mr-2" /> Move
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2 className="w-4 h-4 mr-2" /> Move to Trash
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
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
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <FilePlus className="w-4 h-4 mr-2" /> New File
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <PlusCircle className="w-4 h-4 mr-2" /> New Folder
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="w-4 h-4 mr-2" /> Copy
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Move className="w-4 h-4 mr-2" /> Move
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Archive className="w-4 h-4 mr-2" /> Compress
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileMinus className="w-4 h-4 mr-2" /> Decompress
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2 className="w-4 h-4 mr-2" /> Move to Trash
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
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
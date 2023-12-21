import React from 'react';
import { Folder, File, Upload, Plus, Minus, Compress, Copy, Move, Trash, Star, Calendar, Printer, Wifi } from 'lucide-react';
import { Checkbox, Button, Table, TableBody, TableCaption, TableCell, TableHeader, TableHead, TableRow, ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, TooltipProvider, Tooltip, TooltipContent, TooltipTrigger, Switch } from '@/components/ui';

export default function FileManager() {
  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
        <header className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Turbo Folder</h1>
          <div className="flex items-center space-x-4">
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Upload</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Upload Files</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Folder className="w-5 h-5" />
                  <span>New folder</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Create New Folder</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" className="flex items-center space-x-2">
                  <File className="w-5 h-5" />
                  <span>New file</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Create New File</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Switch />
              </TooltipTrigger>
              <TooltipContent>Toggle Theme</TooltipContent>
            </Tooltip>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
            <nav className="space-y-2">
              <Button asChild>
                <a href="#" className="flex items-center space-x-2 text-gray-800 dark:text-white">
                  <Home className="w-5 h-5" />
                  <span>My Drive</span>
                </a>
              </Button>
              <Button asChild>
                <a href="#" className="flex items-center space-x-2 text-gray-800 dark:text-white">
                  <Trash className="w-5 h-5" />
                  <span>Trash</span>
                </a>
              </Button>
              <Button asChild>
                <a href="#" className="flex items-center space-x-2 text-gray-800 dark:text-white">
                  <User className="w-5 h-5" />
                  <span>Users</span>
                </a>
              </Button>
              <Button asChild>
                <a href="#" className="flex items-center space-x-2 text-gray-800 dark:text-white">
                  <Settings className="w-5 h-5" />
                  <span>Logs</span>
                </a>
              </Button>
            </nav>
          </div>
          <main className="flex-1 overflow-y-auto p-6">
            <Table>
              <TableCaption className="text-gray-800 dark:text-white">Total 3 items in the current directory.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"><Checkbox /></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Last modified</TableHead>
                  <TableHead>Created at</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Folder className="w-5 h-5 text-yellow-500" />
                      <span>Directory</span>
                    </div>
                  </TableCell>
                  <TableCell>64 B</TableCell>
                  <TableCell>Nov 22, 2023 06:26 AM</TableCell>
                  <TableCell>Nov 22, 2023 06:26 AM</TableCell>
                </TableRow>
                {/* Repeat for each file/folder */}
              </TableBody>
            </Table>
          </main>
        </div>
        <footer className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Favorite</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Calendar</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Printer className="w-5 h-5" />
              <span>Print</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Wifi className="w-5 h-5" />
              <span>Offline</span>
            </Button>
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Minus className="w-5 h-5" />
            <span>Sign out</span>
          </Button>
        </footer>
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="ghost">Right click on file for options</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Open in new tab</ContextMenuItem>
            <ContextMenuItem>Download</ContextMenuItem>
            <ContextMenuItem>Share</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Rename</ContextMenuItem>
            <ContextMenuItem>Move</ContextMenuItem>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Compress</ContextMenuItem>
            <ContextMenuItem>Extract</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Move to trash</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </TooltipProvider>
  );
}
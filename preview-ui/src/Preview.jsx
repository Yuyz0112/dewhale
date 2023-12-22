import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Upload, Plus, File, Settings, Home, Trash, User, Table, Folder, Image, ArrowRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { TableCaption, TableHead, TableRow, TableCell, TableBody } from '@/components/ui/table';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@/components/ui/context-menu';
import React from 'react';

const FileManager = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Turbo Folder</h1>
        <div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="mr-2">
                  <Upload className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Upload</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="mr-2">
                  <Plus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>New folder</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="mr-2">
                  <File className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>New file</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Switch className="mr-2" />
          <Button variant="ghost">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
          <nav className="space-y-2">
            <Button asChild variant="ghost" className="flex items-center space-x-2">
              <Home className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-900 dark:text-white">My Drive</span>
            </Button>
            <Button asChild variant="ghost" className="flex items-center space-x-2">
              <Trash className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-900 dark:text-white">Trash</span>
            </Button>
            <Button asChild variant="ghost" className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-900 dark:text-white">Users</span>
            </Button>
            <Button asChild variant="ghost" className="flex items-center space-x-2">
              <File className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-900 dark:text-white">Logs</span>
            </Button>
          </nav>
        </div>
        <main className="flex-1 overflow-y-auto p-4">
          <Table>
            <TableCaption className="text-gray-600 dark:text-gray-300">Total 3 items in the current directory.</TableCaption>
            <TableHead>
              <TableRow>
                <TableCell className="w-[100px]">Name</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Last modified</TableCell>
                <TableCell>Created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex items-center">
                  <Folder className="w-5 h-5 text-yellow-500 mr-2" />
                  Directory
                </TableCell>
                <TableCell>64 B</TableCell>
                <TableCell>Nov 22, 2023</TableCell>
                <TableCell>Nov 22, 2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center">
                  <File className="w-5 h-5 text-blue-500 mr-2" />
                  Document.pdf
                </TableCell>
                <TableCell>1.2 MiB</TableCell>
                <TableCell>Nov 21, 2023</TableCell>
                <TableCell>Nov 20, 2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center">
                  <Image className="w-5 h-5 text-green-500 mr-2" />
                  Image.png
                </TableCell>
                <TableCell>2.5 MiB</TableCell>
                <TableCell>Nov 20, 2023</TableCell>
                <TableCell>Nov 19, 2023</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <Button variant="ghost" className="absolute top-0 right-0 m-4">
                <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </Button>
            </ContextMenuTrigger>
            <ContextMenuContent className="bg-white dark:bg-gray-700 shadow-lg rounded-md">
              <ContextMenuItem>Open</ContextMenuItem>
              <ContextMenuItem>Download</ContextMenuItem>
              <ContextMenuItem>Share</ContextMenuItem>
              <ContextMenuItem>Move</ContextMenuItem>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Compress</ContextMenuItem>
              <ContextMenuItem>Extract</ContextMenuItem>
              <ContextMenuItem>Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </main>
      </div>
      <footer className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-inner">
        <Button asChild variant="ghost">
          <span className="text-gray-600 dark:text-gray-300">Theme</span>
        </Button>
        <Button asChild variant="ghost">
          <span className="text-gray-600 dark:text-gray-300">Sign out</span>
        </Button>
      </footer>
    </div>
  );
};

export default FileManager;
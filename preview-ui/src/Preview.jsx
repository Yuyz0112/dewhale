import React from 'react';
import { Folder, File, Upload, Plus, Download, Trash, Image, Video, Music, File as FileIcon, Archive, Copy, ArrowRight, Home, Settings, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function FileManager() {
  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
        {/* Sidebar */}
        <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
          <div className="flex items-center space-x-2 mb-6">
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

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">My Drive</h1>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex items-center">
                <Upload className="w-4 h-4 mr-1" /> Upload
              </Button>
              <Button variant="outline" className="flex items-center">
                <Plus className="w-4 h-4 mr-1" /> New folder
              </Button>
              <Button variant="outline" className="flex items-center">
                <FileIcon className="w-4 h-4 mr-1" /> New file
              </Button>
            </div>
          </div>

          <Table>
            <TableCaption>Total 3 items in the current directory.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
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
                  <Folder className="inline-block w-5 h-5 mr-2" />
                  Directory
                </TableCell>
                <TableCell>64 B</TableCell>
                <TableCell>Nov 22, 2023</TableCell>
                <TableCell>Nov 22, 2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>
                  <FileIcon className="inline-block w-5 h-5 mr-2" />
                  Document.pdf
                </TableCell>
                <TableCell>1.2 MB</TableCell>
                <TableCell>Nov 20, 2023</TableCell>
                <TableCell>Nov 18, 2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>
                  <Image className="inline-block w-5 h-5 mr-2" />
                  Image.png
                </TableCell>
                <TableCell>2.5 MB</TableCell>
                <TableCell>Nov 15, 2023</TableCell>
                <TableCell>Nov 15, 2023</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger>
                <Switch className="mr-2" />
              </TooltipTrigger>
              <TooltipContent>Toggle theme</TooltipContent>
            </Tooltip>
            <span>Theme</span>
          </div>
          <Button variant="ghost" className="flex items-center">
            <ArrowRight className="w-5 h-5 mr-2" /> Sign out
          </Button>
        </footer>
      </div>
    </TooltipProvider>
  );
}
import React from 'react';
import { Folder, File, Upload, Plus, Minus, Download, Edit, Trash, Image, Video, Music, FileText, Archive, ChevronDown, ChevronUp, Sun, Moon, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function FileManager() {
  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
        {/* Sidebar */}
        <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
          <div className="text-gray-900 dark:text-white font-bold mb-4">Turbo Folder</div>
          <div className="space-y-2">
            <Button variant="ghost" className="justify-start w-full">
              <Folder className="w-5 h-5 mr-2" /> My Drive
            </Button>
            <Button variant="ghost" className="justify-start w-full">
              <Trash className="w-5 h-5 mr-2" /> Trash
            </Button>
            <Button variant="ghost" className="justify-start w-full">
              <User className="w-5 h-5 mr-2" /> Users
            </Button>
            <Button variant="ghost" className="justify-start w-full">
              <FileText className="w-5 h-5 mr-2" /> Logs
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Button variant="ghost">
                <ChevronUp className="w-5 h-5" />
              </Button>
              <Button variant="ghost">
                <ChevronDown className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="solid" className="flex items-center">
                <Upload className="w-5 h-5 mr-2" /> Upload
              </Button>
              <Button variant="solid" className="flex items-center">
                <Plus className="w-5 h-5 mr-2" /> New folder
              </Button>
              <Button variant="solid" className="flex items-center">
                <File className="w-5 h-5 mr-2" /> New file
              </Button>
            </div>
          </div>

          <Table>
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
              {/* Example file */}
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Folder className="w-5 h-5 mr-2 inline" />
                  Directory
                </TableCell>
                <TableCell>64 B</TableCell>
                <TableCell>Nov 22, 2023</TableCell>
                <TableCell>Nov 22, 2023</TableCell>
              </TableRow>
              {/* Example file */}
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <File className="w-5 h-5 mr-2 inline" />
                  Document.pdf
                </TableCell>
                <TableCell>1.2 MB</TableCell>
                <TableCell>Nov 20, 2023</TableCell>
                <TableCell>Nov 18, 2023</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Footer */}
        <div className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
          <ToggleGroup type="single" defaultValue="light">
            <ToggleGroupItem value="light" aria-label="Light mode">
              <Sun className="w-5 h-5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Dark mode">
              <Moon className="w-5 h-5" />
            </ToggleGroupItem>
          </ToggleGroup>
          <Button variant="ghost" className="flex items-center">
            <LogOut className="w-5 h-5 mr-2" /> Sign out
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
}
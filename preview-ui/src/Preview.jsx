import React from 'react';
import { Folder, File, Upload, Plus, Minus, Download, Edit, Trash, Image, Video, Music, FileText, Archive, ChevronDown, Sun, Moon } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function FileManager() {
  // This data would typically be fetched from an API, but is hardcoded here for the static prototype.
  const files = [
    { name: 'Directory', size: '64 B', modified: 'Nov 22, 2023 06:26 AM', created: 'Nov 22, 2023 06:26 AM', type: 'folder' },
    { name: 'Facebook_Lite_381.0.0.3.100_apkcombo.com.apk', size: '2.22 MiB', modified: 'Nov 11, 2023 04:38 PM', created: 'Nov 22, 2023 06:22 AM', type: 'apk' },
    { name: 'WhatsApp_Business_2.23.24.18_apkcombo.com.apk', size: '0 B', modified: 'Nov 11, 2023 04:26 PM', created: 'Nov 22, 2023 06:22 AM', type: 'apk' },
  ];

  // File type to icon mapping
  const fileTypeIcons = {
    folder: <Folder />,
    apk: <File />,
    image: <Image />,
    video: <Video />,
    audio: <Music />,
    document: <FileText />,
    archive: <Archive />,
    // Add more file type mappings here
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Turbo Folder</h1>
        <div className="flex items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="mr-2">
                <Sun />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Light Mode</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <Moon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Dark Mode</TooltipContent>
          </Tooltip>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="bg-white dark:bg-gray-900 w-64 p-6 hidden sm:block">
          <nav>
            <ul>
              <li className="mb-2"><Button asChild><a href="#">My Drive</a></Button></li>
              <li className="mb-2"><Button asChild><a href="#">Trash</a></Button></li>
              <li className="mb-2"><Button asChild><a href="#">Users</a></Button></li>
              <li className="mb-2"><Button asChild><a href="#">Logs</a></Button></li>
            </ul>
          </nav>
        </div>
        <main className="flex-1 overflow-y-auto p-4">
          <Table>
            <TableCaption className="text-left text-sm font-semibold text-gray-900 dark:text-white mb-4">My Drive</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Last modified</TableHead>
                <TableHead>Created at</TableHead>
                <TableHead className="w-[150px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>{fileTypeIcons[file.type] || <File />}</TableCell>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.modified}</TableCell>
                  <TableCell>{file.created}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Options">
                          <ChevronDown />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Open</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Move</DropdownMenuItem>
                        <DropdownMenuItem>Copy</DropdownMenuItem>
                        <DropdownMenuItem>Compress</DropdownMenuItem>
                        <DropdownMenuItem>Extract</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
      <footer className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
        <div>
          <Button variant="outline" className="mr-2">
            <Upload className="mr-1" /> Upload
          </Button>
          <Button variant="outline" className="mr-2">
            <Plus className="mr-1" /> New folder
          </Button>
          <Button variant="outline">
            <File className="mr-1" /> New file
          </Button>
        </div>
        <div>
          <Switch id="theme-toggle" className="mr-2" />
          <label htmlFor="theme-toggle" className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</label>
        </div>
      </footer>
    </div>
  );
}
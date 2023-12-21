import React from 'react';
import { Folder, FileText, UploadCloud, Plus, FilePlus, Compress, Copy, Move, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster, useToast } from "@/components/ui/toaster";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";

export default function FileManager() {
  const { toast } = useToast();

  // Dummy data for files and folders
  const files = [
    { name: 'Directory', size: '64 B', modified: 'Nov 22, 2023 06:26 AM', created: 'Nov 22, 2023 06:26 AM', type: 'folder' },
    { name: 'Facebook Lite_381.0.0.3.100_apkcombo.com.apk', size: '2.22 MiB', modified: 'Nov 11, 2023 04:38 PM', created: 'Nov 22, 2023 06:22 AM', type: 'file' },
    { name: 'WhatsApp Business_2.23.24.18_apkcombo.com.apk', size: '0 B', modified: 'Nov 11, 2023 04:26 PM', created: 'Nov 22, 2023 06:22 AM', type: 'file' },
  ];

  // Function to simulate file upload and show toast
  const handleUpload = () => {
    toast({
      title: 'Files uploaded.',
      description: 'Your files have been successfully uploaded.',
    });
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen">
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-semibold">Turbo Folder</h1>
          <div>
            <Button onClick={handleUpload} className="mr-2">
              <UploadCloud className="w-4 h-4 mr-1" /> Upload
            </Button>
            <Button className="mr-2">
              <Plus className="w-4 h-4 mr-1" /> New folder
            </Button>
            <Button>
              <FilePlus className="w-4 h-4 mr-1" /> New file
            </Button>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <div className="bg-white w-64 p-6 hidden sm:block">
            <div className="flex items-center mb-4">
              <Folder className="w-5 h-5 mr-2" /> My Drive
            </div>
            <div className="flex items-center mb-4">
              <Trash2 className="w-5 h-5 mr-2" /> Trash
            </div>
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 mr-2" /> Users
            </div>
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2" /> Logs
            </div>
          </div>
          <main className="flex-1 overflow-y-auto p-4">
            <Table>
              <TableCaption>Total {files.length} items in the current directory.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Last modified</TableCell>
                  <TableCell>Created at</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {files.map((file, index) => (
                  <TableRow key={index}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>
                      {file.type === 'folder' ? <Folder className="inline w-4 h-4 mr-2" /> : <FileText className="inline w-4 h-4 mr-2" />}
                      {file.name}
                    </TableCell>
                    <TableCell>{file.size}</TableCell>
                    <TableCell>{file.modified}</TableCell>
                    <TableCell>{file.created}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </main>
        </div>
        <footer className="bg-white p-4 shadow-md flex justify-between items-center">
          <div>
            <Switch /> Theme
          </div>
          <Button variant="outline">Sign out</Button>
        </footer>
        <Toaster />
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button className="absolute bottom-4 right-4">...</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Open in new tab</ContextMenuItem>
            <ContextMenuItem>Download</ContextMenuItem>
            <ContextMenuItem>Share</ContextMenuItem>
            <ContextMenuItem>Rename</ContextMenuItem>
            <ContextMenuItem>Move</ContextMenuItem>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Compress</ContextMenuItem>
            <ContextMenuItem>Extract</ContextMenuItem>
            <ContextMenuItem>Move to trash</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </TooltipProvider>
  );
}
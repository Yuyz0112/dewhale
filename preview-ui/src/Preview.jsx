import React from 'react';
import { Folder, File, FileText, Image, Music, Video, Archive, Upload, Plus, Download, Trash, Edit, Copy, ArrowRight, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Toaster, useToast } from "@/components/ui/toast";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function FileManager() {
  const { toast } = useToast();

  // Simulate file upload toast
  const handleUpload = () => {
    toast({
      title: "Files uploading...",
      description: "Your files are being uploaded.",
    });
  };

  // File icon selector based on file type
  const fileIcon = (type) => {
    switch (type) {
      case 'folder':
        return <Folder />;
      case 'image':
        return <Image />;
      case 'music':
        return <Music />;
      case 'video':
        return <Video />;
      case 'archive':
        return <Archive />;
      case 'text':
      default:
        return <FileText />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <Toaster />
      <div className="bg-white dark:bg-gray-700 w-64 p-6 hidden sm:block">
        <div className="text-lg font-bold mb-4">Turbo Folder</div>
        <div className="space-y-2">
          <Button variant="ghost" className="justify-start"><Home className="mr-2" />My Drive</Button>
          <Button variant="ghost" className="justify-start"><Trash className="mr-2" />Trash</Button>
          <Button variant="ghost" className="justify-start"><User className="mr-2" />Users</Button>
          <Button variant="ghost" className="justify-start"><File className="mr-2" />Logs</Button>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Button variant="ghost" className="mr-2"><ArrowRight /></Button>
            <Button variant="ghost" className="mr-2"><ArrowRight /></Button>
            <div className="text-lg font-bold">My Drive</div>
          </div>
          <div className="flex items-center">
            <Button onClick={handleUpload} className="mr-2"><Upload className="mr-2" />Upload</Button>
            <Button className="mr-2"><Plus className="mr-2" />New folder</Button>
            <Button className="mr-2"><File className="mr-2" />New file</Button>
          </div>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Last modified</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example file row */}
            <TableRow>
              <TableCell>{fileIcon('folder')} Directory</TableCell>
              <TableCell>64 B</TableCell>
              <TableCell>Nov 22, 2023</TableCell>
              <TableCell>Nov 22, 2023</TableCell>
              <TableCell>
                <ContextMenu>
                  <ContextMenuTrigger asChild>
                    <Button variant="ghost">...</Button>
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
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-700 flex justify-between items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost"><Home /></Button>
            </TooltipTrigger>
            <TooltipContent>Change Theme</TooltipContent>
          </Tooltip>
          <Switch />
          <Button variant="ghost">Sign out</Button>
        </div>
      </div>
    </div>
  );
}
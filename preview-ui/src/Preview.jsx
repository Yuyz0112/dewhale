import { useState } from 'react';
import { Folder, File, FileText, Image, Music, Video, Download, Upload, Plus, Minus, Trash, Settings, ArrowRight, Home } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";

export default function FileManager() {
  const [darkMode, setDarkMode] = useState(false);

  const fileIcon = (extension) => {
    switch (extension) {
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return <Image />;
      case 'mp3':
      case 'wav':
        return <Music />;
      case 'mp4':
      case 'avi':
        return <Video />;
      case 'txt':
      case 'doc':
      case 'docx':
        return <FileText />;
      default:
        return <File />;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className={`bg-white w-64 p-6 hidden sm:block ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
        <div className="flex items-center space-x-2 mb-6">
          <Home className="w-6 h-6" />
          <span className="font-bold text-lg">Turbo Folder</span>
        </div>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Folder className="w-5 h-5 mr-2" /> My Drive
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Trash className="w-5 h-5 mr-2" /> Trash
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <User className="w-5 h-5 mr-2" /> Users
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="w-5 h-5 mr-2" /> Logs
          </Button>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">My Drive</h1>
          <div className="flex space-x-2">
            <Button variant="solid" className="flex items-center">
              <Upload className="w-4 h-4 mr-2" /> Upload
            </Button>
            <Button variant="solid" className="flex items-center">
              <Plus className="w-4 h-4 mr-2" /> New folder
            </Button>
            <Button variant="solid" className="flex items-center">
              <File className="w-4 h-4 mr-2" /> New file
            </Button>
          </div>
        </div>
        <Table>
          <TableCaption>Total 3 items in the current directory.</TableCaption>
          <TableHead>
            <TableRow>
              <TableHeader className="w-[50px]"></TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Size</TableHeader>
              <TableHeader>Last modified</TableHeader>
              <TableHeader>Created at</TableHeader>
              <TableHeader className="w-[150px]"></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example file row */}
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="flex items-center">
                {fileIcon('png')}
                <span className="ml-2">example_image.png</span>
              </TableCell>
              <TableCell>2.2 MB</TableCell>
              <TableCell>Apr 10, 2023</TableCell>
              <TableCell>Apr 10, 2023</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">Actions</Button>
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
            {/* More file rows... */}
          </TableBody>
        </Table>
      </div>
      <footer className={`bg-white p-4 shadow-md ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
                  <Settings className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Theme</TooltipContent>
            </Tooltip>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <Button variant="ghost">Sign out</Button>
        </div>
      </footer>
    </div>
  );
}
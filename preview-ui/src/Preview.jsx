import { Home, Folder, Image, Video, Music, Archive, Upload, Plus, Minus, Trash, User, File, Table } from lucide-react;
import { Button } from @/components/ui/button;
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from @/components/ui/table;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from @/components/ui/tooltip;
import { Switch } from @/components/ui/switch;
import React from 'react';

export default function FileManager() {
  // This is a static prototype, so the theme state is not functional.
  const [darkMode, setDarkMode] = React.useState(false);

  // File icons based on file types
  const fileIcons = {
    folder: <Folder />,
    image: <Image />,
    video: <Video />,
    audio: <Music />,
    document: <Home />,
    archive: <Archive />,
  };

  // Static file data
  const files = [
    { name: 'Photos', type: 'folder', size: '2 GB', modified: '2023-04-01', created: '2023-01-15' },
    { name: 'Vacation.mp4', type: 'video', size: '1.5 GB', modified: '2023-03-21', created: '2023-01-10' },
    { name: 'Favorite Music', type: 'audio', size: '600 MB', modified: '2023-03-15', created: '2023-01-05' },
    { name: 'Project.docx', type: 'document', size: '4 MB', modified: '2023-03-10', created: '2023-01-01' },
    { name: 'Archive.zip', type: 'archive', size: '500 MB', modified: '2023-03-05', created: '2022-12-20' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-semibold">Turbo Folder</h1>
        <div>
          <Button asChild>
            <Upload className="w-5 h-5 mr-2" />
          </Button>
          <Button asChild>
            <Plus className="w-5 h-5 mr-2" />
          </Button>
          <Button asChild>
            <Minus className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="bg-gray-100 w-64 p-4 overflow-y-auto">
          <Button asChild>
            <Folder className="w-5 h-5 mr-2" /> My Drive
          </Button>
          <Button asChild>
            <Trash className="w-5 h-5 mr-2" /> Trash
          </Button>
          <Button asChild>
            <User className="w-5 h-5 mr-2" /> Users
          </Button>
          <Button asChild>
            <File className="w-5 h-5 mr-2" /> Logs
          </Button>
        </div>
        <main className="flex-1 overflow-y-auto p-4">
          <Table>
            <TableCaption>A list of your files and folders.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Last modified</TableHead>
                <TableHead>Created at</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {fileIcons[file.type]}
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </TooltipTrigger>
            <TooltipContent>Toggle Theme</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button asChild>
          <Minus className="w-5 h-5" /> Sign out
        </Button>
      </footer>
    </div>
  );
}
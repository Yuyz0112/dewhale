import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useEffect, useState } from 'react';

export default function TerminalUI() {
  const [logs, setLogs] = useState([
    "Creating a new Next.js app in /my-next-app.",
    "Installing react, react-dom, and next using npm...",
    "",
    "> core-js@3.8.3 postinstall /my-next-app/node_modules/core-js",
    "> node -e \"try{require('./postinstall')}catch(e){}\"",
    "",
    "added 123 packages, and audited 124 packages in 9s",
    "",
    "11 packages are looking for funding",
    "  run `npm fund` for details",
    "",
    "found 0 vulnerabilities",
    "Next.js has successfully been installed.",
  ]);
  const [installing, setInstalling] = useState(true);

  useEffect(() => {
    if (installing) {
      const interval = setInterval(() => {
        setLogs((prevLogs) => [
          ...prevLogs,
          `Installing additional packages... ${Math.floor(Math.random() * 100)}%`,
        ]);
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
        setInstalling(false);
        setLogs((prevLogs) => [
          ...prevLogs,
          "Installation complete! Run 'npm run dev' to start your application.",
        ]);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [installing]);

  return (
    (<div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between bg-gray-800 p-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6" />
          <h1 className="text-lg font-mono">Terminal - my-next-app</h1>
        </div>
        <Button variant="outline" className="text-white border-white">
          {installing ? 'Installing...' : 'Restart Install'}
        </Button>
      </header>
      <main className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full p-4 font-mono text-sm">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </ScrollArea>
      </main>
      <footer className="bg-gray-800 p-4">
        <Alert>
          <AlertTitle>Next.js Installation</AlertTitle>
          <AlertDescription>
            {installing
              ? 'Installation is in progress...'
              : 'Installation completed successfully!'}
          </AlertDescription>
        </Alert>
      </footer>
    </div>)
  );
}
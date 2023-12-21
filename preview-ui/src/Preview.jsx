import { TerminalIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

export default function TerminalUI() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <header className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-2 text-white">
          <TerminalIcon className="w-6 h-6" />
          <span className="font-mono text-lg">iTerm2</span>
        </div>
        <div className="space-x-1">
          <button className="w-3 h-3 rounded-full bg-red-500 focus:outline-none" />
          <button className="w-3 h-3 rounded-full bg-yellow-500 focus:outline-none" />
          <button className="w-3 h-3 rounded-full bg-green-500 focus:outline-none" />
        </div>
      </header>
      <ScrollArea className="flex-1 p-4 font-mono text-white">
        <p>Last login: Tue Sep 21 21:30:00 on ttys000</p>
        <p>
          <span className="text-green-400">user@MacBook-Pro</span>
          <span className="text-blue-400"> ~ %</span>
        </p>
        {/* Static content to simulate terminal output */}
        <p className="text-gray-500">drwxr-xr-x  10 user  staff   320B Sep 21 21:30 .</p>
        <p className="text-gray-500">drwxr-xr-x   6 user  staff   192B Sep 21 21:29 ..</p>
        <p className="text-gray-500">-rw-r--r--@  1 user  staff   6.0K Sep 21 21:29 .DS_Store</p>
        <p className="text-gray-500">drwxr-xr-x  13 user  staff   416B Sep 21 21:29 .git</p>
        <p className="text-gray-500">-rw-r--r--   1 user  staff   1.0K Sep 21 21:29 README.md</p>
        {/* End of static content */}
      </ScrollArea>
      <div className="p-4 bg-gray-800">
        <Input className="w-full bg-gray-900 text-white" placeholder="Type your command..." />
      </div>
    </div>
  );
}
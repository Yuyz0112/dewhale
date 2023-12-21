import { TerminalIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TerminalUI() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex flex-col w-full">
        <header className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <TerminalIcon className="w-6 h-6" />
            <h1 className="text-lg font-mono">iterm2</h1>
          </div>
          <div className="space-x-2">
            <button className="w-3 h-3 bg-red-500 rounded-full border border-gray-600"></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full border border-gray-600"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full border border-gray-600"></button>
          </div>
        </header>
        <ScrollArea className="flex-1 p-4 font-mono text-sm overflow-auto">
          <p className="whitespace-pre-wrap">
            {`> vite build
vite v2.6.4 building for production...
✓ 102 modules transformed.
dist/assets/favicon.17e50649.svg   1.49 KiB
dist/assets/logo.ecc203fb.svg      2.61 KiB
dist/index.html                    0.52 KiB
dist/assets/index.0e53e684.css     0.76 KiB / gzip: 0.40 KiB
dist/assets/index.217c35ff.js      3.47 KiB / gzip: 1.45 KiB
dist/assets/vendor.5c0531e2.js     129.17 KiB / gzip: 41.82 KiB`}
          </p>
        </ScrollArea>
      </div>
    </div>
  );
}
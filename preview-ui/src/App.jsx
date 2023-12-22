import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Preview from "./Preview.jsx";
import PreviewStr from "./Preview.jsx?raw";

export default function Home() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [copied, setCopied] = useState(false);

  return (
    <main className="vx-dev-wrapper relative">
      <div className="flex justify-end p-1">
        <Button onClick={() => setShowCanvas((prev) => !prev)}>
          {showCanvas ? "Code" : "Canvas"}
        </Button>
      </div>
      {showCanvas ? (
        <div className="rounded-lg border border-black/5 bg-white shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.04)] mx-1 p-1">
          <ErrorBoundary>
            <Preview />
          </ErrorBoundary>
        </div>
      ) : (
        <pre className="bg-gray-100 mx-1 p-1 rounded overflow-auto relative text-xs">
          <CopyToClipboard
            text={PreviewStr}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <Button variant="outline" className="mb-2 absolute top-1 right-1">
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </CopyToClipboard>
          <code>{PreviewStr}</code>
        </pre>
      )}
    </main>
  );
}

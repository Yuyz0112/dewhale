import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@/components/ui/button.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
// @ts-ignore
import previewURL from "url:./Preview.jsx";
import { getHighlighter, setCDN } from "shiki";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { generateRoutes } from "./lib/utils.js";
// @ts-ignore
import * as pages from "./pages/**/*.jsx";

const router = createHashRouter(
  [...generateRoutes(pages)].map(({ path, component: Tag }) => ({
    path,
    element: <Tag />,
  }))
);

export default function Home() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [copied, setCopied] = useState(false);
  const [sourceCode, setSourceCode] = useState('')
  const [code, setCode] = useState("");

  async function setCodeHighlighter() {
    setCDN("https://cdn.jsdelivr.net/npm/shiki");

    try {
      const { codeToHtml } = await getHighlighter({
        theme: "one-dark-pro",
        langs: ["jsx"],
      });
      const response = await fetch(previewURL);
      const previewStr = await response.text();

      setSourceCode(previewStr)

      const html = codeToHtml(previewStr, { lang: "jsx" });

      setCode(html);
    } catch (error) {
      setCode(error);
    }
  }

  useEffect(() => {
    setCodeHighlighter();
  }, []);

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
            <RouterProvider router={router} />
          </ErrorBoundary>
        </div>
      ) : (
        <pre className="bg-gray-100 mx-1 p-1 rounded overflow-auto relative text-xs">
          <CopyToClipboard
            text={sourceCode}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <Button variant="outline" className="mb-2 absolute top-1 right-1">
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </CopyToClipboard>
          <div dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      )}
    </main>
  );
}

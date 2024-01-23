import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Preview from "./Preview.jsx";
import previewStr from "./Preview.jsx?raw";
import { getHighlighter, setCDN } from "shiki";

export default function Home() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [copied, setCopied] = useState(false);
  const [lightCode, setLightCode] = useState("");
  const [darkCode, setDarkCode] = useState("");

  function setCodeHighlighter() {
    setCDN("https://cdn.jsdelivr.net/npm/shiki");
    getHighlighter({ themes: ["github-light", "github-dark"], langs: ["jsx"] })
      .then((h) => {
        const ligitHtmlCode = h.codeToHtml(previewStr, {
          lang: "jsx",
          theme: "github-light",
        });
        setLightCode(ligitHtmlCode);
        const darkHtmlCode = h.codeToHtml(previewStr, {
          lang: "jsx",
          theme: "github-dark",
        });
        setDarkCode(darkHtmlCode);
      })
      .catch((error) => {
        setLightCode(error);
        setDarkCode(error);
      });
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
            <Preview />
          </ErrorBoundary>
        </div>
      ) : (
        <pre className="bg-gray-100 mx-1 p-1 rounded relative text-xs">
          <CopyToClipboard
            text={previewStr}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <Button variant="outline" className="mb-2 absolute top-1 right-1">
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </CopyToClipboard>
          <div dangerouslySetInnerHTML={{ __html: lightCode }}></div>
          <div dangerouslySetInnerHTML={{ __html: darkCode }}></div>
        </pre>
      )}
    </main>
  );
}

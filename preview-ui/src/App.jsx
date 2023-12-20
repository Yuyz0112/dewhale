import { useState } from "react";
import { Button } from "@/components/ui/button";
import Preview from "./Preview.jsx";
import PreviewStr from "./Preview.jsx?raw";

export default function Home() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Button onClick={() => setShow((prev) => !prev)}>Click me</Button>
      {show ? (
        <Preview />
      ) : (
        <pre>
          <code>{PreviewStr}</code>
        </pre>
      )}
    </div>
  );
}

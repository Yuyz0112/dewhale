import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import React from 'react';

export default function ASTExplorer() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4">
        <Textarea className="h-full w-full p-2 border rounded" defaultValue={`/**
* Paste or drop some JavaScript here and explore
* the syntax tree created by chosen parser.
* You can use all the cool new features from ES6
* and even more. Enjoy!
*/

let tips = [
  "Click on any AST node with a '+' to expand it",
  "Hovering over a node highlights the corresponding location in the source code",
  "Shift click on an AST node to expand the whole subtree"
];

function printTips() {
  tips.forEach((tip, i) => console.log(\`Tip \${i}: \${tip}\`));
}`} />
      </div>
      <div className="w-1/2 p-4">
        <ScrollArea className="h-full w-full border rounded">
          <Collapsible>
            <CollapsibleTrigger className="p-2 cursor-pointer hover:bg-gray-100">ArrayExpression</CollapsibleTrigger>
            <CollapsibleContent className="pl-4">
              <Collapsible>
                <CollapsibleTrigger className="p-2 cursor-pointer hover:bg-gray-100">StringLiteral</CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  <p className="p-2">"Click on any AST node with a '+' to expand it"</p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="p-2 cursor-pointer hover:bg-gray-100">StringLiteral</CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  <p className="p-2">"Hovering over a node highlights the corresponding location in the source code"</p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="p-2 cursor-pointer hover:bg-gray-100">StringLiteral</CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  <p className="p-2">"Shift click on an AST node to expand the whole subtree"</p>
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>
        </ScrollArea>
      </div>
    </div>
  );
}
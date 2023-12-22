import { Home } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

export default function ASTExplorer() {
  const [code, setCode] = useState(`let tips = [
  "Click on any AST node with a '+' to expand it",
  "Hovering over a node highlights the corresponding location in the source code",
  "Shift click on an AST node to expand the whole subtree"
];

function printTips() {
  tips.forEach((tip, i) => console.log(\`Tip \${i}: \${tip}\`));
}`);

  const astExample = {
    type: 'Program',
    start: 0,
    end: 193,
    body: [
      {
        type: 'VariableDeclaration',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: { type: 'Identifier', name: 'tips' },
            init: {
              type: 'ArrayExpression',
              elements: [
                { type: 'StringLiteral', value: "Click on any AST node with a '+' to expand it" },
                { type: 'StringLiteral', value: 'Hovering over a node highlights the corresponding location in the source code' },
                { type: 'StringLiteral', value: 'Shift click on an AST node to expand the whole subtree' },
              ],
            },
          },
        ],
        kind: 'let',
      },
      // More AST nodes would go here...
    ],
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-black p-4">
        <h1 className="text-white">AST Explorer</h1>
      </header>
      <main className="flex-1 flex overflow-hidden">
        <Tabs defaultValue="code" className="flex-1 flex">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="code" className="text-white">Source Code</TabsTrigger>
            <TabsTrigger value="ast" className="text-white">AST Tree</TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="flex-1 p-4">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-gray-900 text-white p-4"
            />
          </TabsContent>
          <TabsContent value="ast" className="flex-1 p-4">
            <ScrollArea className="h-full w-full bg-gray-900 text-white p-4">
              <pre>{JSON.stringify(astExample, null, 2)}</pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
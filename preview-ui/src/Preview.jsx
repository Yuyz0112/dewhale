import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export default function ASTExplorer() {
  const [parser, setParser] = useState('babel');

  return (
    (<div className="flex flex-col h-screen">
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <Button variant="outline">Snippet</Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue>{parser}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="babel" onSelect={() => setParser('babel')}>Babel</SelectItem>
              <SelectItem value="typescript" onSelect={() => setParser('typescript')}>TypeScript</SelectItem>
              <SelectItem value="flow" onSelect={() => setParser('flow')}>Flow</SelectItem>
              <SelectItem value="espree" onSelect={() => setParser('espree')}>Espree</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Transform</Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Tree</Button>
          <Button variant="outline">JSON</Button>
        </div>
      </header>
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 p-4">
          <Textarea placeholder="Paste or drop some JavaScript here and explore the syntax tree created by chosen parser." className="h-full w-full" />
        </div>
        <Separator orientation="vertical" className="bg-gray-300" />
        <div className="flex-1 p-4">
          <Home ratio={1}>
            <div className="bg-gray-200 rounded-md flex justify-center items-center">
              {/* Placeholder for AST visualization */}
              <span>AST Tree Visualization</span>
            </div>
          </AspectRatio>
        </div>
      </main>
    </div>)
  );
}
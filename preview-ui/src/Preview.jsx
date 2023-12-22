import { Home, Settings, Upload, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ASTExplorer() {
  const [code, setCode] = useState('// Paste or drop some JavaScript here and explore the AST...');
  const [ast, setAst] = useState(null); // Placeholder for AST data

  // Placeholder function to parse code to AST
  const parseCodeToAST = (code) => {
    // This would be replaced with actual parsing logic
    setAst({ /* AST data structure */ });
  };

  return (
    (<div className="flex flex-col h-screen">
      <div className="bg-black p-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="text-white">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white" onClick={() => parseCodeToAST(code)}>
            <Upload className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="text-white">
            <Download className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-1/2 p-4">
          <Textarea
            className="h-full w-full"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="w-1/2 p-4 bg-gray-100">
          {/* Placeholder for AST visualization */}
          {ast ? (
            <Home data={ast} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">AST will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </div>)
  );
}
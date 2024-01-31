import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Clipboard } from 'lucide-react';
import { useState } from 'react';

const repos = [
  { id: 'repo1', name: 'Repository 1' },
  { id: 'repo2', name: 'Repository 2' },
];

const snippetTypes = [
  { id: 'html', name: 'HTML', schema: ['title', 'body'] },
  { id: 'css', name: 'CSS', schema: ['selector', 'properties'] },
];

const highlighter = shiki.getHighlighter({ theme: 'nord' });

function SnippetManager() {
  const [selectedRepo, setSelectedRepo] = useState('');
  const [selectedSnippetType, setSelectedSnippetType] = useState('');
  const [snippetData, setSnippetData] = useState({});
  const [snippets, setSnippets] = useState([]);

  const handleCreateSnippet = () => {
    const snippetType = snippetTypes.find(type => type.id === selectedSnippetType);
    const code = snippetType.schema.map(field => snippetData[field]).join('\n');
    const highlightedCode = highlighter.codeToHtml(code, selectedSnippetType);

    setSnippets([
      ...snippets,
      {
        title: snippetData.title || 'Untitled Snippet',
        code: highlightedCode,
      },
    ]);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  const renderInputForm = () => {
    const snippetType = snippetTypes.find(type => type.id === selectedSnippetType);
    if (!snippetType) return null;

    return snippetType.schema.map((field) => (
      <div key={field} className="mb-4">
        <Label htmlFor={field}>{field}</Label>
        <Input
          id={field}
          onChange={(e) => setSnippetData({ ...snippetData, [field]: e.target.value })}
          className="mt-1"
        />
      </div>
    ));
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Snippet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="repo">Repository</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select repository" />
              </SelectTrigger>
              <SelectContent>
                {repos.map((repo) => (
                  <SelectItem
                    key={repo.id}
                    value={repo.id}
                    onSelect={() => setSelectedRepo(repo.id)}
                  >
                    {repo.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <Label htmlFor="snippetType">Snippet Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select snippet type" />
              </SelectTrigger>
              <SelectContent>
                {snippetTypes.map((type) => (
                  <SelectItem
                    key={type.id}
                    value={type.id}
                    onSelect={() => setSelectedSnippetType(type.id)}
                  >
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {renderInputForm()}
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreateSnippet}>Create</Button>
        </CardFooter>
      </Card>
      <div className="mt-6">
        {snippets.map((snippet, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle>{snippet.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea readOnly value={snippet.code} className="mb-4" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={() => handleCopyCode(snippet.code)}>
                      <Clipboard className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy to clipboard</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SnippetManager;
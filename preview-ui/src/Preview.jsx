import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Bold, Italic, Code, Link, List, ListOrdered, Image, FileText, Terminal, AtSign, ArrowLeft, ArrowRight, Maximize, Minimize } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const MarkdownEditor = () => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
        <div className="flex space-x-2">
          <Button variant="ghost">Write</Button>
          <Button variant="ghost">Preview</Button>
        </div>
        <div className="flex space-x-1">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Bold className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Italic className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Code className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Insert code</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Link className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Insert link</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><List className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Unordered list</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><ListOrdered className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Ordered list</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Image className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Insert image</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><FileText className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Insert file</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Terminal className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Insert code block</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><AtSign className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Mention someone</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><ArrowLeft className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Undo</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><ArrowRight className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Redo</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Maximize className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Maximize editor</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost"><Minimize className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Minimize editor</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <Textarea className="w-full h-64 p-4 resize-none" placeholder="Describe your code generation needs, including images or text." />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-t">
        <span className="text-sm text-gray-600">Markdown is supported</span>
        <Button variant="ghost" className="text-sm">Paste, drop, or click to add files</Button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
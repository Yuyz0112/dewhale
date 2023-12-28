import { Button } from '@/components/ui/button';
import { UploadCloud, Zap, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React from 'react';

const generateData = () => {
  const nodes = Array.from({ length: 10 }, (_, i) => ({
    id: `node-${i}`,
    label: `Node ${i}`,
    color: `hsl(${Math.random() * 360}, 70%, 50%)`,
  }));

  const links = Array.from({ length: 15 }, () => ({
    source: `node-${Math.floor(Math.random() * 10)}`,
    target: `node-${Math.floor(Math.random() * 10)}`,
    label: `Link ${Math.floor(Math.random() * 10)}`,
  }));

  return { nodes, links };
};

const NetworkVisualizationPage = () => {
  const { nodes, links } = generateData();

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex space-x-4">
          <Button variant="outline">
            <UploadCloud className="w-5 h-5 mr-2" />
            Upload Network Info
          </Button>
          <Button variant="outline">
            <Zap className="w-5 h-5 mr-2" />
            Test
          </Button>
        </div>
        <Button variant="outline">
          <User className="w-5 h-5 mr-2" />
          Login
        </Button>
      </header>
      <main className="flex-1 overflow-hidden p-4">
        <div className="w-full h-full bg-white rounded shadow relative">
          {nodes.map(node => (
            <div
              key={node.id}
              className="absolute bg-blue-500 rounded-full text-white flex items-center justify-center"
              style={{
                width: '20px',
                height: '20px',
                transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
              }}
              title={node.label}
            >
              {node.label}
            </div>
          ))}
          {links.map((link, index) => (
            <svg key={index} className="absolute w-full h-full top-0 left-0">
              <line
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="black"
              />
              <text
                x={`${(Math.random() + Math.random()) / 2 * 100}%`}
                y={`${(Math.random() + Math.random()) / 2 * 100}%`}
                fill="black"
              >
                {link.label}
              </text>
            </svg>
          ))}
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This visualization tool helps users to understand the network topology by providing an interactive graphical representation of the nodes and their connections.</p>
          </CardContent>
          <CardFooter>
            <p>© 2021 Network Visualization Inc.</p>
          </CardFooter>
        </Card>
      </footer>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">View Node Info</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Node Information</DialogTitle>
          </DialogHeader>
          <p>Details about the node will be displayed here.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NetworkVisualizationPage;
import { Button } from '@/components/ui/button';
import { UploadCloud, Zap, User } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react';

const generateData = () => {
  const nodes = Array.from({ length: 10 }, (_, i) => ({
    id: `node-${i}`,
    label: `Node ${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
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
            <Dialog key={node.id}>
              <DialogTrigger asChild>
                <div
                  className="absolute bg-blue-500 rounded-full text-white flex items-center justify-center cursor-pointer"
                  style={{
                    width: '20px',
                    height: '20px',
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                  title={node.label}
                >
                  {node.label}
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{node.label}</DialogTitle>
                </DialogHeader>
                <p>Details about {node.label} will be displayed here.</p>
              </DialogContent>
            </Dialog>
          ))}
          {links.map((link, index) => {
            const sourceNode = nodes.find(node => node.id === link.source);
            const targetNode = nodes.find(node => node.id === link.target);
            return (
              <div key={index} className="absolute w-full h-full top-0 left-0">
                <div
                  className="absolute bg-black"
                  style={{
                    width: '2px',
                    height: `${Math.sqrt(Math.pow(targetNode.y - sourceNode.y, 2) + Math.pow(targetNode.x - sourceNode.x, 2))}%`,
                    backgroundColor: 'black',
                    transform: `rotate(${Math.atan2(targetNode.y - sourceNode.y, targetNode.x - sourceNode.x) * (180 / Math.PI)}deg)`,
                    transformOrigin: '0 0',
                    left: `${sourceNode.x}%`,
                    top: `${sourceNode.y}%`,
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    left: `${(sourceNode.x + targetNode.x) / 2}%`,
                    top: `${(sourceNode.y + targetNode.y) / 2}%`,
                  }}
                >
                  {link.label}
                </div>
              </div>
            );
          })}
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
    </div>
  );
};

export default NetworkVisualizationPage;
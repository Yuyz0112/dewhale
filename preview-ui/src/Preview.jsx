import { Button } from '@/components/ui/button';
import { UploadCloud, Zap, User, Home } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React from 'react';

const generateData = () => {
  const nodes = Array.from({ length: 10 }, (_, i) => ({
    id: `node-${i}`,
    color: `hsl(${Math.random() * 360}, 70%, 50%)`,
  }));

  const links = Array.from({ length: 15 }, () => ({
    source: `node-${Math.floor(Math.random() * 10)}`,
    target: `node-${Math.floor(Math.random() * 10)}`,
  }));

  return { nodes, links };
};

const NetworkVisualizationPage = () => {
  const data = generateData();

  return (
    (<div className="flex flex-col h-screen">
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
        <div className="w-full h-full bg-white rounded shadow">
          <div
            nodes={data.nodes}
            links={data.links}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            repulsivity={50}
            iterations={60}
            nodeColor={node => node.color}
            linkDistance={link => 30}
            nodeSize={node => 5}
            nodeBorderWidth={1}
            nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
            linkThickness={link => 2}
            motionStiffness={160}
            motionDamping={12}
          />
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
    </div>)
  );
};

export default NetworkVisualizationPage;
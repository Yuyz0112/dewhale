import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, X, Settings } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';

const deployments = [
  { id: 1, name: 'Frontend', replicas: 3, status: 'Running', image: 'nginx:latest', age: '34m' },
  { id: 2, name: 'Backend', replicas: 2, status: 'Updating', image: 'node:alpine', age: '1h' },
  { id: 3, name: 'Database', replicas: 1, status: 'Running', image: 'mysql:5.7', age: '2d' },
];

export default function KubernetesClusterDashboard() {
  const [selectedDeployment, setSelectedDeployment] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDeploymentClick = (deployment) => {
    setSelectedDeployment(deployment);
    setSidebarOpen(true);
  };

  return (
    (<div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <Table>
          <TableCaption>Deployment List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Replicas</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deployments.map((deployment) => (
              <TableRow key={deployment.id}>
                <TableCell>{deployment.name}</TableCell>
                <TableCell>{deployment.replicas}</TableCell>
                <TableCell>
                  <Badge variant={deployment.status === 'Running' ? 'solid' : 'outline'}>
                    {deployment.status}
                  </Badge>
                </TableCell>
                <TableCell>{deployment.image}</TableCell>
                <TableCell>{deployment.age}</TableCell>
                <TableCell>
                  <Button variant="outline" onClick={() => handleDeploymentClick(deployment)}>
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Home open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <Home className="hidden">
          <ChevronRight />
        </Home>
        <Home className="w-80 bg-white p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Deployment Details</h2>
            <Home onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Home>
          </div>
          {selectedDeployment && (
            <div className="mt-4">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`https://unsplash.it/36/36?image=${selectedDeployment.id}`} />
                  <AvatarFallback>{selectedDeployment.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{selectedDeployment.name}</h3>
              </div>
              <div className="mt-2">
                <p><strong>Replicas:</strong> {selectedDeployment.replicas}</p>
                <p><strong>Status:</strong> {selectedDeployment.status}</p>
                <p><strong>Image:</strong> {selectedDeployment.image}</p>
                <p><strong>Age:</strong> {selectedDeployment.age}</p>
              </div>
              <div className="mt-4">
                <Button variant="solid" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Deployment
                </Button>
              </div>
            </div>
          )}
        </Home>
      </Home>
    </div>)
  );
}
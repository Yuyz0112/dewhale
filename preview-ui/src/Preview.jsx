import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Server, Database, Layers, Settings, Home } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useState } from 'react';

export default function K8sClusterDashboard() {
  const [selectedNamespace, setSelectedNamespace] = useState('default');
  const [selectedDeployment, setSelectedDeployment] = useState(null);

  const deployments = [
    { name: 'frontend', replicas: 2, available: 2, updated: '3 minutes ago' },
    { name: 'backend', replicas: 3, available: 3, updated: '10 minutes ago' },
    { name: 'database', replicas: 1, available: 1, updated: '1 hour ago' },
  ];

  const namespaces = ['default', 'production', 'development', 'staging'];

  return (
    (<div className="flex h-screen bg-gray-100">
      <NavigationMenu>
        <NavigationMenuList className="bg-white w-64 p-6 hidden sm:block">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Server className="inline-block w-5 h-5 mr-2" /> Deployments
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Database className="inline-block w-5 h-5 mr-2" /> StatefulSets
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Layers className="inline-block w-5 h-5 mr-2" /> Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Settings className="inline-block w-5 h-5 mr-2" /> ConfigMaps
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1 flex flex-col">
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-semibold">Kubernetes Cluster Dashboard</h1>
          <Select className="w-40">
            <SelectTrigger>
              <SelectValue>{selectedNamespace}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {namespaces.map((namespace) => (
                <SelectItem
                  key={namespace}
                  value={namespace}
                  onSelect={() => setSelectedNamespace(namespace)}
                >
                  {namespace}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Replicas</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deployments.map((deployment) => (
                <TableRow key={deployment.name}>
                  <TableCell>{deployment.name}</TableCell>
                  <TableCell>{deployment.replicas}</TableCell>
                  <TableCell>{deployment.available}</TableCell>
                  <TableCell>{deployment.updated}</TableCell>
                  <TableCell>
                    <Sheet>
                      <SheetTrigger asChild>
                        <button
                          className="text-blue-600 hover:underline"
                          onClick={() => setSelectedDeployment(deployment)}
                        >
                          View Details
                        </button>
                      </SheetTrigger>
                    </Sheet>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
      {selectedDeployment && (
        <div>
          <SheetContent className="w-80 bg-white p-6">
            <SheetHeader>
              <SheetTitle>{selectedDeployment.name}</SheetTitle>
              <SheetDescription>
                Detailed information about the deployment.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <p><strong>Replicas:</strong> {selectedDeployment.replicas}</p>
              <p><strong>Available:</strong> {selectedDeployment.available}</p>
              <p><strong>Last Updated:</strong> {selectedDeployment.updated}</p>
            </div>
          </SheetContent>
        </div>
      )}
    </div>)
  );
}
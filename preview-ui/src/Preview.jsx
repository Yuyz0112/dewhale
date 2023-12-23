import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import React from 'react';

export default function K8sClusterDashboard() {
  const deployments = [
    { name: "frontend", replicas: 3, available: 3, updated: "10m ago" },
    { name: "backend", replicas: 2, available: 2, updated: "20m ago" },
    { name: "database", replicas: 1, available: 1, updated: "30m ago" },
  ];

  const [selectedDeployment, setSelectedDeployment] = React.useState(null);

  return (
    <div className="flex h-screen bg-white">
      <NavigationMenu as="nav" className="bg-blue-50 w-64 p-6 hidden sm:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Deployments</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>View Deployments</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>View Services</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pods</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>View Pods</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1 flex flex-col">
        <header className="bg-blue-100 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-700">Kubernetes Cluster Dashboard</h1>
          <Select className="w-40">
            <SelectTrigger>
              <SelectValue placeholder="Select Namespace" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="production">Production</SelectItem>
              <SelectItem value="development">Development</SelectItem>
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
              {deployments.map((deployment, index) => (
                <TableRow key={index}>
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
          {selectedDeployment && (
            <Sheet open={selectedDeployment !== null} onOpenChange={setSelectedDeployment}>
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
            </Sheet>
          )}
        </main>
      </div>
    </div>
  );
}
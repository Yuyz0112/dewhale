import { useState } from 'react';
import { Home, User, Settings, Bell, File, Calendar, Printer } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

export default function EcommerceDashboard() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                as="button"
                className={`flex items-center p-2 rounded-md hover:bg-gray-200 ${
                  selectedMenuItem === 'dashboard' ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedMenuItem('dashboard')}
              >
                <Home className="mr-2" />
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                as="button"
                className={`flex items-center p-2 rounded-md hover:bg-gray-200 ${
                  selectedMenuItem === 'orders' ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedMenuItem('orders')}
              >
                <File className="mr-2" />
                Orders
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                as="button"
                className={`flex items-center p-2 rounded-md hover:bg-gray-200 ${
                  selectedMenuItem === 'calendar' ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedMenuItem('calendar')}
              >
                <Calendar className="mr-2" />
                Calendar
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                as="button"
                className={`flex items-center p-2 rounded-md hover:bg-gray-200 ${
                  selectedMenuItem === 'settings' ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedMenuItem('settings')}
              >
                <Settings className="mr-2" />
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
      <main className="flex-1 p-6">
        <div className="bg-white rounded shadow p-6">
          <Table>
            <TableCaption>Recent Orders</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#001</TableCell>
                <TableCell>2023-03-10</TableCell>
                <TableCell>Shipped</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <Printer className="cursor-pointer hover:text-blue-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#002</TableCell>
                <TableCell>2023-03-11</TableCell>
                <TableCell>Processing</TableCell>
                <TableCell>$120.00</TableCell>
                <TableCell>
                  <Printer className="cursor-pointer hover:text-blue-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#003</TableCell>
                <TableCell>2023-03-12</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$180.00</TableCell>
                <TableCell>
                  <Printer className="cursor-pointer hover:text-blue-500" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
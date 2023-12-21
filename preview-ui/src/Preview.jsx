import { useState } from 'react';
import { ArrowRight, Home, User, Settings, Clock, Calendar, File, Trash } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EcommerceDashboard() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                as="button"
                className={selectedMenu === 'dashboard' ? 'text-blue-500' : ''}
                onClick={() => setSelectedMenu('dashboard')}
              >
                <Home className="inline-block w-5 h-5 mr-2" /> Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                as="button"
                className={selectedMenu === 'orders' ? 'text-blue-500' : ''}
                onClick={() => setSelectedMenu('orders')}
              >
                <File className="inline-block w-5 h-5 mr-2" /> Orders
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                as="button"
                className={selectedMenu === 'settings' ? 'text-blue-500' : ''}
                onClick={() => setSelectedMenu('settings')}
              >
                <Settings className="inline-block w-5 h-5 mr-2" /> Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
      <main className="flex-1 p-6">
        <div className="bg-white rounded shadow p-6">
          <h1 className="text-xl font-bold mb-4">Recent Orders</h1>
          <Table>
            <TableCaption>A list of your recent orders.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ORD12345</TableCell>
                <TableCell>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  2023-03-15
                </TableCell>
                <TableCell>Shipped</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
                <TableCell className="text-right">
                  <Trash className="inline-block w-4 h-4 mr-2 cursor-pointer" />
                  <ArrowRight className="inline-block w-4 h-4 cursor-pointer" />
                </TableCell>
              </TableRow>
              {/* Repeat TableRow for more orders */}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
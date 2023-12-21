import { useState } from 'react';
import { Home, User, Settings, ShoppingBag, CreditCard, Package, BarChart2, FileText, LogOut } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";

export default function EcommerceDashboard() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 hidden sm:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={selectedMenu === 'dashboard' ? 'text-blue-500' : ''} onClick={() => setSelectedMenu('dashboard')}>
                <Home className="inline-block mr-2" /> Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={selectedMenu === 'orders' ? 'text-blue-500' : ''} onClick={() => setSelectedMenu('orders')}>
                <ShoppingBag className="inline-block mr-2" /> Orders
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={selectedMenu === 'products' ? 'text-blue-500' : ''} onClick={() => setSelectedMenu('products')}>
                <Package className="inline-block mr-2" /> Products
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={selectedMenu === 'customers' ? 'text-blue-500' : ''} onClick={() => setSelectedMenu('customers')}>
                <User className="inline-block mr-2" /> Customers
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={selectedMenu === 'reports' ? 'text-blue-500' : ''} onClick={() => setSelectedMenu('reports')}>
                <BarChart2 className="inline-block mr-2" /> Reports
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={selectedMenu === 'integrations' ? 'text-blue-500' : ''} onClick={() => setSelectedMenu('integrations')}>
                <Settings className="inline-block mr-2" /> Integrations
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="mt-6">
          <NavigationMenuLink>
            <LogOut className="inline-block mr-2" /> Logout
          </NavigationMenuLink>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <div className="bg-white rounded shadow p-6">
          <h1 className="text-xl font-bold mb-4">Recent Orders</h1>
          <Table>
            <TableCaption>A list of your recent orders.</TableCaption>
            <TableHead>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ORD001</TableCell>
                <TableCell>2023-03-15</TableCell>
                <TableCell>Shipped</TableCell>
                <TableCell className="text-right">$199.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ORD002</TableCell>
                <TableCell>2023-03-14</TableCell>
                <TableCell>Processing</TableCell>
                <TableCell className="text-right">$299.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ORD003</TableCell>
                <TableCell>2023-03-13</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell className="text-right">$399.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
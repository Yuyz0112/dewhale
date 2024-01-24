import { Button } from '@/components/ui/button';
import { Home, MapPin, Clock, CreditCard, CheckCircle } from 'lucide-react';
import { CalendarIcon, Calendar } from '@/components/ui/calendar';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import React from 'react';

const ParkingBookingApp = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Parking Space Booker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost"><Home className="w-5 h-5" /></Button></li>
            <li><Button variant="ghost"><CalendarIcon className="w-5 h-5" /></Button></li>
            <li><Button variant="ghost"><MapPin className="w-5 h-5" /></Button></li>
            <li><Button variant="ghost"><Clock className="w-5 h-5" /></Button></li>
            <li><Button variant="ghost"><CreditCard className="w-5 h-5" /></Button></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <Card>
          <CardHeader>
            <CardTitle>Book Your Parking Space</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown">Downtown</SelectItem>
                    <SelectItem value="suburbs">Suburbs</SelectItem>
                    <SelectItem value="airport">Airport</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Calendar mode="single" selected={new Date()} onSelect={() => {}} className="rounded-md border" />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input type="time" id="time" className="w-full" />
              </div>
              <div>
                <Label htmlFor="duration">Duration (hours)</Label>
                <Input type="number" id="duration" className="w-full" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="ml-2">I agree to the terms and conditions</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="solid" className="w-full md:w-auto">Book Now</Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm">© 2023 Parking Space Booker. All rights reserved.</p>
      </footer>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="hidden">Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Booking Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
              Your parking space has been successfully booked.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline">Close</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="solid"><CheckCircle className="w-5 h-5 mr-2" />Confirmed</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ParkingBookingApp;
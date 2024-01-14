import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Phone, Mail } from 'lucide-react';
import React from 'react';

export default function DarkThemeProfile() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <header className="p-4 shadow-md">
        <h1 className="text-xl font-bold">Profile</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <section className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/Yuyz0112.png" />
            <AvatarFallback delayMs={600}>YZ</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-semibold">Yuyang Zhou</h2>
          <p className="text-gray-400">Full Stack Developer</p>
        </section>
        <section>
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Express</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">HTML5</Badge>
                <Badge variant="outline">CSS3</Badge>
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <Button variant="outline" className="flex items-center justify-center space-x-2">
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+1234567890</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>email@example.com</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="bg-gray-900 p-4">
        <p className="text-center text-gray-400">© 2023 Yuyang Zhou. All rights reserved.</p>
      </footer>
    </div>
  );
}
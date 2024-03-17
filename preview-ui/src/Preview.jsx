import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import React from 'react';

export default function DebugPanel() {
  return (
    <div className="fixed top-4 right-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center space-x-2 bg-white text-black border-black">
            <Settings className="w-5 h-5" />
            <span>Debug</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="rounded bg-black text-white p-6 w-96">
          <h2 className="text-xl font-bold mb-4">Debug Panel</h2>
          <p className="mb-4">Use this panel to manage debug settings and view system information.</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>System Status:</span>
              <span>Operational</span>
            </div>
            <div className="flex justify-between">
              <span>Logs:</span>
              <span>Enabled</span>
            </div>
            <div className="flex justify-between">
              <span>Version:</span>
              <span>1.0.3</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
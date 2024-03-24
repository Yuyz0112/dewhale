import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EyeOff, Eye } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function SmallForm() {
  const [apiKeyVisible, setApiKeyVisible] = React.useState(false);
  const toggleApiKeyVisibility = () => setApiKeyVisible(!apiKeyVisible);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <Label htmlFor="api-key">API Key</Label>
        <div className="flex items-center gap-2">
          <Input id="api-key" type={apiKeyVisible ? "text" : "password"} />
          <button
            type="button"
            onClick={toggleApiKeyVisibility}
            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={apiKeyVisible ? "Hide API Key" : "Show API Key"}
          >
            {apiKeyVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      <div>
        <Label htmlFor="proxy">Proxy (Optional)</Label>
        <Input id="proxy" type="text" placeholder="http://proxyserver:port" />
      </div>
      <div className="flex items-center gap-2">
        <Switch id="toggle-api-key" checked={apiKeyVisible} onChange={toggleApiKeyVisibility} />
        <Label htmlFor="toggle-api-key">Toggle API Key Visibility</Label>
      </div>
      <Button variant="solid">Submit</Button>
    </div>
  );
}
import { currentChannel, setCurrentChannel, message, setMessage, name, label, channel, user, text, trim, messages, push, channels, map, charAt, toUpperCase, filter, msg, index, e, target, value, key, sendMessage } from '';
import { Button } from '@/components/ui/button';
import { Home, Users, MessageSquare, Settings, Plus, Send } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function DiscordApp() {
  const [currentChannel, setCurrentChannel] = useState('general');
  const [message, setMessage] = useState('');

  const channels = [
    { name: 'general', label: 'General' },
    { name: 'random', label: 'Random' },
    { name: 'tech-talk', label: 'Tech Talk' },
    { name: 'gaming', label: 'Gaming' },
  ];

  const messages = [
    { channel: 'general', user: 'User1', text: 'Hey everyone!' },
    { channel: 'general', user: 'User2', text: 'Hello!' },
    { channel: 'tech-talk', user: 'DevDude', text: 'Have you seen the new JS update?' },
  ];

  const sendMessage = () => {
    if (message.trim() !== '') {
      messages.push({ channel: currentChannel, user: 'You', text: message });
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-lg font-bold">Discord Clone</h1>
        <div className="flex space-x-2">
          <Button variant="ghost">
            <Home className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <Users className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <MessageSquare className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <Settings className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="bg-purple-700 w-20 flex flex-col items-center py-4 space-y-2">
          {channels.map((channel) => (
            <Button
              key={channel.name}
              variant="ghost"
              className={`w-12 h-12 rounded-full ${currentChannel === channel.name ? 'bg-purple-500' : ''}`}
              onClick={() => setCurrentChannel(channel.name)}
              aria-label={`Channel ${channel.label}`}
            >
              <span className="text-white text-sm font-semibold">{channel.label.charAt(0).toUpperCase()}</span>
            </Button>
          ))}
          <Button variant="ghost" className="w-12 h-12 rounded-full bg-purple-500">
            <Plus className="w-6 h-6 text-white" />
          </Button>
        </div>
        <main className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.filter(msg => msg.channel === currentChannel).map((msg, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${msg.user}`} />
                  <AvatarFallback>{msg.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold">{msg.user}</div>
                  <div className="text-gray-700">{msg.text}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <div className="p-4 bg-white shadow-md flex items-center space-x-2">
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button variant="solid" color="purple" onClick={sendMessage}>
            <Send className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
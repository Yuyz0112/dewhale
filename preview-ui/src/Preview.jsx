import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-xs p-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-center text-white mb-8">Boas-vindas!</h2>
        <p className="text-sm text-gray-300 mb-4">
          Insira seu e-mail abaixo ou crie uma nova conta
        </p>
        <div className="mb-6">
          <div className="flex items-center px-3 py-2 bg-gray-700 rounded">
            <Mail className="w-5 h-5 text-gray-400" />
            <Input
              className="w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none ml-3"
              placeholder="Seu e-mail"
              type="email"
            />
          </div>
        </div>
        <div className="mb-6">
          <Button className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
            ENTRAR
          </Button>
        </div>
        <div className="text-center">
          <a href="#" className="text-sm text-blue-400 hover:underline">
            Não possui uma conta? Clique aqui para criar!
          </a>
        </div>
      </div>
    </div>
  );
}
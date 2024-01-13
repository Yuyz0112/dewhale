import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    if (value === 'x') {
      setInput(input + '*');
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      // Replace eval with a safer alternative in a real-world app
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md rounded-lg shadow-lg p-6 bg-white bg-opacity-90">
        <div className="mb-4">
          <div className="bg-gray-200 p-4 rounded text-right text-2xl overflow-x-auto">
            {input || '0'}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Button onClick={() => handleInput('7')}>7</Button>
          <Button onClick={() => handleInput('8')}>8</Button>
          <Button onClick={() => handleInput('9')}>9</Button>
          <Button onClick={() => handleInput('/')}>/</Button>
          <Button onClick={() => handleInput('4')}>4</Button>
          <Button onClick={() => handleInput('5')}>5</Button>
          <Button onClick={() => handleInput('6')}>6</Button>
          <Button onClick={() => handleInput('x')}>x</Button>
          <Button onClick={() => handleInput('1')}>1</Button>
          <Button onClick={() => handleInput('2')}>2</Button>
          <Button onClick={() => handleInput('3')}>3</Button>
          <Button onClick={() => handleInput('-')}>-</Button>
          <Button onClick={() => handleInput('0')}>0</Button>
          <Button onClick={() => handleInput('.')}>.</Button>
          <Button onClick={calculateResult}>=</Button>
          <Button onClick={() => handleInput('+')}>+</Button>
        </div>
        <div className="mt-4">
          <Button variant="outline" className="w-full" onClick={clearInput}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
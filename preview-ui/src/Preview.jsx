import React from 'react';

const CalculatorUI = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <div className="bg-gray-200 p-2 rounded text-right">
          <div className="text-gray-600 text-sm">Iddi</div>
          <div className="text-gray-800 text-2xl">192.6</div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {['7', '8', '9', '×'].map((text) => (
            <button key={text} className="bg-gray-300 p-4 rounded text-xl focus:outline-none">
              {text}
            </button>
          ))}
          <button className="bg-red-500 p-4 rounded text-xl text-white focus:outline-none">
            C
          </button>
          {['4', '5', '6', '-'].map((text) => (
            <button key={text} className="bg-gray-300 p-4 rounded text-xl focus:outline-none">
              {text}
            </button>
          ))}
          <button className="bg-gray-300 p-4 rounded text-xl focus:outline-none">M</button>
          {['1', '2', '3', '+'].map((text) => (
            <button key={text} className="bg-gray-300 p-4 rounded text-xl focus:outline-none">
              {text}
            </button>
          ))}
          <button className="bg-gray-300 p-4 rounded text-xl focus:outline-none">√</button>
          <button className="bg-gray-300 p-4 rounded text-xl focus:outline-none">0</button>
          <button className="bg-gray-300 p-4 rounded text-xl focus:outline-none">%</button>
          <button className="bg-gray-300 p-4 rounded text-xl focus:outline-none">+</button>
          <button className="col-span-2 bg-blue-500 p-4 rounded text-xl text-white focus:outline-none">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;
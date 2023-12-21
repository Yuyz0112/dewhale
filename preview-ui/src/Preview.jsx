import React from 'react';

const CalculatorUI = () => {
  const buttonStyles = "w-16 h-16 flex items-center justify-center text-2xl font-semibold rounded shadow-lg focus:outline-none";
  const operatorButtonStyles = "bg-orange-500 text-white hover:bg-orange-600";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-4 p-4 bg-gray-200 rounded">
          <span className="text-3xl">0</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>7</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>8</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>9</button>
          <button className={`${buttonStyles} ${operatorButtonStyles}`}>×</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>4</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>5</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>6</button>
          <button className={`${buttonStyles} ${operatorButtonStyles}`}>-</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>1</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>2</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>3</button>
          <button className={`${buttonStyles} ${operatorButtonStyles}`}>+</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400 col-span-2`}>0</button>
          <button className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}>%</button>
          <button className={`${buttonStyles} ${operatorButtonStyles}`}>=</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;
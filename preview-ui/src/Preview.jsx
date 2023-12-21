import React from 'react';

const CalculatorUI = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '300px' }}>
        <div className="bg-gray-200 p-4 rounded mb-4">
          <div className="text-right text-gray-700 text-lg" aria-label="Calculator Display">
            0
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '%', 'C', '='].map((buttonLabel) => (
            <button
              key={buttonLabel}
              className="bg-gray-300 text-gray-700 font-semibold py-3 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              style={{ boxShadow: 'inset 0 4px rgba(0,0,0,0.2)' }}
              aria-label={`Button ${buttonLabel}`}
            >
              {buttonLabel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;
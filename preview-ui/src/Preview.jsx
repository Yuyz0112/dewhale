import React from 'react';

const GradientCard = () => {
  return (
    <div className="p-8 space-y-4">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 text-white">
          <h2 className="text-xl font-bold">Gradient Card 1</h2>
          <p>Here is some content for the first gradient card.</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white">
          <h2 className="text-xl font-bold">Gradient Card 2</h2>
          <p>Here is some content for the second gradient card.</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-white">
          <h2 className="text-xl font-bold">Gradient Card 3</h2>
          <p>Here is some content for the third gradient card.</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-4 text-white">
          <h2 className="text-xl font-bold">Gradient Card 4</h2>
          <p>Here is some content for the fourth gradient card.</p>
        </div>
      </div>
    </div>
  );
};

export default GradientCard;
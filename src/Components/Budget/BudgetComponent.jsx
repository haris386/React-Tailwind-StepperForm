import React, { useState } from 'react';

export const BudgetComponent = ({ onBudgetSelect }) => {
  const [budget, setBudget] = useState('');

  const handleBudgetSelect = (selectedBudget) => {
    setBudget(selectedBudget);
    if (typeof onBudgetSelect === 'function') {
      onBudgetSelect(selectedBudget);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full mt-10">
      <h2 className="text-2xl font-bold mb-4">Step # 1</h2>
      <h3 className="text-2xl font-bold mb-4">What is your monthly digital marketing budget</h3>
      <div
        className="bg-white p-4 text-center mb-2 cursor-pointer hover:bg-gray-100"
        onClick={() => handleBudgetSelect('$1,000/mo')}
        role="button"
        aria-label="Select $1,000/mo budget"
      >
        <span className="text-lg block mx-auto w-80"> $1,000/mo</span>
      </div>
      <div
        className="bg-white p-4 text-center mb-2 cursor-pointer hover:bg-gray-100"
        onClick={() => handleBudgetSelect('$1,000 - $2,000')}
        role="button"
        aria-label="Select $1,000 - $2,000 budget"
      >
        <span className="text-lg block mx-auto w-80"> $1,000 - $2,000</span>
      </div>
      <div
        className="bg-white p-4 text-center mb-2 cursor-pointer hover:bg-gray-100"
        onClick={() => handleBudgetSelect('$2,000 - $5,000')}
        role="button"
        aria-label="Select $2,000 - $5,000 budget"
      >
        <span className="text-lg block mx-auto w-80"> $2,000 - $5,000</span>
      </div>
      <div
        className="bg-white p-4 text-center mb-2 cursor-pointer hover:bg-gray-100"
        onClick={() => handleBudgetSelect('$5,000 - $10,000')}
        role="button"
        aria-label="Select $5,000 - $10,000 budget"
      >
        <span className="text-lg block mx-auto w-80"> $5,000 - $10,000</span>
      </div>
      <div
        className="bg-white p-4 text-center mb-2 cursor-pointer hover:bg-gray-100"
        onClick={() => handleBudgetSelect('$10,000 - $25,000')}
        role="button"
        aria-label="Select $10,000 - $25,000 budget"
      >
        <span className="text-lg block mx-auto w-80"> $10,000 - $25,000</span>
      </div>
      <div
        className="bg-white p-4 text-center mb-2 cursor-pointer hover:bg-gray-100"
        onClick={() => handleBudgetSelect('$25,000 +')}
        role="button"
        aria-label="Select $25,000 + budget"
      >
        <span className="text-lg block mx-auto w-80"> $25,000 +</span>
      </div>
    </div>
  );
};

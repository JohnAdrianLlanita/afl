import React, { useState } from 'react';

function ProblemPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [selectedProblem, setSelectedProblem] = useState(null); // Track selected problem

  const handleButton1 = () => {
    console.log("Button 1 clicked: Accept all strings that do not contain 'ab'");
    setSelectedProblem(1); // Set selected problem to 1
  };

  const handleButton2 = () => {
    console.log("Button 2 clicked: Accept all strings where 'b' is never tripled");
    setSelectedProblem(2); // Set selected problem to 2
  };

  const handleCheck = () => {
    if (!input.includes('ab') && !/b{3}/.test(input)) {
      setResult('Accepted');
    } else {
      setResult('Rejected');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-6 w-96 text-center">
        <div className="flex justify-around mb-5">
          <button
            onClick={handleButton1}
            className={`bg-blue-600 text-white py-2 px-5 rounded-lg text-lg transition-all duration-300 transform ${selectedProblem === 1 ? 'bg-red-500' : ''} hover:bg-blue-700 active:bg-blue-800`}
          >
            Problem 1
          </button>
          <button
            onClick={handleButton2}
            className={`bg-blue-600 text-white py-2 px-5 rounded-lg text-lg transition-all duration-300 transform ${selectedProblem === 2 ? 'bg-red-500' : ''} hover:bg-blue-700 active:bg-blue-800`}
          >
            Problem 2
          </button>
        </div>
        <input
          type="text"
          className="w-full py-2 px-4 mb-5 border border-gray-300 rounded-lg text-center text-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text"
        />
        <button
          onClick={handleCheck}
          className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg transition-all duration-300 hover:bg-green-600 active:bg-green-700"
        >
          Check
        </button>
        <div className="mt-5 text-xl font-bold text-black">{result}</div>
      </div>
    </div>
  );
}

export default ProblemPage;

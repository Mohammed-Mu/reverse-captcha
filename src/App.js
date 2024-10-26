import React, { useState, useEffect } from 'react';
import { Cpu, RefreshCw, Send } from 'lucide-react';
import './App.css';

function App() {
  const [challenge, setChallenge] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const generateChallenge = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const newChallenge = `${num1} * ${num2} + 5 - 3`;
    setChallenge(newChallenge);
    setCorrectAnswer(num1 * num2 + 5 - 3);
    setUserAnswer('');
    setFeedback('');
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setFeedback('CONFIRMED: AI DETECTED');
    } else {
      setFeedback('ERROR: HUMAN SUSPECTED');
    }
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-green-500">
      <div className="w-full max-w-md bg-gray-800 border-green-500 shadow-lg shadow-green-500/50 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2 mb-4 cyber-glitch">
          <Cpu className="w-6 h-6" />
          AI Verification Protocol
        </h1>
        <div className="space-y-4">
          <div className="text-lg font-mono border border-green-500 p-4 rounded">
            {challenge}
          </div>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter solution"
            className="w-full bg-gray-700 border-green-500 text-green-500 placeholder-green-700 p-2 rounded"
          />
          <div className="text-lg font-mono h-6">{feedback}</div>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={checkAnswer} className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center">
            <Send className="w-4 h-4 mr-2" />
            Verify
          </button>
          <button onClick={generateChallenge} className="border border-green-500 text-green-500 hover:bg-green-900 px-4 py-2 rounded flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            New Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
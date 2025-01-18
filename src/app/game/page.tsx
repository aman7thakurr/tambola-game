'use client'
import { FC, useEffect, useRef } from 'react';
import GameBoard from '@/app/game/GameBoard';
import Leaderboard from '@/app/leaderboard/LeaderBoard';
import useGameStore from '@/store/gameStore';

const GamePage: FC = () => {
  const { calledNumbers, intervalTime, isPaused, addCalledNumber, setIntervalTime, setIsPaused, resetGame } = useGameStore();
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const callNextNumber = () => {
    const availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1).filter(
      (number) => !calledNumbers.includes(number)
    );
    if (availableNumbers.length > 0) {
      const nextNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
      if (!calledNumbers.includes(nextNumber)) {
        addCalledNumber(nextNumber);
      }
    } else {
      stopCallingNumbers();
    }
  };

  const startCallingNumbers = () => {
    if (!intervalId.current) {
      intervalId.current = setInterval(callNextNumber, intervalTime);
    }
  };

  const stopCallingNumbers = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const pauseCallingNumbers = () => {
    setIsPaused(true);
    stopCallingNumbers();
  };

  const resumeCallingNumbers = () => {
    setIsPaused(false);
    startCallingNumbers();
  };

  const restartGame = () => {
    stopCallingNumbers();
    resetGame();
  };

  useEffect(() => {
    if (intervalId.current) {
      stopCallingNumbers();
      startCallingNumbers();
    }
  }, [intervalTime]);

  return (
    <div className="game-page p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Game Board</h1>
      <div className="game-board flex flex-col md:flex-row p-4 rounded-lg shadow-md">
        <Leaderboard />
        <GameBoard calledNumbers={calledNumbers} />
      </div>
      <div className="controls mt-6 text-center">
        <button
          onClick={startCallingNumbers}
          className="bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 dark:hover:bg-green-800 transition-colors duration-300 mr-2"
        >
          Start
        </button>
        <button
          onClick={stopCallingNumbers}
          className="bg-red-500 dark:bg-red-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 dark:hover:bg-red-800 transition-colors duration-300 mr-2"
        >
          Stop
        </button>
        <button
          onClick={isPaused ? resumeCallingNumbers : pauseCallingNumbers}
          className="bg-yellow-500 dark:bg-yellow-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 dark:hover:bg-yellow-800 transition-colors duration-300 mr-2"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button
          onClick={restartGame}
          className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-300"
        >
          Restart
        </button>
        <div className="mt-4">
          <label className="text-gray-900 dark:text-gray-100 mr-2">Interval (ms):</label>
          <input
            type="number"
            value={intervalTime}
            onChange={(e) => setIntervalTime(Number(e.target.value))}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-1 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default GamePage;

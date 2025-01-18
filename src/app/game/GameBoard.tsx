import { FC } from 'react';

interface GameBoardProps {
  calledNumbers: number[];
}

const GameBoard: FC<GameBoardProps> = ({ calledNumbers }) => {
  const generateGrid = () => Array.from({ length: 90 }, (_, i) => i + 1);

  // Filter calledNumbers to ensure unique values
  const uniqueCalledNumbers = Array.from(new Set(calledNumbers));

  return (
    <div className="game-board-content flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow-md">
      {/* Called Numbers Section */}
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">Called Numbers</h2>
      <div className="called-numbers flex flex-wrap justify-center gap-2 bg-gray-200 dark:bg-gray-700 p-4 rounded-md shadow-sm">
        {uniqueCalledNumbers.length > 0 ? (
          uniqueCalledNumbers.map((number, index) => (
            <span
              key={`called-${index}`}
              className="number bg-green-500 dark:bg-green-700 text-white p-2 m-1 rounded"
            >
              {number}
            </span>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 font-medium">No numbers called yet!</p>
        )}
      </div>

      {/* Game Grid Section */}
      <h3 className="text-xl font-bold text-center mt-8 mb-4 text-blue-600 dark:text-blue-400">Game Grid</h3>
      <div className="grid grid-cols-10 gap-2 bg-gray-200 dark:bg-gray-700 p-4 rounded-md shadow-sm">
        {generateGrid().map((number) => (
          <span
            key={`grid-${number}`}
            className={`text-center font-medium w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
              uniqueCalledNumbers.includes(number)
                ? 'bg-green-500 dark:bg-green-700 text-white'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100'
            }`}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;

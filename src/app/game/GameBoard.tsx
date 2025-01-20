import { FC } from 'react';

interface GameBoardProps {
  calledNumbers: number[];
}

const GameBoard: FC<GameBoardProps> = ({ calledNumbers }) => {
  const generateGrid = () => Array.from({ length: 90 }, (_, i) => i + 1);

  const uniqueCalledNumbers = Array.from(new Set(calledNumbers));

  return (
    <div className="game-board-content w-full flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow-md">
      {/* Called Numbers Section */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
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
      </div>

      {/* Game Grid Section */}
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">Game Grid</h3>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 bg-gray-200 dark:bg-gray-700 p-4 rounded-md shadow-sm">
          {generateGrid().map((number) => (
            <span
              key={`grid-${number}`}
              className={`text-center font-medium w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-md ${
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
    </div>
  );
};

export default GameBoard;

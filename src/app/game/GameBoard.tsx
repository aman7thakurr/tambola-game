import { FC } from 'react';

interface GameBoardProps {
  calledNumbers: number[];
}

const GameBoard: FC<GameBoardProps> = ({ calledNumbers }) => {
  const generateGrid = () => Array.from({ length: 90 }, (_, i) => i + 1);
calledNumbers= [1,45,66,2]
  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg">
      {/* Called Numbers Section */}
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Called Numbers</h2>
      <div className="flex flex-wrap justify-center gap-2 bg-white p-4 rounded-md shadow-sm">
        {calledNumbers.length > 0 ? (
          calledNumbers.map((number) => (
            <span
              key={number}
              className="bg-green-200 text-green-800 font-semibold px-4 py-2 rounded-full shadow-md"
            >
              {number}
            </span>
          ))
        ) : (
          <p className="text-gray-500 font-medium">No numbers called yet!</p>
        )}
      </div>

      {/* Game Grid Section */}
      <h3 className="text-xl font-bold text-center mt-8 mb-4 text-blue-600">Game Grid</h3>
      <div className="grid grid-cols-10 gap-2 bg-white p-4 rounded-md shadow-sm">
        {generateGrid().map((number) => (
          <span
            key={number}
            className={`text-center font-medium w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
              calledNumbers.includes(number)
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-800'
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

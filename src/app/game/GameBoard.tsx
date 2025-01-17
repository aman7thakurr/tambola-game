import { FC } from 'react';

interface GameBoardProps {
  calledNumbers: number[];
}

const GameBoard: FC<GameBoardProps> = ({ calledNumbers }) => {
  const generateGrid = () => {
    const grid = [];
    for (let i = 1; i <= 90; i++) {
      grid.push(i);
    }
    return grid;
  };

  return (
    <div className="game-board">
      <h2>Called Numbers</h2>
      <div className="called-numbers">
        {calledNumbers.map((number) => (
          <span key={number} className="called-number">
            {number}
          </span>
        ))}
      </div>
      <h3>Game Grid</h3>
      <div className="grid">
        {generateGrid().map((number) => (
          <span
            key={number}
            className={`grid-number ${calledNumbers.includes(number) ? 'marked' : ''}`}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;

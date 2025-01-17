// src/app/game/page.tsx
import GameBoard from '@/app/game/GameBoard';
import Leaderboard from '@/app/leaderboard/LeaderBoard';

const GamePage = () => {
  return (
    <div className="game-page">
      <h1>Tambola Game</h1>
      <GameBoard />
      <Leaderboard />
    </div>
  );
};

export default GamePage;

// src/app/game/page.tsx
import GameBoard from '@/app/game/GameBoard';
import Leaderboard from '@/app/leaderboard/LeaderBoard';
import Navbar from '@/components/navbar';

const GamePage = () => {
  return (
    <div className="game-page">
        <Navbar/>
      <h1 className='bg-red-200 text-blue-600 font-bold w-full rounded-md mb-2 mt-2 p-4 text-3xl text-center'>Tambola Game</h1>
      <GameBoard calledNumbers={[]} />
      <Leaderboard players={[]} />
    </div>
  );
};

export default GamePage;

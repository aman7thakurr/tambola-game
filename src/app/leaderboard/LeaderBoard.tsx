import { FC } from 'react';

interface LeaderboardProps {
  players: string[];
}

const Leaderboard: FC<LeaderboardProps> = ({ players }) => {
  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {index + 1}. {player}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

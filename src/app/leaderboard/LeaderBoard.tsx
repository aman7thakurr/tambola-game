import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Leaderboard: FC = () => {
  const players = ["Alice", "Bob", "Charlie", "David", "Eve"];

  return (
    <Card className="leaderboard p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-decimal list-inside space-y-3">
          {players.slice(0, 3).map((player, index) => (
            <li key={index} className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{index + 1}. </span>
              {player}
            </li>
          ))}
        </ul>
        {players.length > 3 && (
          <div className="mt-6 text-center text-red-600 dark:text-red-400 font-bold text-xl">
            Game Over
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Leaderboard;

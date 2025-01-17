// src/types/game.d.ts
export interface Player {
    id: string;
    name: string;
    score: number;
  }
  
  export interface GameState {
    players: Player[];
    calledNumbers: number[];
    currentNumber: number;
    gameStatus: 'waiting' | 'playing' | 'ended';
  }
  
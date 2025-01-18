import {create} from 'zustand';
import { createGameSlice, GameState } from './slices/gameSlice';

const useGameStore = create<GameState>((...a) => ({
  ...createGameSlice(...a),
}));

export default useGameStore;

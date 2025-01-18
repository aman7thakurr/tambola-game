import { StateCreator } from 'zustand';

export interface GameState {
  calledNumbers: number[];
  intervalTime: number;
  isPaused: boolean;
  addCalledNumber: (number: number) => void;
  setIntervalTime: (time: number) => void;
  setIsPaused: (paused: boolean) => void;
  resetGame: () => void;
}

export const createGameSlice: StateCreator<GameState> = (set) => ({
  calledNumbers: [],
  intervalTime: 2000,
  isPaused: false,
  addCalledNumber: (number) => set((state) => ({ calledNumbers: [...state.calledNumbers, number] })),
  setIntervalTime: (time) => set({ intervalTime: time }),
  setIsPaused: (paused) => set({ isPaused: paused }),
  resetGame: () => set({ calledNumbers: [], intervalTime: 2000, isPaused: false }),
});

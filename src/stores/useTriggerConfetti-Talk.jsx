import { create } from 'zustand';

export const useConfettiStore = create((set) => ({
  triggerConfetti: false,
  setTriggerConfetti: (value) => set({ triggerConfetti: value }),
  resetConfetti: () => set({ triggerConfetti: false }),
}));

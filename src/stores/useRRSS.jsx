import { create } from 'zustand';

export const useRRSSStore = create((set) => ({
  isHoverRRSS: false,
  setIsHoverRRSS: (value) => set({ isHoverRRSS: value }),
  resetIsHoverRRSS: () => set({ isHoverRRSS: false }),
}));

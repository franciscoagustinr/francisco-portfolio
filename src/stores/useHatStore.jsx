import { create } from 'zustand';

export const useHatStore = create((set) => ({
  hatName: 'NoneHat',
  setHatName: (newHatName) => set({ hatName: newHatName }),
}));

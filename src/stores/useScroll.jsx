import { create } from "zustand";

export const useScrollStore = create((set) => ({
  isScrolling: false,
  setIsScrolling: (value) => set({ isScrolling: value }),
}));

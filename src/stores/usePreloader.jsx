import { create } from "zustand";

export const usePreloader = create((set) => ({
  isLoading: true,
  stopLoader: () => set({ isLoading: false }),
}));

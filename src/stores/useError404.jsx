import { create } from 'zustand';

export const useError404 = create((set) => ({
  isErrorPage: false,
  setErrorPage: (isError) => set({ isErrorPage: isError }),
}));

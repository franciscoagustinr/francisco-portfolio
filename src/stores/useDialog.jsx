import { create } from 'zustand';

export const useDialogStore = create((set) => ({
  text: null,
  setDialogText: (text) => set({ text }),
}));

export const setDialogText = (text) => useDialogStore.getState().setDialogText(text);

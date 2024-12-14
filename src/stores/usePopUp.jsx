import { create } from 'zustand';

export const usePopupStore = create((set) => ({
  isPopUpOpen: false,
  openPopUp: () => set({ isPopUpOpen: true }),
  closePopUp: () => set({ isPopUpOpen: false }),
}));

import { create } from "zustand";

export const usePopupStore = create((set) => ({
  isPopUpOpen: false,
  openPopUp: () => set({ isPopUpOpen: true }), // Abre el popup
  closePopUp: () => set({ isPopUpOpen: false }), // Cierra el popup
}));

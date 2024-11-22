import { create } from "zustand";

export const useRRSSStore = create((set) => ({
  isHoverRRSS: false, // Estado inicial
  setIsHoverRRSS: (value) => set({ isHoverRRSS: value }), // Cambiar el estado
  resetIsHoverRRSS: () => set({ isHoverRRSS: false }), // Opcional: Reinicia el estado
}));

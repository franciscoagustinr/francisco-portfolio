import { create } from "zustand";

export const useConfettiStore = create((set) => ({
  triggerConfetti: false, // Estado inicial
  setTriggerConfetti: (value) => set({ triggerConfetti: value }), // Cambiar el estado
  resetConfetti: () => set({ triggerConfetti: false }), // Opcional: Reinicia el estado
}));

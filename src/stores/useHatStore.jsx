import { create } from "zustand";

export const useHatStore = create((set) => ({
  hatName: "NoneHat", // Estado inicial
  setHatName: (newHatName) => set({ hatName: newHatName }), // Actualizar el nombre del sombrero
}));

import { create } from 'zustand';

export const useMusicPlaying = create((set) => ({
  isMusicPlaying: false,
  playMusic: () => set({ isMusicPlaying: true }),
  stopMusic: () => set({ isMusicPlaying: false }),
}));

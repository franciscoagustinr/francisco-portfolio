import { create } from 'zustand';
import { getClickCount } from '../utils/getClickCount';
import { incrementCounter } from '../utils/incrementCounter';

export const useClickCountStore = create((set, get) => ({
  count: null,
  loaded: false,
  loading: false,

  load: async () => {
    if (get().loaded || get().loading) return;
    set({ loading: true });
    const count = await getClickCount();
    set({ count: count ?? get().count, loading: false, loaded: true });
  },

  increment: () => {
    set({ count: (get().count ?? 0) + 1 });
    incrementCounter();
  },
}));

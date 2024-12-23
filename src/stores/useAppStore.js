import { create } from 'zustand';;

const useAppStore = create((set) => ({
    movements : null,
    setMovements : (value) => set({ movements : value})
  }));

export { useAppStore };
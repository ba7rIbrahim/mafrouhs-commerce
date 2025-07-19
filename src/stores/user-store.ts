import { create } from "zustand";

interface UserStore {
  quantity: number;
  color: string;
  setQuantity: (quantity: number) => void;
  setColor: (color: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  quantity: 1,
  color: "",
  setQuantity: (quantity) => set({ quantity: quantity + 1 }),
  setColor: (color) => set({ color }),
}));

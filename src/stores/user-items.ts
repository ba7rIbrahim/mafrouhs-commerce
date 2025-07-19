import { create } from "zustand";

interface ProductSelection {
  color: string;
  quantity: number;
  setColor: (color: string) => void;
  setQuantity: (quantity: number) => void;
}

export const useProductSelection = create<ProductSelection>((set) => ({
  color: "",
  quantity: 1,
  setColor: (color) => set({ color }),
  setQuantity: (quantity) => set({ quantity }),
}));

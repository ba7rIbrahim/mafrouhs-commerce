import { create } from "zustand";

interface ToggleFlyoutCart {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const useToggleFlyoutCart = create<ToggleFlyoutCart>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
}));

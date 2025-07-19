import { create } from "zustand";

type ToggleFlyoutMenu = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const useFlyoutMenuStore = create<ToggleFlyoutMenu>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
}));

import { create } from "zustand";

interface StepsStore {
  stepsState: {
    carts: boolean;
    form: boolean;
  };
  setCartsStep: (value: boolean) => void;
  setFormStep: (value: boolean) => void;
}

export const useStepsStore = create<StepsStore>((set) => ({
  stepsState: {
    carts: false,
    form: false,
  },
  setCartsStep: (value) =>
    set((state) => ({
      stepsState: {
        ...state.stepsState,
        carts: value,
      },
    })),
  setFormStep: (value) =>
    set((state) => ({
      stepsState: {
        ...state.stepsState,
        form: value,
      },
    })),
}));

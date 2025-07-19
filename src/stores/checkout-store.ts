import { create } from "zustand";

interface CheckoutSteps {
  currentStep: number;
  setStep: (step: number) => void;
}

export const useCheckoutStore = create<CheckoutSteps>((set) => ({
  currentStep: 1,
  setStep: (step) => set({ currentStep: step }),
}));

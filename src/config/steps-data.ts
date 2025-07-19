export type Steps = {
  step: number;
  name: string;
  title: string;
};

export const steps: Steps[] = [
  { step: 1, name: "Cart", title: "Shopping cart" },
  { step: 2, name: "Checkout", title: "Checkout details" },
  { step: 3, name: "Completed!", title: "Order Complete" },
];

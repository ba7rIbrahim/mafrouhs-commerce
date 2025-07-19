import type { Doc } from "convex/_generated/dataModel";

export type CartItem = Doc<"carts">;

export interface CartTotals {
  subtotal: number;
  total: number;
}

export interface CartItemProps {
  item: CartItem;
}

export interface CartSummaryProps {
  subtotal: number;
  total: number;
}

export interface CartActionsProps {
  onClose: () => void;
}

export interface CartContentProps {
  cartItems: CartItem[] | undefined;
}

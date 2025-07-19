import { calculateCartTotals } from "@/utils/cart-utils";
import type { CartItem } from "@/types/carts";

export const useCartTotals = (cartItems: CartItem[] | undefined) => {
  return calculateCartTotals(cartItems);
};

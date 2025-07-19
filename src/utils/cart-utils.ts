import type { CartItem } from "@/types/carts";

export const calculateItemPrice = (price: number, quantity: number) => {
  return price * quantity;
};

export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

export const calculateCartTotals = (cartItems: CartItem[] | undefined) => {
  if (!cartItems?.length) {
    return { subtotal: 0, total: 0 };
  }

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + calculateItemPrice(item.prevPrice as number, item.quantity);
  }, 0);

  const total = cartItems.reduce((sum, item) => {
    const itemPrice = item.newPrice !== 0 ? item.newPrice : item.prevPrice;
    return sum + calculateItemPrice(itemPrice as number, item.quantity);
  }, 0);

  return { subtotal, total };
};

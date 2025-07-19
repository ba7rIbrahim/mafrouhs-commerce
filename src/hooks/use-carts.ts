import { useUser } from "@clerk/clerk-react";
import { useMutation, useQuery } from "convex/react";
import type { Id } from "convex/_generated/dataModel";
import { toast } from "sonner";
import { api } from "@convex/_generated/api";

export const useCart = () => {
  const { user } = useUser();
  const userId = user?.id;

  const cartItems = useQuery(api.carts.getUserCards, { userId });
  const addToCart = useMutation(api.carts.addToCard);
  const updateQuantity = useMutation(api.carts.updateCartItemQuantity);
  const removeFromCart = useMutation(api.carts.removeFromCart);

  const addItemToCart = async (
    productId: Id<"products">,
    quantity: number,
    color: string,
    prevPrice: number,
    newPrice: number
  ) => {
    if (!userId) {
      toast.error("Please log in to add to cart");
      return;
    }

    await addToCart({
      userId,
      productId,
      quantity,
      color,
      prevPrice,
      newPrice,
    });
    toast.success("Added to cart");
  };

  const handleIncreaseQuantity = (id: Id<"carts">, quantity: number) => {
    updateQuantity({
      cartId: id,
      quantity: quantity + 1,
    });
  };

  const handleDecreaseQuantity = (id: Id<"carts">, quantity: number) => {
    if (quantity > 1) {
      updateQuantity({
        cartId: id,
        quantity: quantity - 1,
      });
    }
  };

  const removeItem = async (cartId: Id<"carts">) => {
    if (!userId) return;

    await removeFromCart({ cartId });
    toast.success("Removed from cart");
  };

  return {
    cartItems,
    addItemToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    removeItem,
  };
};

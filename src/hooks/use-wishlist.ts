import { useUser } from "@clerk/clerk-react";
import { api } from "@convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";

export const useWishlist = () => {
  const { user } = useUser();
  const userId = user?.id;

  const wishlist = useQuery(api.wishlist.getWishlist, {
    userId,
  });

  const addToWishlistMutation = useMutation(api.wishlist.addToWishlist);
  const removeFromWishlistMutation = useMutation(
    api.wishlist.removeFromWishlist
  );

  const addToWishlist = async (
    productId: Id<"products">,
    name: string,
    image: string,
    newPrice: number,
    prevPrice: number
  ) => {
    if (!userId) {
      toast.error("You must be logged in to manage your wishlist");
      return;
    }

    try {
      await addToWishlistMutation({
        userId,
        productId,
        name,
        image,
        prevPrice,
        newPrice,
      });
      toast.success("Added to wishlist");
    } catch {
      toast.error("Failed to add to wishlist");
    }
  };

  const removeFromWishlist = async (productId: Id<"products">) => {
    if (!userId) {
      toast.error("You must be logged in to remove items from your wishlist");
      return;
    }

    try {
      await removeFromWishlistMutation({ userId, productId });
    } catch {
      toast.error("Failed to remove from wishlist");
    }
  };

  const toggleWishlist = async (
    productId: Id<"products">,
    name: string,
    image: string,
    newPrice: number,
    prevPrice: number
  ) => {
    if (!userId) {
      toast.error("You must be logged in to manage your wishlist");
      return;
    }

    const isWishlisted = wishlist?.some((w) => w.productId === productId);

    if (isWishlisted) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId, name, image, newPrice, prevPrice);
    }
  };

  const isInWishlist = (productId: Id<"products">) => {
    return wishlist?.some((w) => w.productId === productId);
  };

  return {
    wishlist,
    isLoading: wishlist === undefined,
    empty: wishlist?.length === 0,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
  };
};

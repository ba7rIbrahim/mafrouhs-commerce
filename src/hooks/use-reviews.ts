import { useUser } from "@clerk/clerk-react";
import { api } from "@convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";

export const useReviews = (productId: Id<"products">) => {
  const { user } = useUser();

  const allReviews = useQuery(api.reviews.getReviewsByProduct, { productId });
  const addToReviews = useMutation(api.reviews.addReview);

  const addCommentToReviews = async (
    productId: Id<"products">,
    userId: string,
    userName: string,
    userEmail: string,
    userImage: string,
    comment: string
  ) => {
    if (!user) {
      toast.error("Please login to write your comment");
      return;
    }

    await addToReviews({
      productId,
      userId,
      userName,
      userEmail,
      userImage,
      comment,
    });
  };

  return {
    allReviews,
    addCommentToReviews,
  };
};

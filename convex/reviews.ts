import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getReviewsByProduct = query({
  args: { productId: v.id("products") },
  handler: async (ctx, args) => {
    const reviews = await ctx.db
      .query("reviews")
      .withIndex("by_product", (q) => q.eq("productId", args.productId))
      .order("desc")
      .collect();

    return reviews;
  },
});

export const addReview = mutation({
  args: {
    productId: v.id("products"),
    userId: v.string(),
    userName: v.string(),
    userEmail: v.string(),
    userImage: v.string(),
    comment: v.string(),
  },
  handler: async (ctx, args) => {
    const review = await ctx.db.insert("reviews", {
      productId: args.productId,
      userId: args.userId,
      userName: args.userName,
      userEmail: args.userEmail,
      userImage: args.userImage,
      comment: args.comment,
    });
    return review;
  },
});

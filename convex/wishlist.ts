import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addToWishlist = mutation({
  args: {
    userId: v.string(),
    productId: v.id("products"),
    name: v.string(),
    image: v.string(),
    prevPrice: v.number(),
    newPrice: v.number(),
  },
  handler: async (ctx, args) => {
    const exists = await ctx.db
      .query("wishlist")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("productId"), args.productId)
        )
      )
      .first();

    if (exists) return;
    await ctx.db.insert("wishlist", {
      userId: args.userId,
      productId: args.productId,
      name: args.name,
      image: args.image,
      prevPrice: args.prevPrice,
      newPrice: args.newPrice,
    });
  },
});

export const removeFromWishlist = mutation({
  args: {
    userId: v.string(),
    productId: v.id("products"),
  },
  handler: async (ctx, args) => {
    const item = await ctx.db
      .query("wishlist")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("productId"), args.productId)
        )
      )
      .first();

    if (item) {
      await ctx.db.delete(item._id);
    }
  },
});

export const getWishlist = query({
  args: {
    userId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (!args.userId) return [];

    const items = await ctx.db
      .query("wishlist")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    return items;
  },
});

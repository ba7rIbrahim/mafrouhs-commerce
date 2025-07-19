import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addToCard = mutation({
  args: {
    userId: v.string(),
    productId: v.id("products"),
    quantity: v.number(),
    color: v.string(),
    prevPrice: v.number(),
    newPrice: v.number(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("carts")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("productId"), args.productId),
          q.eq(q.field("color"), args.color)
        )
      )
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        quantity: existing.quantity + args.quantity,
      });
    } else {
      await ctx.db.insert("carts", {
        userId: args.userId,
        productId: args.productId,
        quantity: args.quantity,
        color: args.color,
        prevPrice: args.prevPrice,
        newPrice: args.newPrice,
      });
    }
  },
});

export const getUserCards = query({
  args: {
    userId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (!args.userId) return [];

    const carts = await ctx.db
      .query("carts")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    return carts;
  },
});

export const updateCartItemQuantity = mutation({
  args: {
    cartId: v.id("carts"),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.cartId, {
      quantity: args.quantity,
    });
  },
});

export const removeFromCart = mutation({
  args: {
    cartId: v.id("carts"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.cartId);
  },
});

export const removeAllCartsForUser = mutation({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const carts = await ctx.db
      .query("carts")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    for (const cart of carts) {
      await ctx.db.delete(cart._id);
    }
  },
});

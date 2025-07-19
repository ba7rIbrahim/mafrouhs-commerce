import { paginationOptsValidator } from "convex/server";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getProducts = query({
  args: {
    paginationOpts: paginationOptsValidator,
    category: v.optional(v.string()),
    minPrice: v.optional(v.number()),
    maxPrice: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    let products = ctx.db.query("products");

    if (args.category)
      products = products.filter((p) =>
        p.eq(p.field("category"), args.category)
      );

    if (args.minPrice !== undefined) {
      products = products.filter((p) =>
        p.gte(p.field("prevPrice"), args.minPrice as number)
      );
    }

    if (args.maxPrice !== undefined) {
      products = products.filter((p) =>
        p.lte(p.field("prevPrice"), args.maxPrice as number)
      );
    }

    const results = await products.order("desc").paginate(args.paginationOpts);
    return results;
  },
});

export const getProductById = query({
  args: {
    id: v.id("products"),
  },
  handler: async (ctx, args) => {
    const product = await ctx.db.get(args.id);
    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  },
});

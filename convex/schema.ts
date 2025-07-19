import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    description: v.string(),
    category: v.string(),
    quantity: v.number(),
    prevPrice: v.number(),
    newPrice: v.number(),
    isNew: v.boolean(),
    colors: v.array(v.string()),
    materials: v.string(),
    careInstructions: v.string(),
    thumbnail: v.string(),
    images: v.optional(v.array(v.string())),
    addition_info: v.optional(
      v.array(
        v.object({
          title: v.string(),
          description: v.array(v.string()),
        })
      )
    ),
    question: v.optional(
      v.array(
        v.object({
          question: v.string(),
          answer: v.string(),
        })
      )
    ),
  }),

  reviews: defineTable({
    productId: v.id("products"),
    userId: v.string(),
    userName: v.string(),
    userEmail: v.string(),
    userImage: v.string(),
    comment: v.string(),
  }).index("by_product", ["productId"]),

  wishlist: defineTable({
    userId: v.string(),
    productId: v.id("products"),
    name: v.string(),
    image: v.string(),
    prevPrice: v.number(),
    newPrice: v.number(),
  }),

  carts: defineTable({
    userId: v.string(),
    productId: v.id("products"),
    quantity: v.number(),
    color: v.optional(v.string()),
    prevPrice: v.optional(v.number()),
    newPrice: v.optional(v.number()),
  }),
});

import { BadgeAlert, BadgeCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuantityInput } from "@/components/ui/quantity-input";
import { Heart } from "@/assets/svgs";
import type { Id } from "convex/_generated/dataModel";
import React from "react";
import type { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
  color: string;
  setColor: (c: string) => void;
  quantity: number;
  setQuantity: (q: number) => void;
  addItemToCart: (
    id: Id<"products">,
    quantity: number,
    color: string,
    prevPrice: number,
    newPrice: number
  ) => void;
  handleToggleWishlist: (
    id: Id<"products">,
    name: string,
    image: string,
    newPrice: number,
    prevPrice: number
  ) => void;
  isInWishlist: (id: Id<"products">) => boolean;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  color,
  setColor,
  quantity,
  setQuantity,
  addItemToCart,
  handleToggleWishlist,
  isInWishlist,
}) => {
  return (
    <div className="px-4 w-full md:w-1/2">
      <h2 className="mb-2 text-3xl font-bold">{product.name}</h2>
      <p className="mb-4 text-gray-600">{product.category}</p>
      <div className="mb-4">
        {product.newPrice !== 0 ? (
          <>
            <span className="mr-2 text-2xl font-bold">${product.newPrice}</span>
            <span className="text-gray-500 line-through">
              ${product.prevPrice}
            </span>
          </>
        ) : (
          <span className="mr-2 text-2xl font-bold">${product.prevPrice}</span>
        )}
      </div>
      <p className="mb-4 text-gray-700">{product.description}</p>
      <div className="mb-4">
        {product?.quantity > 0 ? (
          <div className="flex gap-2 items-center text-lg font-medium text-green-500">
            <BadgeCheck size={28} />
            IN STOCK
          </div>
        ) : (
          <div className="flex gap-2 items-center text-lg font-medium text-red-500">
            <BadgeAlert size={28} />
            OUT OF STOCK
          </div>
        )}
      </div>
      {product?.colors.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">Color:</h3>
          <div className="flex space-x-2">
            {product.colors.map((c: string) => (
              <button
                key={c}
                className={`${c === color ? "ring-black ring-offset-2 ring-2" : ""} border-black w-8 h-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              ></button>
            ))}
          </div>
        </div>
      )}
      {product?.materials !== "" && (
        <div className="mb-2">
          <h4 className="mb-2 text-lg font-semibold">Materials:</h4>
          <p className="mb-6 text-sm text-gray-700">{product.materials}</p>
        </div>
      )}
      {product?.careInstructions !== "" && (
        <div className="mb-2">
          <h4 className="mb-2 text-lg font-semibold">Care Instructions:</h4>
          <p className="mb-6 text-sm text-gray-700">
            {product.careInstructions}
          </p>
        </div>
      )}
      <div className="flex gap-x-4 items-center">
        <label htmlFor="Quantity">Quantity:</label>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="flex gap-4 my-6">
        <Button
          className="cursor-pointer flex-1/2"
          disabled={product?.quantity === 0}
          onClick={() => {
            addItemToCart(
              product._id,
              quantity,
              color,
              product.prevPrice,
              product.newPrice
            );
            setQuantity(1);
          }}
        >
          <ShoppingCart />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="border-black cursor-pointer flex-1/2"
          onClick={() =>
            handleToggleWishlist(
              product._id,
              product.name,
              product.thumbnail,
              product.newPrice,
              product.prevPrice
            )
          }
        >
          <Heart
            size="size-6"
            color={isInWishlist(product._id) ? "fill" : "none"}
          />
          Wishlist
        </Button>
      </div>
    </div>
  );
};

import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "@/assets/svgs";
import { Link, useNavigate } from "react-router";
import { ImageKit } from "../ui/image";
import type { Id } from "convex/_generated/dataModel";
import { useCart } from "@/hooks/use-carts";
import type { Product } from "@/types/product";
import { useWishlist } from "@/hooks/use-wishlist";

interface ProductCardProps {
  product: Product;
  customStyle?: string;
}

export const ProductCardGrid = ({
  product,
  customStyle = "",
}: ProductCardProps) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addItemToCart } = useCart();
  const navigate = useNavigate();

  const handleToggleWishlist = async (
    productId: Id<"products">,
    name: string,
    image: string,
    newPrice: number,
    prevPrice: number
  ) => {
    await toggleWishlist(productId, name, image, newPrice, prevPrice);
  };

  return (
    <div
      className={`flex relative flex-col gap-y-0 gap-6 py-3 rounded-xl border shadow-none bg-card text-card-foreground ${customStyle} sm:max-w-md`}
    >
      <CardHeader className="px-3">
        <div className="flex absolute left-4 top-8 flex-col gap-y-2">
          {product?.isNew && (
            <div className="px-[14px] py-0.5 text-base font-bold text-center rounded shadow bg-section">
              New
            </div>
          )}

          {product?.newPrice !== 0 && (
            <div className="bg-[#38CB89] text-white text-center px-[14px] py-0.5 font-bold text-base rounded">
              -
              {(
                ((product?.prevPrice - (product?.newPrice as number)) /
                  product?.prevPrice) *
                100
              ).toFixed(0)}
              %
            </div>
          )}
        </div>

        <button
          className="cursor-pointer absolute end-8 top-8 z-25 rounded-full bg-white p-1.5 text-gray-900 transition  shadow hover:text-gray-900/75"
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
          <span className="sr-only">Wishlist</span>
          <Heart color={isInWishlist(product._id) ? "fill" : "none"} />
        </button>
        <Link to={`/products/${product._id}`}>
          <div className="h-[286px]">
            <ImageKit
              src={product.thumbnail}
              alt={product.name}
              className="object-cover w-full h-full rounded-xl"
              transformation={[
                { width: 400, height: 400, crop: "maintain_ratio" },
                { quality: 80, format: "auto" },
              ]}
              loading="lazy"
            />
          </div>
        </Link>
      </CardHeader>
      <Link to={`/products/${product._id}`}>
        <CardContent>
          <CardTitle className="mb-2 text-md line-clamp-1">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {product.description}
          </CardDescription>
        </CardContent>
        <CardContent className="my-3">
          {product.newPrice ? (
            <p className="text-gray-700">
              ${product.newPrice}{" "}
              <span className="text-gray-400 line-through">
                {product.prevPrice}
              </span>
            </p>
          ) : (
            <p className="text-gray-700">${product.prevPrice} </p>
          )}
        </CardContent>
      </Link>
      <CardFooter className="flex gap-x-4 justify-between items-center md:justify-around">
        <Button
          variant="default"
          className="w-[calc(50%-8px)] text-sm font-medium rounded-lg shadow cursor-pinter"
          onClick={() =>
            addItemToCart(
              product._id as Id<"products">,
              1,
              "",
              product.prevPrice,
              product.newPrice
            )
          }
        >
          Add to Cart
        </Button>
        <Button
          variant="secondary"
          className="w-[calc(50%-8px)] text-sm font-medium rounded-lg shadow cursor-pointer"
          onClick={async () => {
            await addItemToCart(
              product._id as Id<"products">,
              1,
              "",
              product.prevPrice,
              product.newPrice
            );
            navigate("/checkout");
          }}
        >
          Buy Now
        </Button>
      </CardFooter>
    </div>
  );
};

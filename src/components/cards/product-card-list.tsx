import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { ImageKit } from "../ui/image";
import type { Id } from "convex/_generated/dataModel";
import { useCart } from "@/hooks/use-carts";
import { Link, useNavigate } from "react-router";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  customStyle?: string;
}

export const ProductCardList = ({
  product,
  customStyle = "",
}: ProductCardProps) => {
  const { addItemToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className={`flex gap-4 p-3 w-full rounded-md border shadow cursor-pointer-none md:p-5 ${customStyle}`}
    >
      <Link to={product._id}>
        <div className="h-full">
          <div className="w-[100px] h-[120px] md:w-[300px] md:h-[200px]">
            <ImageKit
              src={product.thumbnail}
              alt={product.name}
              className="object-cover w-full h-full rounded-xl"
              transformation={[
                { width: 400, height: 200, crop: "at_least" },
                { quality: 80, format: "auto" },
              ]}
              loading="lazy"
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-col flex-1 justify-between my-1">
        <Link to={product._id}>
          <div>
            <CardContent className="px-0">
              <CardTitle className="mb-1 text-base md:mb-2 md:text-lg line-clamp-1">
                {product.name}
              </CardTitle>
              <CardDescription className="text-sm md:text-base line-clamp-1 md:line-clamp-2">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardContent className="px-0 my-2">
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
          </div>
        </Link>
        <CardFooter className="px-0 space-x-4">
          <Button
            variant="default"
            className="px-1.5 md:px-6 py-0 md:py-4 h-7 md:h-8 rounded-lg shadow cursor-pointer"
            onClick={() =>
              addItemToCart(
                product._id as Id<"products">,
                1,
                "",
                product.prevPrice,
                product.newPrice as number
              )
            }
          >
            Add to Cart
          </Button>
          <Button
            variant="secondary"
            className="px-1.5 md:px-6 py-0 md:py-4 h-7 md:h-8 rounded-lg shadow cursor-pointer"
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
    </div>
  );
};

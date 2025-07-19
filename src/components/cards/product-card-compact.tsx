import type { Product } from "@/types/product";
import { CardDescription, CardTitle } from "../ui/card";
import { ImageKit } from "../ui/image";

interface ProductCardProps {
  product: Product;
  customStyle?: string;
}

export const ProductCardCompact = ({
  product,
  customStyle,
}: ProductCardProps) => {
  return (
    <div
      className={`flex gap-4 justify-between items-center p-4 w-full rounded-md border shadow-none ${customStyle}`}
    >
      <div className="flex gap-4">
        <div className="w-16">
          <div className="w-16 h-16">
            <ImageKit
              src={product.thumbnail}
              alt={product.name}
              className="object-cover w-full h-full rounded-md"
              transformation={[
                { width: 400, height: 400, crop: "force" },
                { quality: 80, format: "auto" },
              ]}
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <CardTitle className="mb-1 text-md line-clamp-1">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-1">
            {product.description}
          </CardDescription>
        </div>
      </div>
      <div className="flex-end">
        {product.newPrice ? (
          <p className="text-right text-gray-700">
            ${product.newPrice}{" "}
            <span className="block text-gray-400 line-through">
              ${product.prevPrice}
            </span>
          </p>
        ) : (
          <p className="text-gray-700">${product.prevPrice} </p>
        )}
      </div>
    </div>
  );
};

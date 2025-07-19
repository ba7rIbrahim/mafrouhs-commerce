import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";
import { ImageKit } from "@/components/ui/image";
import { useCart } from "@/hooks/use-carts";
import type { CartItem, CartItemProps } from "@/types/carts";
import { calculateItemPrice, formatCurrency } from "@/utils/cart-utils";
import { X } from "lucide-react";
import { QuantityInput } from "@/components/ui/quantity-input";
import type { Product } from "@/types/product";
import { TableCell, TableRow } from "../ui/table";

const BASE_IMAGE_TRANSFORMATIONS = [
  { width: 400, height: 400, crop: "force" as const },
  { quality: 80, format: "auto" as const },
];

export const CartCheckoutItemCard = ({ item }: CartItemProps) => {
  const { handleIncreaseQuantity, handleDecreaseQuantity, removeItem } =
    useCart();

  const product = useQuery(api.products.getProductById, {
    id: item.productId as Id<"products">,
  });

  const handleIncrease = () => {
    handleIncreaseQuantity(item._id, item.quantity);
  };

  const handleDecrease = () => {
    handleDecreaseQuantity(item._id, item.quantity);
  };

  const handleRemove = () => {
    removeItem(item._id);
  };

  return (
    <TableRow key={item._id}>
      <TableCell>
        <div className="flex gap-3 items-center">
          <ImageKit
            src={product?.thumbnail as string}
            alt={product?.name || "Product image"}
            className="object-cover flex-shrink-0 w-16 h-16 rounded-md bg-section md:w-20 md:h-20"
            transformation={[...BASE_IMAGE_TRANSFORMATIONS]}
            loading="lazy"
          />
          <div className="flex flex-col gap-1">
            <h4 className="font-medium text-gray-900 md:mb-2 text-start line-clamp-1">
              {product?.name || "Loading..."}
            </h4>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-600">Color: </span>
              <CartItemColor color={item.color as string} />
            </div>
            <span className="text-sm text-left text-gray-600">
              Price: $
              {product?.newPrice === 0 ? product?.prevPrice : product?.newPrice}
            </span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <CartItemActions
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      </TableCell>
      <TableCell className="hidden md:flex items-center justify-center mt-6">
        <TotalItemPrice product={product} quantity={item.quantity} />
      </TableCell>
      <TableCell className="text-right">
        <button className="cursor-pointer" onClick={() => removeItem(item._id)}>
          <X />
        </button>
      </TableCell>
    </TableRow>
  );
};

interface CartItemColorProps {
  color: string;
}

const CartItemColor = ({ color }: CartItemColorProps) => (
  <div
    className="w-4 h-4 rounded-full border border-black"
    style={{ backgroundColor: color }}
    aria-label={`Product color: ${color}`}
  />
);

interface CartItemActionsProps {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export const CartItemActions = ({
  item,
  onIncrease,
  onDecrease,
}: CartItemActionsProps) => (
  <QuantityInput
    quantity={item.quantity}
    setQuantity={(newQuantity) => {
      if (newQuantity > item.quantity) {
        onIncrease();
      } else if (newQuantity < item.quantity) {
        onDecrease();
      }
    }}
  />
);

interface CartItemPriceProps {
  product: Product | undefined;
  quantity: number;
}

const TotalItemPrice = ({ product, quantity }: CartItemPriceProps) => {
  if (!product) {
    return <span className="text-lg text-[#121212]">$0.00</span>;
  }

  const price = product.newPrice !== 0 ? product.newPrice : product.prevPrice;
  const totalPrice = calculateItemPrice(price, quantity);

  return (
    <span className="md:text-lg text-[#121212]">
      {formatCurrency(totalPrice)}
    </span>
  );
};

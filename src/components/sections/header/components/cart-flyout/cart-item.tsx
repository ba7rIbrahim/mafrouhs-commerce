import { useQuery } from "convex/react";
import type { Id } from "convex/_generated/dataModel";
import { ImageKit } from "@/components/ui/image";
import { useCart } from "@/hooks/use-carts";
import type { CartItem, CartItemProps } from "@/types/carts";
import { calculateItemPrice, formatCurrency } from "@/utils/cart-utils";
import { Trash2Icon } from "lucide-react";
import { QuantityInput } from "@/components/ui/quantity-input";
import type { Product } from "@/types/product";
import { api } from "@convex/_generated/api";

const BASE_IMAGE_TRANSFORMATIONS = [
  { width: 400, height: 400, crop: "force" as const },
  { quality: 80, format: "auto" as const },
];

export const CartItems = ({ item }: CartItemProps) => {
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
    <div className="flex gap-3 items-start p-3 border-b border-gray-200 transition-colors ">
      <ImageKit
        src={product?.thumbnail as string}
        alt={product?.name || "Product image"}
        className="object-cover flex-shrink-0 w-16 h-16 rounded-md"
        transformation={[...BASE_IMAGE_TRANSFORMATIONS]}
        loading="lazy"
      />

      <div className="flex-1 min-w-0">
        <div className="flex justify-between align-items">
          <h4 className="mb-2 font-medium text-gray-900 line-clamp-1">
            {product?.name || "Loading..."}
          </h4>
          <button
            onClick={handleRemove}
            className="text-red-500 transition-colors cursor-pointer hover:text-red-700 mb-2 ml-4"
            aria-label="Remove item from cart"
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>

        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <CartItemColor color={item.color as string} />
            <CartItemPrice product={product} quantity={item.quantity} />
          </div>

          <CartItemActions
            item={item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        </div>
      </div>
    </div>
  );
};

interface CartItemPriceProps {
  product: Product | undefined;
  quantity: number;
}

const CartItemPrice = ({ product, quantity }: CartItemPriceProps) => {
  if (!product) {
    return <span className="text-sm text-gray-600">$0.00</span>;
  }

  const price = product.newPrice !== 0 ? product.newPrice : product.prevPrice;
  const totalPrice = calculateItemPrice(price, quantity);

  return (
    <span className="text-sm text-gray-600">{formatCurrency(totalPrice)}</span>
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
  <div className="flex gap-2 items-center">
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
    {/* <button
      onClick={onRemove}
      className="p-1 text-red-500 transition-colors hover:text-red-700 cursor-pointer"
      aria-label="Remove item from cart"
    >
      <X className="size-5" />
    </button> */}
  </div>
);

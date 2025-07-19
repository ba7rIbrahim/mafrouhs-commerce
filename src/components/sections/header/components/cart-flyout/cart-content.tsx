import { CartItemsSkeleton } from "@/components/common/skeletons/cart-items-skeleton";
import { NotFoundProductItem } from "@/components/common/feedback/not-found-product-item";
import type { CartContentProps } from "@/types/carts";
import { CartItems } from "./cart-item";

const SKELETON_COUNT = 6;

export const CartContent = ({ cartItems }: CartContentProps) => {
  if (cartItems === undefined) {
    return (
      <div className="space-y-2">
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <CartItemsSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <NotFoundProductItem error="Your cart is empty. Start shopping to add items!" />
    );
  }

  return (
    <div className="space-y-2">
      {cartItems.map((item) => (
        <CartItems key={item._id} item={item} />
      ))}
    </div>
  );
};

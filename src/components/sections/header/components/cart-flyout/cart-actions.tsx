import { Button } from "@/components/ui/button";
import type { CartActionsProps } from "@/types/carts";
import { Link } from "react-router";

export const CartActions = ({ onClose }: CartActionsProps) => (
  <div className="flex flex-col gap-3 pt-4">
    <Link to="/checkout">
      <Button className="w-full" size="lg" onClick={onClose}>
        Proceed to Checkout
      </Button>
    </Link>
    <Link to="/products">
      <Button
        variant="outline"
        className="w-full font-medium"
        onClick={onClose}
      >
        Continue Shopping
      </Button>
    </Link>
  </div>
);

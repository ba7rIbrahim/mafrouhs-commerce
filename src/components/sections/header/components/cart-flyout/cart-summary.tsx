import type { CartSummaryProps } from "@/types/carts";
import { formatCurrency } from "@/utils/cart-utils";

export const CartSummary = ({ subtotal, total }: CartSummaryProps) => (
  <div className="space-y-3 border-t border-gray-200 pt-4">
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">Subtotal</span>
      <span className="font-medium">{formatCurrency(subtotal)}</span>
    </div>
    <div className="flex justify-between text-base font-semibold">
      <span>Total</span>
      <span>{formatCurrency(total)}</span>
    </div>
  </div>
);

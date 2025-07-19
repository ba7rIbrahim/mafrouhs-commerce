import { useCart } from "@/hooks/use-carts";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartCheckoutItemCard } from "@/components/cards/cart-checkout-card";
import { CartSummary } from "../header/components/cart-flyout/cart-summary";
import { useCartTotals } from "@/hooks/use-cart-total";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Spinner } from "@/components/common";
import { toast } from "sonner";
import { steps } from "@/config/steps-data";
import { CartItemsSkeleton } from "@/components/common/skeletons/cart-items-skeleton";
import { NotFoundProductItem } from "@/components/common/feedback/not-found-product-item";

export const CartsCheckout = () => {
  const { cartItems } = useCart();
  const { subtotal, total } = useCartTotals(cartItems);
  const { currentStep, setStep } = useCheckoutStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStep(currentStep + 1);
      setIsLoading(false);
    }, 1000);
  };

  if (cartItems === undefined) {
    return (
      <div className="space-y-2 mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <CartItemsSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[calc(100vh-425px)] md:min-h-[calc(100vh-393px)]">
        <NotFoundProductItem error="Your cart is empty. Start shopping to add items!" />
      </div>
    );
  }
  return (
    <div className="my-8">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Product</TableHead>
            <TableHead className="text-right md:text-center">
              Quantity
            </TableHead>
            <TableHead className="hidden text-right md:block">
              Total Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems?.map((item) => (
            <CartCheckoutItemCard key={item._id} item={item} />
          ))}
        </TableBody>
      </Table>
      <div className="p-6 space-y-4 border-t border-gray-200">
        <CartSummary subtotal={subtotal} total={total} />
      </div>
      <div className="flex justify-end space-x-4 mt-8">
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="default"
          className="w-32"
          disabled={currentStep === steps.length}
          onClick={() => {
            if ((cartItems?.length as number) > 0) {
              handleNextStep();
            } else {
              toast.error("Your cart is empty! Start shopping to add items.");
              return;
            }
          }}
        >
          {isLoading ? (
            <Spinner size="sm" />
          ) : currentStep === steps.length ? (
            "Finish"
          ) : (
            "Next Step"
          )}
        </Button>
      </div>
    </div>
  );
};

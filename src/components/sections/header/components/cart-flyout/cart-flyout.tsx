import { Close } from "@/assets/svgs";
import { useCart } from "@/hooks/use-carts";
import { useToggleFlyoutCart } from "@/stores/toggle-flyout-cart";
import { AnimatePresence, motion } from "motion/react";
import { useCartTotals } from "@/hooks/use-cart-total";
import { CartActions } from "./cart-actions";
import { CartSummary } from "./cart-summary";
import { CartContent } from "./cart-content";

const CART_FLYOUT_VARIANTS = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
} as const;

export const CartFlyout = () => {
  const { isOpen, setIsOpen } = useToggleFlyoutCart();
  const { cartItems } = useCart();
  const { subtotal, total } = useCartTotals(cartItems);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/70"
            onClick={handleClose}
          />

          {/* Cart Panel */}
          <motion.aside
            variants={CART_FLYOUT_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 z-50 w-full max-w-md h-screen bg-white shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Shopping Cart
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full transition-colors hover:bg-gray-100 cursor-pointer"
                  aria-label="Close cart"
                >
                  <Close className="size-5" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 p-6">
                <CartContent cartItems={cartItems} />
              </div>

              <div className="p-6 space-y-4 border-t border-gray-200">
                <CartSummary subtotal={subtotal} total={total} />
                <CartActions onClose={handleClose} />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

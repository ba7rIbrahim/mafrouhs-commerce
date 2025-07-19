import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { ErrorMessage, Spinner } from "@/components/common";
import { ImageKit } from "@/components/ui/image";
import { useCart } from "@/hooks/use-carts";
import { useCartTotals } from "@/hooks/use-cart-total";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/stores/checkout-store";
import { toast } from "sonner";
import { steps } from "@/config/steps-data";
import { useUser } from "@clerk/clerk-react";
import {
  checkoutSchema,
  type CheckoutSchemaTypes,
} from "@/schema/checkout-schema";

export const CheckoutForm = () => {
  const { cartItems } = useCart();
  const { subtotal, total } = useCartTotals(cartItems);
  const { currentStep, setStep } = useCheckoutStore();
  const [isLoading, setIsLoading] = useState(false);

  const removeAllCarts = useMutation(api.carts.removeAllCartsForUser);
  const { user } = useUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckoutSchemaTypes>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit: SubmitHandler<CheckoutSchemaTypes> = async () => {
    setIsLoading(true);
    await removeAllCarts({ userId: user?.id as string });
    setIsLoading(false);
    setStep(currentStep + 1);
    toast.success("Payment successful! Thank you for your purchase.");
  };

  return (
    <div className="bg-white py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 max-md:order-1">
          <h2 className="text-3xl font-semibold text-slate-900">
            Make a payment
          </h2>
          <p className="text-slate-500 text-sm mt-4">
            Complete your transaction swiftly and securely with our easy-to-use
            payment process.
          </p>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Choose your payment method
            </h3>
            <div className="flex flex-wrap gap-4 justify-between mt-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="card"
                />
                <label
                  htmlFor="card"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <ImageKit
                    src="https://readymadeui.com/images/visa.webp"
                    className="w-12"
                    alt="card1"
                    transformation={[
                      { width: 400, height: 400, crop: "maintain_ratio" },
                      { quality: 80, format: "auto" },
                    ]}
                    loading="lazy"
                  />
                  <ImageKit
                    src="https://readymadeui.com/images/american-express.webp"
                    className="w-12"
                    alt="card2"
                    transformation={[
                      { width: 400, height: 400, crop: "maintain_ratio" },
                      { quality: 80, format: "auto" },
                    ]}
                    loading="lazy"
                  />
                  <ImageKit
                    src="https://readymadeui.com/images/master.webp"
                    className="w-12"
                    alt="card3"
                    transformation={[
                      { width: 400, height: 400, crop: "maintain_ratio" },
                      { quality: 80, format: "auto" },
                    ]}
                    loading="lazy"
                  />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="paypal"
                />
                <label
                  htmlFor="paypal"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <ImageKit
                    src="https://readymadeui.com/images/paypal.webp"
                    className="w-20"
                    alt="paypalCard"
                    transformation={[
                      { width: 400, height: 400, crop: "maintain_ratio" },
                      { quality: 80, format: "auto" },
                    ]}
                    loading="lazy"
                  />
                </label>
              </div>
            </div>

            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="flex flex-col gap-1 text-left">
                  <input
                    type="text"
                    placeholder="Cardholder's Name"
                    className="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border border-gray-200 rounded-md focus:border-black focus:bg-transparent outline-0"
                    {...register("cardName")}
                  />
                  {errors.cardName && (
                    <ErrorMessage>{errors.cardName.message}</ErrorMessage>
                  )}
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <div className="flex bg-gray-100 border border-gray-200 rounded-md focus-within:border-black focus-within:bg-transparent overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 ml-3"
                      viewBox="0 0 32 20"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="10"
                        fill="#f93232"
                        data-original="#f93232"
                      />
                      <path
                        fill="#fed049"
                        d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                        className="hovered-path"
                        data-original="#fed049"
                      />
                    </svg>
                    <input
                      placeholder="Card Number"
                      className="px-4 py-3.5 text-slate-900 w-full text-sm outline-0 bg-transparent"
                      {...register("cardNumber")}
                    />
                  </div>
                  {errors.cardNumber && (
                    <ErrorMessage>{errors.cardNumber.message}</ErrorMessage>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 text-left">
                    <input
                      placeholder="EXP."
                      className="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border border-gray-200 rounded-md focus:border-black focus:bg-transparent outline-0"
                      {...register("expire")}
                    />
                    {errors.expire && (
                      <ErrorMessage>{errors.expire.message}</ErrorMessage>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <input
                      placeholder="CVV"
                      className="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border border-gray-200 rounded-md focus:border-black focus:bg-transparent outline-0"
                      {...register("cvv")}
                    />
                    {errors.cvv && (
                      <ErrorMessage>{errors.cvv.message}</ErrorMessage>
                    )}
                  </div>
                </div>
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
                  type="submit"
                  variant="default"
                  className="w-32"
                  disabled={currentStep === steps.length}
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
            </form>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-semibold text-slate-900">
            Summary of purchases
          </h2>
          <ul className="text-slate-500 font-medium mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal{" "}
              <span className="ml-auto font-semibold text-gray-500">
                ${subtotal}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900 border-t border-gray-300 pt-4">
              Total <span className="ml-auto">${total}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

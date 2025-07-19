import { BreadCrumbs } from "@/components/common/breadcrumb";
import {
  CartsCheckout,
  CheckoutForm,
  OrderComplete,
  Steps,
} from "@/components/sections/checkout";
import { useCheckoutStore } from "@/stores/checkout-store";

const breadcrumbsItems = [{ label: "Home", to: "/" }, { label: "Checkout" }];

const CheckoutPage = () => {
  const { currentStep } = useCheckoutStore();

  return (
    <div className="container my-8">
      <BreadCrumbs items={breadcrumbsItems} />
      <div className="space-y-8 text-center">
        <Steps>
          {currentStep === 1 && <CartsCheckout />}
          {currentStep === 2 && <CheckoutForm />}
          {currentStep === 3 && <OrderComplete />}
        </Steps>
      </div>
    </div>
  );
};

export default CheckoutPage;

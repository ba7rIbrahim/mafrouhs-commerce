import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Link } from "react-router";

export const OrderComplete = () => {
  const { setStep } = useCheckoutStore();

  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4 min-h-[324px]">
      <img
        src="/verified.gif"
        alt="check"
        width={130}
        height={130}
        loading="lazy"
      />
      <h2 className="text-xl md:text-2xl text-semibold">
        Payment Successfully!
      </h2>
      <p className="text-sm md:text-base text-gray mt-4">
        Thank you! We truly appreciate you choosing our app.
        <br /> Enjoy your shopping experience
      </p>
      <Link to="/">
        <Button className="mt-6 w-48" onClick={() => setStep(1)}>
          Go To Home
        </Button>
      </Link>
    </div>
  );
};

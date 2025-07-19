import { useToggleFlyoutCart } from "@/stores/toggle-flyout-cart";

export const BagIcon = () => {
  const { setIsOpen } = useToggleFlyoutCart();
  return (
    <div className="relative cursor-pointer">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6.5 md:size-7"
        onClick={() => setIsOpen(true)}
      >
        <path
          d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
          stroke="#141718"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
          stroke="#141718"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute flex -top-1 -right-0.5">
        <span className="absolute inline-flex w-3 h-3 bg-pink-400 rounded-full opacity-75 animate-ping"></span>
        <span className="relative inline-flex w-3 h-3 bg-pink-500 rounded-full"></span>
      </span>
    </div>
  );
};

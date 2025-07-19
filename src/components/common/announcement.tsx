import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const Announcement = () => {
  const [show, setShow] = useState<boolean>(true);

  if (show) {
    return (
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-1.5 text-gray-900">
        <span className="hidden md:block"> </span>
        <p className="text-center text-sm md:text-base font-normal md:font-medium">
          30% off storewide — Limited time!
          <Link
            to="/products"
            className="ml-3 text-blue-500 text-sm md:text-base inline-block underline"
          >
            Shop Now
          </Link>
        </p>

        <button
          type="button"
          aria-label="Dismiss"
          className="cursor-pointer "
          onClick={() => setShow(false)}
        >
          <X size={20} />
        </button>
      </div>
    );
  }
};

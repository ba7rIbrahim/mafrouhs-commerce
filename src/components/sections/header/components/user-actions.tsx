import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import Spinner from "@/components/common/feedback/spinner";
import { CircleUserRound } from "lucide-react";
import { BagIcon, Heart } from "@/assets/svgs";
import { Link } from "react-router";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useWishlist } from "@/hooks/use-wishlist";

export const UserActions = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const hasWelcomed = useRef(false);

  const { wishlist, isLoading } = useWishlist();

  useEffect(() => {
    if (isSignedIn && !hasWelcomed.current) {
      toast.success(`Welcome back, ${user.firstName || "user"}!`);

      hasWelcomed.current = true;
    }
  }, [isSignedIn, user]);

  if (!isLoaded) {
    return (
      <div className="flex items-center space-x-4">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex gap-x-3 items-center md:gap-x-4">
      <SignedOut>
        <Link to="/sign-in">
          <CircleUserRound size={30} />
        </Link>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      {user && (
        <>
          <Link to="/wishlist" className="relative hidden md:block">
            <Heart size="size-7" />

            <span className="flex absolute -top-1 -right-2 justify-center items-center w-4 h-4 text-xs font-semibold text-white bg-black rounded-full opacity-80 select-none">
              {isLoading ? 0 : wishlist?.length}
            </span>
          </Link>
        </>
      )}

      <BagIcon />
    </div>
  );
};

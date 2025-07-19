import { Close, Heart } from "@/assets/svgs";
import { Logo } from "@/components/common";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/config/navigation";
import { useWishlist } from "@/hooks/use-wishlist";
import { useFlyoutMenuStore } from "@/stores/toggle-flyout-menu";
import { UserButton, useUser } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

const menuFlyoutVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

export const MenuFlyout = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { isOpen, setIsOpen } = useFlyoutMenuStore();
  const { wishlist, isLoading } = useWishlist();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            variants={menuFlyoutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 z-50 w-4/5 max-w-sm h-screen"
          >
            <div className="flex flex-col pt-6 h-full bg-white shadow-lg">
              <div className="flex flex-col justify-between items-start h-full">
                <div className="px-4 w-full">
                  <div className="flex justify-between items-center">
                    <Logo />
                    <Close onClick={() => setIsOpen(false)} />
                  </div>
                  <div className="flex flex-col gap-y-6 mt-8">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className="pb-2 text-sm border-b border-gray-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <Link
                    to="/wishlist"
                    className="flex relative justify-between items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-lg font-medium">Wishlist</p>
                    <div className="flex gap-0.5 items-center">
                      <Heart size="size-7" />
                      <span className="flex justify-center items-center w-5 h-5 text-xs font-bold text-white bg-black rounded-full opacity-80 select-none">
                        {isLoading ? 0 : wishlist?.length}
                      </span>
                    </div>
                  </Link>
                  <div className="w-full">
                    {!isLoaded && (
                      <div className="px-4 w-full h-8 bg-gray-200 rounded animate-pulse"></div>
                    )}

                    {isLoaded && (
                      <div className="px-4 pt-4 pb-4 border-t">
                        <Link
                          to="/profile"
                          onClick={() => setIsOpen(false)}
                          className="cursor-pointer hover:bg-gray-50 w-full"
                        >
                          {isSignedIn ? (
                            <div className="flex gap-3">
                              <UserButton />
                              <p className="text-sm font-medium">
                                {user?.fullName} <br />{" "}
                                {user?.primaryEmailAddress?.emailAddress}{" "}
                              </p>
                            </div>
                          ) : (
                            <Link to="/sign-in">
                              <Button className="px-2 w-full">Sign In</Button>
                            </Link>
                          )}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

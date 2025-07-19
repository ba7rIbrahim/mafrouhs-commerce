import { Logo } from "@/components/common";
import { UserActions } from "./components/user-actions";
import { NavigationMenu } from "./components/navigation-menu";
import { MenuFlyout } from "./components/menu-flyout/menu-flyout";
import { Menu } from "lucide-react";
import { useFlyoutMenuStore } from "@/stores/toggle-flyout-menu";
import { CartFlyout } from "./components/cart-flyout/cart-flyout";

export const Header = () => {
  const { setIsOpen } = useFlyoutMenuStore();
  return (
    <header className="relative">
      <div className="container flex justify-between items-center">
        <div className="flex items-center py-4 w-full">
          <div className="flex gap-1 items-center">
            <Menu
              className="block cursor-pointer md:hidden"
              onClick={() => setIsOpen(true)}
            />
            <Logo />
          </div>
          <NavigationMenu
            className="hidden px-4 mx-auto space-x-6 font-semibold md:flex font-heading"
            itemClassName="font-light"
          />
        </div>
        <UserActions />
      </div>
      <MenuFlyout />
      <CartFlyout />
    </header>
  );
};

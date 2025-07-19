import { navigationItems } from "@/config/navigation";
import { Link } from "react-router";

interface NavigationMenuProps {
  className?: string;
  itemClassName?: string;
}

export const NavigationMenu = ({
  className = "",
  itemClassName = "",
}: NavigationMenuProps) => {
  return (
    <nav className={className}>
      {navigationItems.map((item) => (
        <Link key={item.id} to={item.path} className={itemClassName}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

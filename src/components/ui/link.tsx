import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";

interface LinkProps {
  path: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const CustomLink = ({
  path,
  children,
  size = "md",
  className = "",
}: LinkProps) => {
  const sizes = {
    md: "text-medium",
    sm: "text-sm",
    lg: "text-xl",
  };

  const style = `${sizes[size]} ${className} text-sm items-center gap-2 flex items-center justify-between border-b md:flex text-link border-link hover:border-link/80 group pb-1.5`;
  return (
    <Link to={path} className={style}>
      {children}
      <ChevronRightIcon className="ml-1 transition-transform duration-300 size-4 group-hover:translate-x-1" />
    </Link>
  );
};

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router";

type BreadcrumbItemType = {
  label: string;
  to?: string;
  icon?: React.ReactNode;
};

interface BreadCrumbsProps {
  items: BreadcrumbItemType[];
}

export const BreadCrumbs = ({ items }: BreadCrumbsProps) => {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {items.map((item, idx) => (
          <BreadcrumbItem key={idx}>
            {item.to ? (
              <BreadcrumbLink>
                <Link to={item.to}>
                  {item.label === "Home" ? (
                    <HomeIcon size={16} aria-hidden="true" />
                  ) : (
                    item.label
                  )}
                </Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>
                {item.icon}
                {item.label}
              </BreadcrumbPage>
            )}
            {idx < items.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

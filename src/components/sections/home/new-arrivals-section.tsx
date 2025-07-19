import { api } from "@convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { NotFoundProductItem } from "@/components/common/feedback/not-found-product-item";
import { ProductCardGrid } from "@/components/cards/product-card-grid";
import { ProductsSkeletonGrid } from "@/components/common";
import { CustomLink } from "@/components/ui";

export const NewArrivalsSection = () => {
  const { results, isLoading } = usePaginatedQuery(
    api.products.getProducts,
    {
      category: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    },
    {
      initialNumItems: 12,
    }
  );
  const newArrivals = results?.filter((p) => p.isNew) || [];

  return (
    <section className="marginBetweenSections">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl font-medium md:text-4xl">
          New <br /> Arrivals
        </h2>
        <CustomLink path="/products">More Products</CustomLink>
      </div>
      <div className="relative">
        <div>
          {isLoading && (
            <div className="flex overflow-x-scroll gap-5 pr-10 bg-gradient-to-l from-background">
              {Array.from({ length: 10 }).map((_, i) => (
                <ProductsSkeletonGrid
                  key={i}
                  customStyle="min-w-[275px] mb-10"
                />
              ))}
            </div>
          )}

          {!isLoading && newArrivals.length === 0 && (
            <NotFoundProductItem error="" />
          )}

          {!isLoading && newArrivals.length > 0 && (
            <div className="flex overflow-x-scroll gap-5 pr-10 bg-gradient-to-l from-background">
              {newArrivals.map((product) => (
                <ProductCardGrid
                  key={product._id}
                  product={product}
                  customStyle="mb-10  min-w-[275px]"
                />
              ))}
            </div>
          )}
        </div>
        <div className="absolute inset-y-0 top-0 right-0 z-20 w-12 h-full bg-gradient-to-l to-transparent transition-opacity duration-200 pointer-events-none from-background"></div>
      </div>
    </section>
  );
};

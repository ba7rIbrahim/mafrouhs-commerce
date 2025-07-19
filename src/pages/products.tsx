import { useEffect } from "react";
import { api } from "@convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { Link, useSearchParams } from "react-router";
import { useFilterProducts, type CategoryType } from "@/stores/filter";
import { useViewModeStore } from "@/stores/view-mode";
import {
  ProductCardCompact,
  ProductCardGrid,
  ProductCardList,
} from "@/components/cards";
import {
  NotFoundProductItem,
  ProductsSkeletonCompact,
  ProductsSkeletonGrid,
  ProductsSkeletonList,
} from "@/components/common";
import {
  LoadMoreButton,
  ProductFilter,
  ProductHeader,
  ViewLayouts,
} from "@/components/sections/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const { viewMode } = useViewModeStore();
  const { category, setCategory, minPrice, maxPrice } = useFilterProducts();

  useEffect(() => {
    const selectedCategory = searchParams.get("category");
    if (selectedCategory) {
      setCategory(selectedCategory as CategoryType);
    }
  }, [searchParams, setCategory]);

  const { results, status, isLoading, loadMore } = usePaginatedQuery(
    api.products.getProducts,
    {
      category: category,
      minPrice: minPrice,
      maxPrice: maxPrice,
    },
    {
      initialNumItems: 12,
    }
  );

  return (
    <div className="container">
      <ProductHeader />
      <div className="flex flex-col gap-8 justify-between items-start md:flex-row">
        <ProductFilter />
        <ViewLayouts />
      </div>

      {!isLoading && results?.length === 0 && <NotFoundProductItem error="" />}

      <div className="mt-12">
        {viewMode === "grid" && (
          <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {status === "LoadingFirstPage" &&
              Array.from({ length: 9 }).map((_, i) => (
                <ProductsSkeletonGrid key={i} />
              ))}
            {results?.map((product) => (
              <ProductCardGrid key={product._id} product={product} />
            ))}
          </div>
        )}

        {viewMode === "list" && (
          <div className="flex flex-col gap-4">
            {isLoading &&
              Array.from({ length: 10 }).map((_, i) => (
                <ProductsSkeletonList key={i} />
              ))}
            {results.map((product) => (
              <ProductCardList key={product._id} product={product} />
            ))}
          </div>
        )}

        {viewMode === "compact" && (
          <div className="flex flex-col gap-2">
            {isLoading &&
              Array.from({ length: 10 }).map((_, i) => (
                <ProductsSkeletonCompact key={i} />
              ))}
            {results?.map((product) => (
              <Link to={product._id} key={product._id}>
                <ProductCardCompact key={product._id} product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <LoadMoreButton status={status} onClick={() => loadMore(6)} />
    </div>
  );
};

export default Products;

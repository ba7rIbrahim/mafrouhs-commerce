import { Skeleton } from "./skeleton";

export const ProductsSkeletonCompact = () => {
  return (
    <div className="w-full h-[98px] animate-pulse bg-gray-200 rounded-xl p-5 flex flex-row gap-x-8 items-center">
      <div className="h-full w-18">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col flex-1 justify-between my-2 gap-y-4">
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-6" />
      </div>
      <Skeleton className="w-12 h-4" />
    </div>
  );
};

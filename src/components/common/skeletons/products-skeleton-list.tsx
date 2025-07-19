import { Skeleton } from "./skeleton";

export const ProductsSkeletonList = () => {
  return (
    <div className="w-full h-[180px] md:h-[240px] animate-pulse bg-gray-200 rounded-xl p-5 flex flex-row gap-x-8">
      <div className="h-full w-1/3">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-between my-2 gap-y-4 flex-1">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <div className="flex gap-x-4 justify-between items-center">
          <Skeleton className="w-1/2 h-8" />
          <Skeleton className="w-1/2 h-8" />
        </div>
      </div>
    </div>
  );
};

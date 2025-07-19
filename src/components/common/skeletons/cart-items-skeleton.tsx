import { Skeleton } from "./skeleton";

export const CartItemsSkeleton = () => (
  <div className="w-full h-[80px] animate-pulse bg-gray-200 rounded p-3 flex flex-row gap-x-4">
    <div className="h-full w-[100px]">
      <Skeleton className="w-full h-full" />
    </div>
    <div className="flex flex-col justify-between my-2 gap-y-2 flex-1">
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-3/4 h-4" />
    </div>
  </div>
);

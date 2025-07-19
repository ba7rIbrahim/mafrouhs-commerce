import { Skeleton } from "./skeleton";

export const WishlistSkeleton = () => {
  return (
    <div className="w-full h-[120px] animate-pulse bg-gray-200 rounded-md p-3 flex flex-row gap-x-4">
      <div className="h-full w-[100px]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-between my-2 gap-y-1 flex-1">
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-3/4 h-6" />
      </div>
    </div>
  );
};

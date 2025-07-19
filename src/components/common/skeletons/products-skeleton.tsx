import { Skeleton } from "./skeleton";

export const ProductsSkeleton = () => {
  return (
    <div className="w-full h-[484px] animate-pulse bg-gray-200 rounded-xl p-6 flex flex-col justify-between gap-y-8">
      <div className="h-full">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <div className="flex gap-4 justify-between items-center mt-8">
          <Skeleton className="w-1/2 h-8" />
          <Skeleton className="w-1/2 h-8" />
        </div>
      </div>
    </div>
  );
};

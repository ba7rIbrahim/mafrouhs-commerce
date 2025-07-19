import { Skeleton } from "./skeleton";

export const AuthPageSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-200 h-[420px] w-[350px] p-8 flex flex-col items-center gap-6 rounded-md">
      <Skeleton className="w-32 h-6" />
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full h-6 mt-24" />
      <Skeleton className="w-48 h-6" />
      <Skeleton className="w-full h-6" />
    </div>
  );
};

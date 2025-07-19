import { Skeleton } from "./skeleton";

export const UserProfileSkeleton = () => {
  return (
    <div className="bg-gray-200 w-[700px] mx-auto my-10 animate-pulse h-[600px] flex gap-4 rounded-md">
      <div className="flex-col justify-between hidden w-1/2 p-6 md:flex md:w-1/4">
        <div className="space-y-4">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6 mt-10" />
          <Skeleton className="w-full h-6" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-6" />
        </div>
      </div>
      <div className="p-6 space-y-6">
        <Skeleton className="h-6 w-72" />
        <div className="flex items-center flex-1 gap-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse" />
          <Skeleton className="h-6 w-52" />
        </div>
        <div className="flex flex-col items-start gap-4 mt-20">
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-6" />
        </div>
        <div className="flex flex-col items-start gap-4 mt-20">
          <Skeleton className="h-8 w-72" />
          <Skeleton className="h-6 w-52" />
        </div>
      </div>
    </div>
  );
};

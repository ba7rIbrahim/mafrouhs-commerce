import { Suspense } from "react";
import Spinner from "./feedback/spinner";

interface SuspenseWrapperProps {
  children: React.ReactNode;
  fullScreen?: boolean;
  className?: string;
}

export const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  children,
  fullScreen = true,
  className,
}) => {
  return (
    <Suspense
      fallback={
        <div
          className={`${fullScreen ? "h-screen" : "h-auto"} flex justify-center items-center w-full ${className}`}
        >
          <Spinner size="icon" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

import { Spinner } from "@/components/common";
import { Button } from "@/components/ui";

interface LoadMoreButtonProps {
  status: string;
  onClick: () => void;
  disabledStatuses?: string[];
  className?: string;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  status,
  onClick,
  disabledStatuses = ["LoadingMore", "LoadingFirstPage"],
  className = "",
}) => {
  const isLoading = status === "LoadingMore";
  const isDisabled = disabledStatuses.includes(status);
  if (status !== "Exhausted") {
    return (
      <div className="mt-8 w-full text-center">
        <Button
          variant="outline"
          className={`w-48 rounded-full shadow cursor-pointer ${className}`}
          size="lg"
          disabled={isDisabled}
          onClick={onClick}
        >
          {isLoading ? <Spinner /> : "Load More"}
        </Button>
      </div>
    );
  }
};

import { ShoppingCart } from "lucide-react";

export const NotFoundProductItem = ({ error }: { error: string }) => {
  return (
    <div className="space-y-4 text-center mt-8">
      <div className={`w-full max-w-md mx-auto`}>
        <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-sm">
            <ShoppingCart className="w-12 h-12" />
          </div>

          <h3 className="text-lg font-semibold text-center text-gray-900">
            Product Not Found
          </h3>

          <p className="max-w-sm text-sm leading-relaxed text-gray-600">
            {error ||
              "The product you're looking for is no longer available or has been moved."}
          </p>

          {/* <Button
            variant="outline"
            className="flex items-center gap-2 mt-0 hover:bg-white"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button> */}
        </div>
      </div>
    </div>
  );
};

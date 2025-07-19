import { X } from "lucide-react";
import { NotFoundProductItem } from "@/components/common/feedback/not-found-product-item";
import { WishlistSkeleton } from "@/components/common/skeletons/wishlists-skeleton";
import { ImageKit } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-carts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BreadCrumbs } from "@/components/common/breadcrumb";

const breadcrumbsItems = [{ label: "Home", to: "/" }, { label: "Wishlist" }];

const WishlistPage = () => {
  const { wishlist, isLoading, empty, removeFromWishlist } = useWishlist();
  const { addItemToCart } = useCart();

  if (wishlist && empty) {
    return (
      <div className="container mt-4 min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-256px)]">
        <BreadCrumbs items={breadcrumbsItems} />
        <div className="container flex flex-col justify-center item-center">
          <h2 className="w-full text-2xl font-medium text-center">
            Your Wishlist
          </h2>
          <NotFoundProductItem error="Your wishlist is empty. Start shopping to add wishlist items!" />
        </div>
      </div>
    );
  }

  return (
    <div className="container my-8 min-h-[calc(100vh-272px)]">
      {isLoading && (
        <div className="flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <WishlistSkeleton key={i} />
          ))}
        </div>
      )}

      {wishlist && wishlist.length > 0 && (
        <div className="flex flex-col gap-4">
          <BreadCrumbs items={breadcrumbsItems} />
          <h2 className="mb-10 text-2xl font-medium text-center">
            Your Wishlist
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Product</TableHead>
                <TableHead className="hidden md:block">Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wishlist?.map((w) => (
                <TableRow key={w._id}>
                  <TableCell>
                    <div className="flex gap-3 items-center">
                      <button
                        className="cursor-pointer"
                        onClick={() => removeFromWishlist(w.productId)}
                      >
                        <X />
                      </button>
                      <ImageKit
                        src={w.image as string}
                        alt={w.name}
                        className="object-cover w-16 h-16 rounded md:w-24 md:h-24"
                        transformation={[
                          { width: 400, height: 400, crop: "force" },
                          { quality: 80, format: "auto" },
                        ]}
                        loading="lazy"
                      />
                      <div className="flex flex-col gap-y-2 justify-center">
                        <h4 className="text-sm font-medium text-black md:text-base">
                          {w.name}
                        </h4>
                        <span className="text-sm text-gray">
                          Price: ${w.newPrice === 0 ? w.prevPrice : w.newPrice}
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="hidden mt-10 md:block">
                    <div>
                      {new Date(w._creationTime).toLocaleString(undefined, {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      onClick={() =>
                        addItemToCart(
                          w.productId,
                          1,
                          "",
                          w.prevPrice,
                          w.newPrice
                        )
                      }
                    >
                      Add to cart
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

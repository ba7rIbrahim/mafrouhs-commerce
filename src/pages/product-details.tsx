import { useEffect, useState } from "react";
import { api } from "@convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams } from "react-router";
import { useCart } from "@/hooks/use-carts";
import { BreadCrumbs } from "@/components/common/breadcrumb";
import { Spinner } from "@/components/common";
import { NotFoundProductItem } from "@/components/common/feedback/not-found-product-item";
import { useProductSelection } from "@/stores/user-items";
import { useWishlist } from "@/hooks/use-wishlist";
import { useReviews } from "@/hooks/use-reviews";
import type { Tabs } from "@/components/sections/product-details/ProductTabs";
import type { AdditionalInfoProps } from "@/components/sections/product-details/product-extra-info/additional-info";
import type { QuestionProps } from "@/components/sections/product-details/product-extra-info/questions-list";
import {
  ProductImages,
  ProductInfo,
  ProductTabs,
  ReviewsSection,
  AdditionalInfoList,
  QuestionsList,
} from "@/components/sections/product-details";
//

//

const ProductDetails = () => {
  const [tab, setTab] = useState<Tabs>("reviews");
  const { color, setColor, quantity, setQuantity } = useProductSelection();
  const { id } = useParams();
  const product = useQuery(
    api.products.getProductById,
    id ? { id: id as Id<"products"> } : "skip"
  );
  const { allReviews } = useReviews(product?._id as Id<"products">);
  const totalReviews = allReviews?.length || 0;
  const breadcrumbsItems = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: product?.name as string },
  ];
  const { toggleWishlist, isInWishlist: _isInWishlist } = useWishlist();
  const isInWishlist = (id: Id<"products">) => {
    const result = _isInWishlist(id);
    return typeof result === "boolean" ? result : false;
  };
  const handleToggleWishlist = async (
    productId: Id<"products">,
    name: string,
    image: string,
    newPrice: number,
    prevPrice: number
  ) => {
    await toggleWishlist(productId, name, image, newPrice, prevPrice);
  };
  const { addItemToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(
    product?.thumbnail as string
  );
  const images = [product?.thumbnail, ...(product?.images || [])] as string[];
  useEffect(() => {
    if (product?.colors?.length) setColor(product?.colors[0] as string);
    if (product?.thumbnail) {
      setSelectedImage(product.thumbnail);
    }
  }, [product?.colors, product?.thumbnail, setColor]);
  if (product === undefined) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Spinner size="icon" />
      </div>
    );
  }
  if (product === null) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <NotFoundProductItem error="" />
      </div>
    );
  }
  return (
    <div className="container">
      <BreadCrumbs items={breadcrumbsItems} />
      <div className="px-4 py-8 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <ProductImages
            images={images}
            selectedImage={selectedImage}
            onSelect={setSelectedImage}
          />
          <ProductInfo
            product={product}
            color={color}
            setColor={setColor}
            quantity={quantity}
            setQuantity={setQuantity}
            addItemToCart={addItemToCart}
            handleToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        </div>
        <ProductTabs
          tab={tab}
          setTab={setTab}
          totalReviews={totalReviews}
          children={{
            reviews: <ReviewsSection productId={product._id} />,
            questions: (
              <QuestionsList
                items={product.question ?? ([] as QuestionProps[])}
              />
            ),
            additionInfo: (
              <AdditionalInfoList
                items={product.addition_info ?? ([] as AdditionalInfoProps[])}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;

import { BreadCrumbs } from "@/components/common/breadcrumb";

const breadcrumbsItems = [{ label: "Home", to: "/" }, { label: "products" }];

export const ProductHeader = () => {
  return (
    <div className="relative z-30 flex flex-col items-center justify-center gap-4 mt-4 mb-10 min-h-[392px]">
      <div className="bg-[url(/images/product-header.webp)] bg-cover bg-center h-full w-full absolute opacity-65"></div>
      <div className="flex z-30 flex-col justify-center items-center">
        <BreadCrumbs items={breadcrumbsItems} />
        <h3 className="mb-4 text-5xl">Product Page</h3>
        <p className="text-xl text-center">
          Let&apos;s design the place you always imagined.
        </p>
      </div>
    </div>
  );
};

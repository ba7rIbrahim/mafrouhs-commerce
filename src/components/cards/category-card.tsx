import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CustomLink } from "../ui/link";

interface CategoryCardProp {
  title: string;
  imageSrc: string;
  isLarge?: boolean;
}

export const CategoryCard = ({
  title,
  imageSrc,
  isLarge = false,
}: CategoryCardProp) => {
  return (
    <div
      className={`${isLarge ? "flex-col" : "items-end"} h-full flex justify-between p-10 shadow bg-section`}
    >
      <div className="flex flex-col gap-y-2">
        <h5 className="text-2xl font-medium md:text-4xl">{title}</h5>
        <CustomLink path={`/products?category=${encodeURIComponent(title)}`} className="w-fit">
          Shop now
        </CustomLink>
      </div>
      <div className={``}>
        <LazyLoadImage
          src={imageSrc}
          alt="Wardrobe"
          className={`${imageSrc !== "/src/assets/images/sofa-02.webp" ? "max-h-[250px]" : ""} h-full w-full`}
          effect="blur"
        />
      </div>
    </div>
  );
};

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CustomLink } from "@/components/ui/link";

export const SaleSection = () => {
  return (
    <section className="marginBetweenSections">
      <div className="flex flex-col md:flex-row">
        <div className="w-full flex-1/2 h-[532px]">
          <LazyLoadImage
            src="/images/hero-02.webp"
            effect="blur"
            className="object-cover w-full h-full md:h-[532px]"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 p-12 flex-1/2 bg-section h-[532px] -mt-2 md:-mt-0">
          <span className="text-base font-bold text-blue-500">
            SALE UP TO 35% OFF
          </span>
          <h4 className="text-4xl font-medium text-link">
            HUNDREDS of <br /> New lower prices!
          </h4>
          <p>
            It&apos;s more affordable than ever to give every room in your home
            a stylish makeover
          </p>
          <CustomLink path="/checkout">Shop Now</CustomLink>
        </div>
      </div>
    </section>
  );
};

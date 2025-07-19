import { CustomLink } from "@/components/ui/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const ContactUsFeature = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full flex-1/2 h-[365px]">
        <LazyLoadImage
          src="/images/hero-02.webp"
          effect="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start md:h-[365px] -mt-2 md:mt-0 justify-center gap-4 p-12 flex-[100%]  md:flex-1/2 bg-section">
        <h4 className="text-4xl font-medium text-link">About Us</h4>
        <p>
          MAFROUSH is a gift & decorations store based in Baghdad, Iraq. Est
          since 2019. Our customer service is always prepared to support you
          24/7
        </p>
        <CustomLink path="/products">Shop Now</CustomLink>
      </div>
    </div>
  );
};

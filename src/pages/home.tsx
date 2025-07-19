import {
  CallToActionSection,
  CategoriesSection,
  FeaturesSection,
  HeroSection,
  NewArrivalsSection,
  SaleSection,
} from "@/components/sections/home";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const Home = () => {
  return (
    <>
      <div className="container">
        <HeroSection />
        <CategoriesSection />
        <NewArrivalsSection />
        <FeaturesSection />
      </div>

      <LazyLoadComponent>
        <SaleSection />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <div className="container">
          <CallToActionSection />
        </div>
      </LazyLoadComponent>
    </>
  );
};

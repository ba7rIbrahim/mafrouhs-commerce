import Sofa from "@/assets/images/sofa-02.webp";
import Wardrobe from "@/assets/images/wardrobe.webp";
import Toaster from "@/assets/images/toaster.webp";
import { CategoryCard } from "@/components/cards";

export const CategoriesSection = () => {
  return (
    <section className="marginBetweenSections">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <CategoryCard title="Living Room" imageSrc={Sofa} isLarge={true} />
        </div>
        <div className="flex flex-col gap-y-8 w-full max-h-full lg:w-1/2">
          <div className="h-1/2">
            <CategoryCard title="Bedroom" imageSrc={Wardrobe} />
          </div>
          <div className="h-1/2">
            <CategoryCard title="Kitchen" imageSrc={Toaster} />
          </div>
        </div>
      </div>
    </section>
  );
};

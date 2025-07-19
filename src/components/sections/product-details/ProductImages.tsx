import { Lens } from "@/components/magicui/lens";
import { ImageKit } from "@/components/ui/image";
import React from "react";

interface ProductImagesProps {
  images: string[];
  selectedImage: string;
  onSelect: (img: string) => void;
}

export const ProductImages: React.FC<ProductImagesProps> = ({
  images,
  selectedImage,
  onSelect,
}) => {
  return (
    <div className="px-4 mb-8 w-full md:w-1/2 lg:w-2/5">
      {images.map((image) => {
        if (image === selectedImage)
          return (
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
              key={image}
            >
              <ImageKit
                src={image}
                alt={image}
                className="object-cover mb-4 w-full h-96 rounded-lg"
                transformation={[
                  { width: 600, height: 400, crop: "force" },
                  { quality: 80, format: "auto" },
                ]}
                loading="lazy"
              />
            </Lens>
          );
      })}
      <div className="flex overflow-x-auto gap-4 justify-center py-4">
        {images.map((image, index) => (
          <button key={image} onClick={() => onSelect(image)}>
            <ImageKit
              src={image}
              alt={`Thumbnail ${index}`}
              className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-300 ${
                selectedImage === image
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
              transformation={[
                { width: 80, height: 80, crop: "force" },
                { quality: 80, format: "auto" },
              ]}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

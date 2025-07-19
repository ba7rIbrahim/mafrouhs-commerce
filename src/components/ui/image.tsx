import { Image, ImageKitProvider, type IKImageProps } from "@imagekit/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const ImageKit = ({ src, alt, className, ...props }: IKImageProps) => {
  const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;

  if (!urlEndpoint) {
    return (
      <LazyLoadImage
        src={src}
        alt={alt}
        className={className}
        effect="blur"
        {...props}
      />
    );
  }

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <Image src={src} alt={alt} className={className} {...props} />
    </ImageKitProvider>
  );
};

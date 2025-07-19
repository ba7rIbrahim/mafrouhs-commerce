import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "@/index.css";

export const HeroSection = () => {
  return (
    <section className="mb-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/images/hero.webp"
            alt="Hero 1 Image"
            className="object-center w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/hero-02.webp"
            alt="Hero 2 Image"
            className="object-center w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/hero-03.webp"
            alt="Hero 3 Image"
            className="object-center w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col gap-6 justify-between items-start mt-8 md:items-center md:gap-0 md:flex-row">
        <h1 className="flex-1 text-5xl font-medium md:text-4xl lg:text-5xl">
          Simply Unique/ <br /> Simply Better.
        </h1>
        <p className="text-base text-gary md:w-sm lg:w-md xl:w-lg md:text-lg">
          <b className="text-black">MAFROUSH</b> is a gift & decorations store
          based in Baghdad, Iraq. Est since 2019.{" "}
        </p>
      </div>
    </section>
  );
};

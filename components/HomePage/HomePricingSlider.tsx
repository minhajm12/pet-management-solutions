"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { Icons } from "../common/Icons";
import HomePricingCardItem from "./HomePricingCardItem";

export type HomePricingItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  durationMinutes: number;
  eligibility: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  isRecomended: boolean;
};

export const homePricingData: HomePricingItem[] = [
  {
    id: "heaven-scent",
    title: "Heaven Scent Package",
    subtitle: "Bath & Brush Essentials",
    price: 29,
    originalPrice: 39,
    durationMinutes: 60,
    eligibility: "Dogs Needing Full Pampering",
    features: [
      "Bath & blow dry",
      "Nail trimming",
      "Ear cleaning",
    ],
    buttonText: "Book Now",
    buttonUrl: "/pricing/heaven-scent",
    isRecomended: false,
  },
  {
    id: "extra-large-breed",
    title: "Extra Large Breed",
    subtitle: "Signature Full Groom",
    price: 59,
    originalPrice: 75,
    durationMinutes: 60,
    eligibility: "Dogs Needing Full Pampering",
    features: [
      "Bath & blow dry",
      "Nail trimming",
      "Ear cleaning",
    ],
    buttonText: "Book Now",
    buttonUrl: "/pricing/extra-large-breed",
    isRecomended: true,
  },
  {
    id: "spa-package",
    title: "Spa Package",
    subtitle: "Luxury Spa Experience",
    price: 89,
    originalPrice: 110,
    durationMinutes: 60,
    eligibility: "Dogs Needing Full Pampering",
    features: [
      "Bath & blow dry",
      "Nail trimming",
      "Ear cleaning",
    ],
    buttonText: "Book Now",
    buttonUrl: "/pricing/spa-package",
    isRecomended: false,
  },
];

export default function HomePricingSlider() {

  const swiperRef = useRef<any>(null);

  const settings = {
    modules: [Autoplay],
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 500,
    loop: true,
    // margin: 20,
    spaceBetween: 20,
    // allowTouchMove: !isMobile,
    breakpoints: {
      0: { slidesPerView: 1, },
      600: { slidesPerView: 2, spaceBetween: 10, },
      1024: { slidesPerView: 3, },
      1200: { slidesPerView: 3, },
    },
    onBeforeInit: (swiper: any) => {
      swiperRef.current = swiper;
    },
  };

  const goToPrev = () => swiperRef.current?.slidePrev();
  const goToNext = () => swiperRef.current?.slideNext();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <Swiper ref={swiperRef} {...settings}
          className="w-full !overflow-visible md:!overflow-hidden py-4"
        >
          {homePricingData.map((pkg) => (
            <SwiperSlide key={pkg.id} className="!h-auto flex">
              <HomePricingCardItem item={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Slider Navigation Controls */}
      <div className="flex justify-center gap-2 z-3 w-full lg:mt-[30px] mt-[20px]">
        <button
          type="button"
          onClick={goToPrev}
          title="Previous Stylist"
          aria-label="Previous Stylist"
          className="custm-slider-prev bg-white hover:bg-black text-black hover:text-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer border border-black duration-200 transition-all group"
        >
          <Icons.Slider_Arrow className="fill-black group-hover:fill-white common-transition" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          title="Next Stylist"
          aria-label="Next Stylist"
          className="custm-slider-next bg-white hover:bg-black text-black hover:text-white rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer border border-black duration-200 transition-all group"
        >
          <Icons.Slider_Arrow className="fill-black group-hover:fill-white rotate-180 common-transition" />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { Icons } from "../common/Icons";
import MainBtn from "../common/MainBtn";

export type GroomerItemData = {
  id: string;
  name: string;
  designation: string;
  experience: number;
  rating: number;
  image: string;
  bookingUrl: string;
};

export const groomersData: GroomerItemData[] = [
  {
    id: "chloe-harrison",
    name: "Chloe Harrison",
    designation: "Master Groomer",
    experience: 8,
    rating: 4.9,
    image: "/assets/img/groomers/groomer-img-1.jpg",
    bookingUrl: "/book-stylist",
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    designation: "Breed Stylist",
    experience: 6,
    rating: 4.8,
    image: "/assets/img/groomers/groomer-img-2.jpg",
    bookingUrl: "/book-stylist",
  },
  {
    id: "olivia-bennett",
    name: "Olivia Bennett",
    designation: "Puppy Groomer",
    experience: 3,
    rating: 4.7,
    image: "/assets/img/groomers/groomer-img-3.jpg",
    bookingUrl: "/book-stylist",
  },
  {
    id: "ethan-mitchell",
    name: "Ethan Mitchell",
    designation: "Senior Pet Stylist",
    experience: 5,
    rating: 4.9,
    image: "/assets/img/groomers/groomer-img-1.jpg",
    bookingUrl: "/book-stylist",
  },
];

export default function GroomerSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const settings = {
    modules: [Autoplay],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 500,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    onBeforeInit: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  const goToPrev = () => swiperRef.current?.slidePrev();
  const goToNext = () => swiperRef.current?.slideNext();

  return (
    <div className="w-full flex flex-col items-center">
      {/* Groomer Swiper Slider */}
      <div className="w-full">
        <Swiper {...settings} className="w-full !overflow-hidden py-1 my-[40px]">
          {groomersData.map((groomer) => (
            <SwiperSlide key={groomer.id} className="!h-auto flex">
              <article
                className="group/card relative w-full h-[480px] sm:h-[510px] md:h-[530px] rounded-[28px] overflow-hidden bg-neutral-100 select-none"
                aria-label={`${groomer.name} - ${groomer.designation}`}
              >
                {/* Background Groomer Image with Hover Zoom */}
                <Image
                  src={groomer.image}
                  alt={groomer.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover common-transition group-hover/card:scale-110 pointer-events-none"
                />

                {/* Overlapping Floating White Information Panel */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 bg-white rounded-[22px] sm:rounded-[24px] p-4 sm:p-5 flex flex-col gap-3.5 sm:gap-4 shadow-sm">
                  {/* Top Row: Name, Verified Badge, Designation, and Black Circular Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-google-sans text-[18px] md:text-[26px] font-semibold text-black leading-tight truncate">
                          {groomer.name}
                        </h3>
                        <Icons.GroomerVerified_Icon className="shrink-0" />
                      </div>
                      <p className="font-poppins text-[14px] md:text-[18px] text-black font-normal leading-tight">
                        {groomer.designation}
                      </p>
                    </div>

                    <div
                      className="size-[50px] rounded-full bg-black flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <Icons.Groomer_Icon className="size-[24px]" />
                    </div>
                  </div>

                  {/* Bottom Row: Experience, Rating, and Book Stylist Button */}
                  <div className="flex items-end justify-between gap-2 pt-1 border-t border-gray-100 sm:border-0 sm:pt-0">
                    <div className="flex gap-[40px]">
                      {/* Experience Information */}
                      <div className="flex flex-col shrink-0">
                        <span className="font-google-sans text-[16px] md:text-[26px] font-bold text-black leading-tight">
                          {groomer.experience}+
                        </span>
                        <span className="mt-1 font-poppins font-medium text-[12px] sm:text-[14px] text-black leading-[14px]">
                          Years Of<br />Experience
                        </span>
                      </div>

                      {/* Rating Information */}
                      <div className="flex flex-col shrink-0">
                        <div className="flex items-center gap-1">
                          <Icons.GroomerStar_Icon className="shrink-0 mb-0.5" />
                          <span className="font-google-sans text-[16px] md:text-[26px] font-bold text-black leading-tight">
                            {groomer.rating.toFixed(1)}
                          </span>
                        </div>
                        <span className="mt-1 font-poppins font-medium text-[12px] sm:text-[14px] text-black leading-[14px]">
                          Pet Parents<br />Rating
                        </span>
                      </div>
                    </div>

                    {/* Book Stylist Button */}
                    <div className="shrink-0">
                      <MainBtn
                        text="Book Stylist"
                        url={groomer.bookingUrl}
                        btnType="fill"
                        bookIcon={true}
                        className="!px-3 sm:!px-4 !py-2 !text-[14px] sm:!text-[16px] !gap-3 sm:!gap-4 whitespace-nowrap"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Slider Navigation Controls */}
      <div className="flex justify-center gap-2 z-3 w-full">
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


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestimonialsItems from "./TestimonialsItems";
import { useEffect, useRef, useState } from "react";

export type TestimonialItemData = {
  id: string;
  rating: number;
  quote: string;
  customerName: string;
  petName: string;
  petBreed: string;
  service: string;
};

export const testimonialsData: TestimonialItemData[] = [
  {
    id: "james-max",
    rating: 4,
    quote:
      "Max was leaving fur on everything. After his bath, his coat felt so soft and there was much less hair on the sofa. Really pleased with the result.",
    customerName: "James Miller",
    petName: "Max",
    petBreed: "Labrador",
    service: "De-Shedding Bath",
  },
  {
    id: "sophie-luna",
    rating: 4,
    quote:
      "I asked for a short trim but wanted to keep Luna’s fluffy ears. They got it just right! She smelled lovely, and I could finally see her eyes again.",
    customerName: "Sophie Bennett",
    petName: "Luna",
    petBreed: "Shih Tzu",
    service: "Full Groom & Trim",
  },
  {
    id: "daniel-milo",
    rating: 4,
    quote:
      "Milo hates having his paws touched, so nail trims are usually a struggle. The team was patient and had him done in no time. Such a relief for us.",
    customerName: "Daniel Brooks",
    petName: "Milo",
    petBreed: "Beagle",
    service: "Nail Trim & Paw Care",
  },
  {
    id: "olivia-daisy",
    rating: 4,
    quote:
      "Daisy has sensitive skin, so I brought her usual shampoo. They were happy to use it and gave her a gentle wash. She came home soft and comfortable.",
    customerName: "Olivia Hayes",
    petName: "Daisy",
    petBreed: "Cocker Spaniel",
    service: "Gentle Bath & Brush",
  },
  {
    id: "noah-teddy",
    rating: 4,
    quote:
      "Teddy had a few tangles around his ears. The team handled him gently and tidied his coat without taking too much fur off. He was happy afterwards!",
    customerName: "Noah Williams",
    petName: "Teddy",
    petBreed: "Golden Retriever",
    service: "Bath & Brush",
  },
  {
    id: "noah-teddy",
    rating: 4,
    quote:
      "Teddy had a few tangles around his ears. The team handled him gently and tidied his coat without taking too much fur off. He was happy afterwards!",
    customerName: "Noah Williams",
    petName: "Teddy",
    petBreed: "Golden Retriever",
    service: "Bath & Brush",
  },
  {
    id: "noah-teddy",
    rating: 4,
    quote:
      "Teddy had a few tangles around his ears. The team handled him gently and tidied his coat without taking too much fur off. He was happy afterwards!",
    customerName: "Noah Williams",
    petName: "Teddy",
    petBreed: "Golden Retriever",
    service: "Bath & Brush",
  },
];

export default function TestimonialSlider() {
  // Repeating dataset to ensure seamless infinite looping with fractional slidesPerView
  const sliderItems = [...testimonialsData, ...testimonialsData];

  const swiperRef = useRef<any>(null);
  const [slidesPerView, setSlidesPerView] = useState(3); // default (desktop)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      setIsMobile(width < 600);
      if (width < 600) setSlidesPerView(1);
      else if (width < 1024) setSlidesPerView(2);
      else if (width < 1200) setSlidesPerView(3);
      else if (width < 1500) setSlidesPerView(4);
      else setSlidesPerView(5);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const settings = {
    modules: [Autoplay],
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 600,
    loop: true,
    grabCursor: true,
    spaceBetween: 18,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
    },
    onBeforeInit: (swiper: any) => {
      swiperRef.current = swiper;
    },

  }


  return (
    <div className="w-full">
      <Swiper
        ref={swiperRef}
        {...settings}
        className="w-full !overflow-visible py-4"
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`} className="!h-auto flex">
            <TestimonialsItems item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



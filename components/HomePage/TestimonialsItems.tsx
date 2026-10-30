import { Icons } from "../common/Icons";
import type { TestimonialItemData } from "./TestimonialSlider";

export type TestimonialsItemsProps = {
  item: TestimonialItemData;
};

export default function TestimonialsItems({ item }: TestimonialsItemsProps) {
  const initial = item.customerName.trim().charAt(0).toUpperCase();

  return (
    <div className="relative bg-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between h-full w-full border border-neutral-100/80 transition-shadow duration-300">
      {/* Decorative Quote Icon in upper-right */}
      <div className="absolute top-6 right-6 sm:top-7 sm:right-7 pointer-events-none select-none">
        <Icons.Quote_Icon />
      </div>

      {/* Star Rating Row */}
      <div className="flex items-center gap-1.5 relative z-1">
        {Array.from({ length: 5 }).map((_, index) => {
          const isFilled = index < item.rating;
          return isFilled ? (
            <Icons.RatingStar_Icon
              key={index}
              className="size-[19px] sm:size-[24px]"
            />
          ) : (
            <Icons.RatingStar_Outline_Icon
              key={index}
              className="size-[19px] sm:size-[24px]"
            />
          );
        })}
      </div>

      {/* Testimonial Quote Text */}
      <p className="font-poppins text-[16px] md:text-[18px] xl:text-[20px] text-black leading-relaxed my-7 relative z-1">
        {item.quote}
      </p>

      {/* Customer Profile Section */}
      <div className="flex items-center gap-3.5 mt-auto relative z-1">
        <div className="size-11 sm:size-12 rounded-full bg-black text-white font-bold font-google-sans text-[17px] sm:text-[18px] flex items-center justify-center shrink-0 select-none">
          {initial}
        </div>
        <div className="flex flex-col">
          <h4 className="font-google-sans font-bold text-[16px] text-black leading-tight mb-1">
            {item.customerName}
          </h4>
          <p className="font-google-sans text-[14px] text-black/70 leading-[14px] mt-0.5">
            Pet: {item.petName} ({item.petBreed})
          </p>
          <p className="font-google-sans text-[14px] text-black/70 leading-[14px] mt-0.5">
            {item.service}
          </p>
        </div>
      </div>
    </div>
  );
}


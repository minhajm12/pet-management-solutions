import Image from "next/image";
import Link from "next/link";
import { Icons } from "../common/Icons";
import type { HomePricingItem } from "./HomePricingSlider";

export type HomePricingCardItemProps = {
  item: HomePricingItem;
};

export default function HomePricingCardItem({ item }: HomePricingCardItemProps) {

  const isRecommended = item.isRecomended;
  const backgroundImage = isRecommended
    ? "/assets/img/pricing-recommended-bg.jpg"
    : "/assets/img/pricing-bg.jpg";

  return (
    <div className="relative">
      {isRecommended && (
        <div className="absolute top-[-40px] h-[70px] -z-[1] bg-linear-to-r from-gradeColor2 to-gradeColor1 text-white md:text-[16px] text-[14px] font-medium py-2 px-4 rounded-t-[30px] flex items-start justify-center gap-1.5 w-full">
          <div className="flex items-center gap-[10px]">
            <Icons.Lightning_Icon className="size-4 fill-white text-white" />
            <span>Most Recommended</span>
          </div>
        </div>
      )}
      <div className="mt-[40px] bg-white rounded-[30px] p-1 flex flex-col border border-[#eee] hover:border-black common-transition w-full h-full group">
        {/* Upper Area (Badge + Pricing Header) */}
        <div className="flex flex-col w-full">
          {/* Most Recommended Highlight Badge */}

          {/* Textured Pricing Header */}
          <div
            className={`relative ${isRecommended ? "rounded-[26px]" : "rounded-[26px]"
              } 2xl:p-6 lg:p-6 md:p-7 p-5 overflow-hidden flex flex-col gap-4 ${isRecommended ? "text-white" : "text-black"
              }`}
          >
            <Image
              src={backgroundImage}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-cover object-center z-1"
            />

            {/* Package Title & Subtitle */}
            <div className="flex flex-col gap-1 relative z-1">
              <h3 className="font-google-sans text-[22px] md:text-[24px] lg:text-[22px] 2xl:text-[24px] font-semibold leading-tight">
                {item.title}
              </h3>
              <p
                className={`font-poppins text-[16px] md:text-[16px] leading-tight ${isRecommended ? "text-white" : "text-primaryColor"
                  }`}
              >
                {item.subtitle}
              </p>
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-2.5 mt-4 relative z-1">
              <span className="font-google-sans 2xl:text-[36px] lg:text-[32px] sm:text-[40px] text-[34px] font-bold leading-none">
                ${item.price.toFixed(2)}
              </span>
              <span
                className={`font-google-sans text-[16px] lg:text-[18px] 2xl:text-[20px] line-through font-medium leading-none ${isRecommended ? "text-white/50" : "text-black/50"
                  }`}
              >
                ${item.originalPrice.toFixed(2)}
              </span>
            </div>

            {/* Duration Pill */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] md:text-[14px] font-medium border w-fit relative z-1 ${isRecommended
                ? "border-white/60 text-white bg-black/20"
                : "border-black text-black bg-white/50"
                }`}
            >
              <Icons.ServiceClock_Icon className="lg:size-3 size-3.5" />
              <span>{item.durationMinutes} Mins</span>
            </div>

            {/* Book Now Button */}
            <div className="w-full mt-2 relative z-1">
              <Link
                href={item.buttonUrl}
                className={`w-full 2xl:py-3.5 py-3 px-6 2xl:rounded-[20px] rounded-[16px] font-google-sans font-bold 2xl:text-[22px] xl:text-[20px] text-[18px] flex items-center justify-center gap-2.5 common-transition shadow-sm group/btn ${isRecommended
                  ? "bg-white text-black hover:bg-transparent border hover:border-white hover:text-white"
                  : "bg-linear-to-r from-gradeColor1 to-gradeColor2 text-white hover:opacity-90"
                  }`}
              >
                <span>{item.buttonText}</span>
                <Icons.BtnArrow
                  className={`${isRecommended ? "fill-black group-hover/btn:fill-white" : "fill-white"
                    } group-hover/btn:-rotate-45 common-transition`}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Features Area */}
        <div className="p-2 md:p-4 2xl:p-5 flex flex-col flex-1 justify-between md:gap-4 gap-2">
          {/* Eligibility Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#1F2937] px-3.5 py-1.5 rounded-full md:text-[14px] text-[12px] font-medium w-fit">
            <Icons.ShieldCheck_Icon className="size-3.5 text-emerald-600 shrink-0" />
            <span>{item.eligibility}</span>
          </div>

          {/* Included Services List */}
          <div className="bg-[#fafafa] md:rounded-[24px] rounded-[15px] md:p-5 sm:p-4 p-3 flex flex-col gap-3.5">
            <ul className="flex flex-col md:gap-3.5 gap-2">
              {item.features.map((feature, index) => (
                <li
                  key={`${item.id}-feature-${index}`}
                  className="flex items-center gap-3 md:text-[16px] text-[14px] font-medium text-black"
                >
                  <span className="md:size-5 size-4 rounded-full bg-primaryColor flex items-center justify-center shrink-0">
                    <Icons.Tick_Icon className="md:size-3 size-2 fill-white text-white" />
                  </span>
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


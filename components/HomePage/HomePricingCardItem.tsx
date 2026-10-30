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
        <div className="absolute top-[-40px] h-[70px] -z-[1] bg-linear-to-r from-gradeColor2 to-gradeColor1 text-white text-[16px] font-medium py-2 px-4 rounded-t-[30px] flex items-start justify-center gap-1.5 w-full">
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
              } p-6 sm:p-7 overflow-hidden flex flex-col gap-4 ${isRecommended ? "text-white" : "text-black"
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
              <h3 className="font-google-sans text-[22px] lg:text-[24px] font-semibold leading-tight">
                {item.title}
              </h3>
              <p
                className={`font-poppins text-[14px] sm:text-[16px] leading-tight ${isRecommended ? "text-white" : "text-primaryColor"
                  }`}
              >
                {item.subtitle}
              </p>
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-2.5 mt-4 relative z-1">
              <span className="font-google-sans text-[36px] sm:text-[40px] font-bold leading-none">
                ${item.price.toFixed(2)}
              </span>
              <span
                className={`font-google-sans text-[18px] sm:text-[20px] line-through font-normal leading-none ${isRecommended ? "text-white/50" : "text-black/50"
                  }`}
              >
                ${item.originalPrice.toFixed(2)}
              </span>
            </div>

            {/* Duration Pill */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium border w-fit relative z-1 ${isRecommended
                ? "border-white/60 text-white bg-black/20"
                : "border-black text-black bg-white/50"
                }`}
            >
              <Icons.ServiceClock_Icon className="size-3" />
              <span>{item.durationMinutes} Mins</span>
            </div>

            {/* Book Now Button */}
            <div className="w-full mt-2 relative z-1">
              <Link
                href={item.buttonUrl}
                className={`w-full py-3.5 px-6 rounded-[20px] font-google-sans font-bold text-[22px] flex items-center justify-center gap-2.5 common-transition shadow-sm group/btn ${isRecommended
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
        <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
          {/* Eligibility Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#1F2937] px-3.5 py-1.5 rounded-full text-[13px] font-medium w-fit">
            <Icons.ShieldCheck_Icon className="size-3.5 text-emerald-600 shrink-0" />
            <span>{item.eligibility}</span>
          </div>

          {/* Included Services List */}
          <div className="bg-[#fafafa] rounded-[24px] p-5 sm:p-6 flex flex-col gap-3.5">
            <ul className="flex flex-col gap-3.5">
              {item.features.map((feature, index) => (
                <li
                  key={`${item.id}-feature-${index}`}
                  className="flex items-center gap-3 text-[16px] font-medium text-black"
                >
                  <span className="size-5 rounded-full bg-primaryColor flex items-center justify-center shrink-0">
                    <Icons.Tick_Icon />
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


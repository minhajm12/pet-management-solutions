import Image from "next/image";

export type WhyChoosePoint = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const whyChoosePointsData: WhyChoosePoint[] = [
  {
    id: "fear-free",
    title: "Fear Free Certified Handling",
    description:
      "Low-Stress Techniques, Calming Lavender Diffusers, And Warm Gentle Dryers That Eliminate Pet Anxiety.",
    icon: "/assets/img/svg/why-choose-icon-1.svg",
  },
  {
    id: "sanitation",
    title: "Hospital Grade Sanitation",
    description:
      "Low-Stress Techniques, Calming Lavender Diffusers, And Warm Gentle Dryers That Eliminate Pet Anxiety.",
    icon: "/assets/img/svg/why-choose-icon-2.svg",
  },
  {
    id: "natural-products",
    title: "All Natural Botanical Shampoos",
    description:
      "Low-Stress Techniques, Calming Lavender Diffusers, And Warm Gentle Dryers That Eliminate Pet Anxiety.",
    icon: "/assets/img/svg/why-choose-icon-3.svg",
  },
  {
    id: "dedicated-attention",
    title: "One On One Dedicated Attention",
    description:
      "Low-Stress Techniques, Calming Lavender Diffusers, And Warm Gentle Dryers That Eliminate Pet Anxiety.",
    icon: "/assets/img/svg/why-choose-icon-4.svg",
  },
];

export default function WhyChoosePoints() {
  return (
    <div
      className="mt-6 sm:mt-8 lg:mt-10"
      aria-label="Why Choose Shear Heaven Features"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-3 xl:gap-5 w-full">
        {whyChoosePointsData.map((item) => (
          <div
            key={item.id}
            className="bg-white xl:rounded-[28px] lg:rounded-[24px] rounded-[16px] sm:rounded-[20px] p-6 lg:p-7 xl:p-8 flex flex-col items-start justify-start h-full shadow-xs"
          >
            {/* Feature Icon */}
            <div className="relative w-[44px] h-[48px] sm:w-[48px] sm:h-[50px] mb-5 sm:mb-6 shrink-0 flex items-center justify-start">
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={50}
                className="w-auto h-[44px] sm:h-[48px] object-contain"
                style={{ width: "auto", height: "auto" }}
                aria-hidden="true"
              />
            </div>

            {/* Feature Title */}
            <h3 className="font-google-sans leading-tight font-semibold text-[18px] sm:text-[20px] 2xl:text-[22px] text-black mb-1">
              {item.title}
            </h3>

            {/* Feature Description */}
            <p className="font-poppins text-[14px] lg:text-[16px] text-black font-normal leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

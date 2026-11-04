import Image from "next/image";
import MainBtn from "../common/MainBtn";
import { Icons } from "../common/Icons";
import type { SalonServiceItemData } from "@/lib/data/home/services";

export type HomeServicesItemProps = {
  service: SalonServiceItemData;
};

function ServiceTypeIcon({ type }: { type: string }) {
  switch (type.toLowerCase()) {
    case "groom":
      return <Icons.ServicesType_Groom className="size-3.5 stroke-neutral-700" />;
    case "bath":
      return <Icons.ServicesType_Bath className="size-3.5 stroke-neutral-700" />;
    case "spa":
      return <Icons.ServicesType_Spa className="size-3.5 stroke-neutral-700" />;
    case "styling":
      return <Icons.ServicesType_Styling className="size-3.5 stroke-neutral-700" />;
    case "coat":
      return <Icons.ServicesType_Coat className="size-3.5 stroke-neutral-700" />;
    case "nails":
      return <Icons.ServicesType_Nails className="size-3.5 stroke-neutral-700" />;
    default:
      return <Icons.ServicesType_Default className="size-3.5 stroke-neutral-700" />;
  }
}

export default function HomeServicesItem({ service }: HomeServicesItemProps) {
  return (
    <div className="bg-white rounded-[35px] 2xl:rounded-[46px] p-2 flex flex-col border border-[#eee] hover:border-black common-transition w-full group">
      {/* 1. Service Image */}
      <div className="relative w-full aspect-12/8 rounded-[28px] 2xl:rounded-[40px] overflow-hidden bg-neutral-100">
        <Image
          src={service.image}
          alt={service.title}
          title={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
          className="object-cover object-center group-hover:scale-110 common-transition"
        />
      </div>

      {/* 2. Compact Metadata Pill */}
      <div className="!pt-0 2xl:p-4 xl:p-3 p-3">
        <div className="mt-4 mb-3 inline-flex items-center gap-2.5 border border-primaryColor rounded-full xl:px-4 px-2 xl:py-1 py-0.5 xl:text-[12px] text-[12px] font-medium text-primaryColor w-fit">
          <div className="flex items-center gap-1">
            <Icons.ServiceClock_Icon />
            <span>{service.durationMinutes} Mins</span>
          </div>
          <div className="flex items-center gap-1">
            <ServiceTypeIcon type={service.serviceType} />
            <span>{service.serviceType}</span>
          </div>
        </div>

        {/* 3. Service Title */}
        <h3 className="xl:text-[22px] lg:text-[18px] text-[20px] font-semibold font-google-sans text-black leading-tight">
          {service.title}
        </h3>

        {/* 4. Service Description */}
        <p title={service.description} className="line-clamp-1 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[16px] text-[14px] text-black font-poppins mt-1.5 leading-tight">
          {service.description}
        </p>

        {/* 5. Service-Point List */}
        <ul className="flex flex-col gap-[10px] xl:my-5 my-3">
          {service.points.map((point, index) => (
            <li
              key={`${service.id}-point-${index}`}
              className="flex items-center gap-2.5 2xl:text-[16px] lg:text-[14px] md:text-[16px] text-[14px] text-black font-medium"
            >
              <Icons.servicesPoints_Icon className="2xl:size-[18px] size-[16px] shrink-0 fill-black" />
              <span className="leading-tight">{point}</span>
            </li>
          ))}
        </ul>

        {/* 6. Bottom Action Row */}
        <div className="mt-auto flex xl:flex-row flex-col-reverse xl:items-center items-start justify-between xl:gap-3 gap-2">
          <MainBtn
            text={service.buttonText}
            url={service.buttonUrl}
            btnType="fill"
            BtnArrow={true}
            className="xl:w-fit w-full justify-center"
          />
          <div className="font-google-sans text-right whitespace-nowrap text-[15px] font-semibold text-black">
            <span className="text-black font-normal text-[16px]">Price: </span>
            <span className="font-bold text-[22px]">₹{service.price.toLocaleString("en-IN")}/-</span>
          </div>
        </div>
      </div>
    </div>
  );
}

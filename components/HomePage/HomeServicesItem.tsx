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
    <article className="bg-white rounded-[46px] p-2 flex flex-col border border-[#eee] hover:border-black common-transition w-full group">
      {/* 1. Service Image */}
      <div className="relative w-full aspect-[473/280] rounded-[40px] overflow-hidden bg-neutral-100">
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
      <div className="px-4 pb-4">
        <div className="mt-4 mb-3 inline-flex items-center gap-2.5 border border-primaryColor rounded-full px-4 py-1 text-[12px] font-medium text-primaryColor w-fit">
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
        <h3 className="text-[22px] font-semibold font-google-sans text-black leading-tight">
          {service.title}
        </h3>

        {/* 4. Service Description */}
        <p className="text-[18px] text-black font-poppins mt-1.5 leading-tight">
          {service.description}
        </p>

        {/* 5. Service-Point List */}
        <ul className="flex flex-col gap-[10px] my-5">
          {service.points.map((point, index) => (
            <li
              key={`${service.id}-point-${index}`}
              className="flex items-center gap-2.5 text-[16px] text-black font-medium"
            >
              <Icons.servicesPoints_Icon className="size-[18px] shrink-0 fill-black" />
              <span className="leading-tight">{point}</span>
            </li>
          ))}
        </ul>

        {/* 6. Bottom Action Row */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <MainBtn
            text={service.buttonText}
            url={service.buttonUrl}
            btnType="fill"
            BtnArrow={true}
          />
          <div className="font-google-sans text-right whitespace-nowrap text-[15px] font-semibold text-black">
            <span className="text-black font-normal text-[18px]">Price: </span>
            <span className="font-bold text-[22px]">₹{service.price.toLocaleString("en-IN")}/-</span>
          </div>
        </div>
      </div>
    </article>
  );
}

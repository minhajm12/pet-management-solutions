import Image from "next/image";
import MainBtn from "../common/MainBtn";
import { Icons } from "../common/Icons";
import type { SalonServiceItemData } from "./SalonServices";

export type HomeServicesItemProps = {
  service: SalonServiceItemData;
};

function ServiceTypeIcon({ type }: { type: string }) {
  switch (type.toLowerCase()) {
    case "groom":
      return (
        <svg
          className="size-3.5 stroke-neutral-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "bath":
      return (
        <svg
          className="size-3.5 stroke-neutral-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z" />
          <path d="M6 12V5a2 2 0 0 1 2-2h3v2" />
        </svg>
      );
    case "spa":
      return (
        <svg
          className="size-3.5 stroke-neutral-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
        </svg>
      );
    case "styling":
      return (
        <svg
          className="size-3.5 stroke-neutral-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "coat":
      return (
        <svg
          className="size-3.5 stroke-neutral-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      );
    case "nails":
      return (
        <svg
          className="size-3.5 stroke-neutral-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="15" rx="4" ry="3" />
          <circle cx="7" cy="9" r="1.5" />
          <circle cx="11" cy="7" r="1.5" />
          <circle cx="15" cy="7" r="1.5" />
          <circle cx="18" cy="9" r="1.5" />
        </svg>
      );
    default:
      return (
        <svg
          className="size-3.5 stroke-neutral-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function HomeServicesItem({ service }: HomeServicesItemProps) {
  return (
    <article className="bg-white rounded-[30px] p-5 sm:p-6 flex flex-col border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 w-full">
      {/* 1. Service Image */}
      <div className="relative w-full aspect-[473/280] rounded-[20px] overflow-hidden bg-neutral-100">
        <Image
          src={service.image}
          alt={service.title}
          title={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Compact Metadata Pill */}
      <div className="mt-4 mb-3 inline-flex items-center gap-2.5 border border-neutral-300 rounded-full px-3 py-1 text-[12px] font-medium text-neutral-700 w-fit">
        <div className="flex items-center gap-1">
          <svg
            className="size-3.5 stroke-neutral-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{service.durationMinutes} Mins</span>
        </div>
        <div className="flex items-center gap-1">
          <ServiceTypeIcon type={service.serviceType} />
          <span>{service.serviceType}</span>
        </div>
      </div>

      {/* 3. Service Title */}
      <h3 className="text-[22px] font-bold font-google-sans text-neutral-900 leading-tight">
        {service.title}
      </h3>

      {/* 4. Service Description */}
      <p className="text-[14px] text-neutral-600 font-poppins mt-1.5 mb-5 leading-relaxed min-h-[42px]">
        {service.description}
      </p>

      {/* 5. Service-Point List */}
      <ul className="flex flex-col gap-2.5 mb-6">
        {service.points.map((point, index) => (
          <li
            key={`${service.id}-point-${index}`}
            className="flex items-center gap-2.5 text-[14px] text-neutral-800 font-medium"
          >
            <Icons.servicesPoints_Icon className="size-[18px] shrink-0 fill-black" />
            <span className="leading-tight">{point}</span>
          </li>
        ))}
      </ul>

      {/* 6. Bottom Action Row */}
      <div className="mt-auto pt-4 flex items-center justify-between gap-3">
        <MainBtn
          text={service.buttonText}
          url={service.buttonUrl}
          btnType="fill"
          BtnArrow={true}
        />
        <div className="text-right whitespace-nowrap text-[15px] font-semibold text-neutral-900">
          <span className="text-neutral-600 font-normal">Price: </span>
          <span className="font-bold">₹{service.price.toLocaleString("en-IN")}/-</span>
        </div>
      </div>
    </article>
  );
}


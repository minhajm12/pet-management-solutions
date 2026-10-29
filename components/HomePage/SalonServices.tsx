"use client";

import { useMemo, useState } from "react";
import MainTitle from "../common/MainTitle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import HomeServicesItem from "./HomeServicesItem";

export type SalonServiceCategoryId =
  | "all"
  | "baths-fluff"
  | "haircuts-styling"
  | "therapeutic-spa"
  | "nails-dental";

export type SalonServiceItemData = {
  id: string;
  title: string;
  description: string;
  image: string;
  durationMinutes: number;
  serviceType: string;
  points: string[];
  price: number;
  buttonText: string;
  buttonUrl: string;
  categoryIds: Exclude<SalonServiceCategoryId, "all">[];
};

export type SalonServiceTab = {
  id: SalonServiceCategoryId;
  label: string;
};

export const salonServiceTabs: SalonServiceTab[] = [
  { id: "all", label: "All Services" },
  { id: "baths-fluff", label: "Baths & Fluff Day" },
  { id: "haircuts-styling", label: "Haircuts & Styling" },
  { id: "therapeutic-spa", label: "Therapeutic Spa" },
  { id: "nails-dental", label: "Nails & Dental" },
];

export const salonServicesData: SalonServiceItemData[] = [
  {
    id: "full-grooming",
    title: "Full Grooming",
    description: "Bath, Haircut And Nail Care In One Visit.",
    image: "/assets/img/services/service-img-1.jpg",
    durationMinutes: 60,
    serviceType: "Groom",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1800,
    buttonText: "Book Service",
    buttonUrl: "/services/full-grooming",
    categoryIds: [
      "baths-fluff",
      "haircuts-styling",
      "nails-dental",
    ],
  },
  {
    id: "bath-blow-dry",
    title: "Bath & Blow-Dry",
    description: "Gentle Wash And Dry For A Fresh, Soft Coat.",
    image: "/assets/img/services/service-img-2.jpg",
    durationMinutes: 60,
    serviceType: "Bath",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 900,
    buttonText: "Book Service",
    buttonUrl: "/services/bath-blow-dry",
    categoryIds: ["baths-fluff"],
  },
  {
    id: "relaxing-dog-spa",
    title: "Relaxing Dog Spa",
    description: "A Soothing Soak And Gentle Coat Treatment.",
    image: "/assets/img/services/service-img-3.jpg",
    durationMinutes: 60,
    serviceType: "Spa",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1600,
    buttonText: "Book Service",
    buttonUrl: "/services/relaxing-dog-spa",
    categoryIds: ["therapeutic-spa", "baths-fluff"],
  },
  {
    id: "coat-trim-styling",
    title: "Coat Trim & Styling",
    description: "A Tailored Trim For A Neat, Stylish Coat.",
    image: "/assets/img/services/service-img-4.jpg",
    durationMinutes: 60,
    serviceType: "Styling",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1200,
    buttonText: "Book Service",
    buttonUrl: "/services/coat-trim-styling",
    categoryIds: ["haircuts-styling"],
  },
  {
    id: "de-shedding-treatment",
    title: "De-Shedding Treatment",
    description: "Remove Loose Fur For A Lighter, Tidy Coat.",
    image: "/assets/img/services/service-img-5.jpg",
    durationMinutes: 60,
    serviceType: "Coat",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1000,
    buttonText: "Book Service",
    buttonUrl: "/services/de-shedding-treatment",
    categoryIds: ["baths-fluff", "therapeutic-spa"],
  },
  {
    id: "paw-nail-care",
    title: "Paw & Nail Care",
    description: "Nail Trimming And Balm For Soft, Tidy Paws.",
    image: "/assets/img/services/service-img-6.jpg",
    durationMinutes: 60,
    serviceType: "Nails",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 500,
    buttonText: "Book Service",
    buttonUrl: "/services/paw-nail-care",
    categoryIds: ["nails-dental"],
  },
];

export default function SalonServices() {
  const [activeTab, setActiveTab] = useState<SalonServiceCategoryId>("all");

  const filteredServices = useMemo(() => {
    if (activeTab === "all") {
      return salonServicesData;
    }
    return salonServicesData.filter((service) =>
      service.categoryIds.includes(activeTab as Exclude<SalonServiceCategoryId, "all">)
    );
  }, [activeTab]);

  return (
    <section className="main-padding flex flex-col y-gap" aria-labelledby="salon-services-heading">
      {/* Section Heading & Subtitle */}
      <div className="title-section">
        <MainTitle
          title="Signature Spa & Salon Services"
          description="Every Session Begins With A Gentle Pet Consultation, Coat Assessment, And Peaceful Acclimatization."
          contentClassName="max-w-[620px] text-center mx-auto text-neutral-600 mt-1"
        />
      </div>

      {/* Category Tab Bar & Grid */}
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as SalonServiceCategoryId)}
        className="w-full flex flex-col items-center mt-[40px]"
      >
        <div className="max-w-full overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <TabsList className="inline-flex items-center p-1 md:p-1.5 rounded-full border border-black bg-white gap-1 shadow-xs">
            {salonServiceTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`rounded-full px-4 sm:px-5 md:px-6 py-2 text-[14px] md:text-[15px] transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-linear-to-r from-gradeColor1 to-gradeColor2 text-white font-medium shadow-sm"
                      : "text-neutral-900 hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Tab Content Panels */}
        {salonServiceTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="w-full mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
              {filteredServices.map((service) => (
                <HomeServicesItem key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}


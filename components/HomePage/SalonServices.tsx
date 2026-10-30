"use client";

import { useMemo, useState } from "react";
import MainTitle from "../common/MainTitle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import HomeServicesItem from "./HomeServicesItem";
import {
  salonServicesData,
  salonServiceTabs,
  type SalonServiceCategoryId,
  type SalonServiceItemData,
  type SalonServiceTab,
} from "@/lib/data/home/services";

export type { SalonServiceCategoryId, SalonServiceItemData, SalonServiceTab };
export { salonServicesData, salonServiceTabs };

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
          contentClassName="max-w-[620px] text-center mx-auto"
        />
      </div>

      {/* Category Tab Bar & Grid */}
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as SalonServiceCategoryId)}
        className="w-full flex flex-col items-center mt-[40px]"
      >
        <div className="max-w-full overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <TabsList className="font-poppins inline-flex items-center p-1 rounded-full border border-black bg-white gap-2 shadow-xs">
            {salonServiceTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`rounded-full px-4 sm:px-5 md:px-6 py-2 text-[18px] font-semibold md:text-[15px] common-transition cursor-pointer whitespace-nowrap ${isActive
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

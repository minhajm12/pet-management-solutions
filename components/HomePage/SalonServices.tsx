"use client";

import { useMemo, useState, useRef } from "react";
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
import { useLenis } from "lenis/react";

export type { SalonServiceCategoryId, SalonServiceItemData, SalonServiceTab };
export { salonServicesData, salonServiceTabs };

export default function SalonServices() {
  const [activeTab, setActiveTab] = useState<SalonServiceCategoryId>("all");
  const sectionRef = useRef<HTMLElement | null>(null);
  const lenis = useLenis();

  const scrollToSection = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    // Scroll to the top of the section if user has scrolled down into the section
    if (rect.top < 0) {
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(sectionRef.current, { offset: -20, duration: 1.0 });
      } else {
        const topPosition = window.scrollY + rect.top - 20;
        window.scrollTo({
          top: Math.max(0, topPosition),
          behavior: "smooth",
        });
      }
    }
  };

  const handleTabChange = (val: string) => {
    setActiveTab(val as SalonServiceCategoryId);
    scrollToSection();
  };

  const handleTabClick = (tabId: SalonServiceCategoryId) => {
    if (activeTab === tabId) {
      scrollToSection();
    }
  };

  const filteredServices = useMemo(() => {
    if (activeTab === "all") {
      return salonServicesData;
    }
    return salonServicesData.filter((service) =>
      service.categoryIds.includes(activeTab as Exclude<SalonServiceCategoryId, "all">)
    );
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="main-padding flex flex-col y-gap"
      aria-labelledby="salon-services-heading"
    >
      {/* Section Heading & Subtitle */}
      <div className="title-section">
        <MainTitle
          title="Signature Spa & Salon Services"
          description="Every Session Begins With A Gentle Pet Consultation, Coat Assessment, And Peaceful Acclimatization."
          contentClassName="max-w-[620px] md:text-center mx-auto"
        />
      </div>

      {/* Category Tab Bar & Grid */}
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full flex flex-col items-center md:mt-[40px] mt-[20px]"
      >
        <div className="max-w-full overflow-x-auto md:pb-0 scrollbar-none sticky md:top-[40px] top-[20px] z-3">
          <TabsList className="font-poppins inline-flex items-center md:p-1 p-0.5 md:rounded-full rounded-[12px] border border-black bg-white gap-2 shadow-xs">
            {salonServiceTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`md:rounded-full rounded-[10px] px-3 sm:px-4 md:px-6 py-2 text-[14px] font-semibold md:text-[16px] common-transition cursor-pointer whitespace-nowrap ${isActive
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
          <TabsContent key={tab.id} value={tab.id} className="w-full xl:mt-10 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px] lg:gap-[10px] 2xl:gap-[30px] w-full">
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

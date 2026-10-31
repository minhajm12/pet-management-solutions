import Image from 'next/image'
import React from 'react'
import { Icons } from '../common/Icons'
import MainBtn from '../common/MainBtn'
import MainTitle from '../common/MainTitle';

const benefitPills: string[] = [
    "Dogs & Cats Needing Full Pampering",
    "Tearless Blueberry Facials With Relaxing Face Massage",
    "Private Feline Spa Suite Separated From Barking Dogs",
];

export default function WhyChooseMain() {
    return (
        <div>
            <div className="relative flex flex-col lg:flex-row items-center w-full">
                {/* Left: Large Rounded Pet Image with Floating Organic Badge */}
                <div className="relative w-full lg:w-[48%] h-[320px] sm:h-[380px] lg:h-[400px] xl:h-[430px] rounded-[50px] sm:rounded-[70px] lg:rounded-full overflow-hidden shrink-0 z-20 shadow-sm">
                    <Image
                        src="/assets/img/whychoose-img.jpg"
                        alt="Playful Golden Retriever puppy running happily on green grass"
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                        priority
                    />

                    {/* Inside Image Badge */}
                    <div className="absolute right-5 sm:right-8 lg:right-15 top-1/2 -translate-y-1/2 z-30 bg-white/90 rounded-full px-5 py-3 sm:px-14 sm:py-3.5 shadow-md flex flex-col items-center justify-center text-center pointer-events-none select-none backdrop-blur-2xl">
                        <span className="font-google-sans font-bold text-[24px] sm:text-[32px] text-black leading-tight">
                            100%
                        </span>
                        <span className="font-poppins text-[12px] sm:text-[14px] text-black font-medium leading-tight mt-0.5">
                            Organic, Cruelty Free<br />Botanicals Used
                        </span>
                    </div>
                </div>

                {/* Right: White Content Panel Overlapped by Image */}
                <div className="relative w-full px-6 z-10 flex flex-col justify-center -mt-6 sm:-mt-8 lg:mt-0 pl-[70px] py-[50px]">
                    <span className='absolute right-0 top-0 h-full bg-white w-[130%] rounded-r-[40px] rounded-l-full -z-1'></span>

                    {/* Main Heading */}
                    <MainTitle h2ClassName={'w-[80%]'} alignLeft title={'Pet Care Redefined With Love & Dignity'} description={'For Over 20 Years, Shear Heaven Pet Spa Has Been A Trusted Pet Groomer Serving Dog Owners With Reliable, High Quality Pet Grooming Services. We Understand That Every Dog Is Unique, Which Is Why Every Grooming Session Is Tailored To Their Breed, Coat Condition, Personality, And Comfort.'} contentClassName={''} />

                    {/* Description Paragraph */}
                    <p className="font-poppins text-[13px] sm:text-[14px] lg:text-[15px] text-gray-600 leading-relaxed font-normal max-w-[620px]">

                    </p>

                    {/* Benefit Pills */}
                    <div className="flex flex-col gap-2.5 items-start my-[20px]">
                        {benefitPills.map((pill, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-2 bg-[#f2f3f4] rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-black max-w-full"
                            >
                                <Icons.Paw_Icon className="w-3.5 h-3.5 shrink-0 text-black fill-black" />
                                <span className="font-poppins md:text-[16px] text-[14px] font-normal leading-tight">
                                    {pill}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="">
                        <MainBtn
                            text="Reserve A Spa Session"
                            url="/book-stylist"
                            btnType="fill"
                            bookIcon={true}
                            className="!px-6 !py-3 text-[14px] sm:text-[15px] whitespace-nowrap"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

import Image from 'next/image'
import React from 'react'
import MainTitle from '../common/MainTitle'
import MainBtn from '../common/MainBtn'

const CtaImages = [
    "/assets/img/cta-img/cta-img-1.jpg",
    "/assets/img/cta-img/cta-img-2.jpg",
    "/assets/img/cta-img/cta-img-3.jpg",
    "/assets/img/cta-img/cta-img-4.jpg",
]

const CtaContent = {
    title: "Ready to Give Your Dog the Care They Deserve?",
    description: "Every session begins with a gentle pet consultation, coat assessment, and peaceful acclimatization.",
    btnText: "Book Appointment Now"
}

function MainCta() {
    return (
        <div className='2xl:px-[40px] xl:px-[10px] lg:px-[40px] px-[20px] 2xl:py-[80px] py-[50px] bg-white'>
            <div className="grid grid-cols-12 grid-rows-3 gap-[10px]">
                <div className="col-span-2 row-span-3 hidden xl:block">
                    <div className='w-full overflow-hidden xl:rounded-[30px] rounded-[20px]'>
                        <Image src={CtaImages[0]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
                <div className="col-span-3 xl:col-span-2 row-span-3 xl:col-start-3 col-start-1">
                    <div className='w-full overflow-hidden xl:rounded-[30px] rounded-[20px]'>
                        <Image src={CtaImages[1]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-6 row-span-3 col-start-4 xl:col-start-5 flex items-center justify-center">
                    <div className="2xl:px-[20px] px-[10px] cta-content flex flex-col items-center 2xl:gap-[30px] gap-[20px] lg:w-[100%] xl:w-full">
                        <MainTitle title={CtaContent.title} description={CtaContent.description} contentClassName={''} />
                        <MainBtn bookIcon btnType='outline' text={'Book Appointment Now'} url={''} />
                    </div>
                </div>
                <div className="col-span-3 xl:col-span-2 xl:col-start-9 col-start-10 row-span-3">
                    <div className='w-full overflow-hidden xl:rounded-[30px] rounded-[20px]'>
                        <Image src={CtaImages[2]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-11 xl:block hidden">
                    <div className='w-full overflow-hidden xl:rounded-[30px] rounded-[20px]'>
                        <Image src={CtaImages[3]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCta

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
            <div className="grid grid-cols-12 grid-rows-3 md:gap-[10px] gap-[5px]">
                <div className="col-span-3 md:col-span-2 row-span-3 block md:hidden xl:block">
                    <div className='w-full overflow-hidden xl:rounded-[30px] md:rounded-[20px] rounded-[10px]'>
                        <Image src={CtaImages[0]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
                <div className="col-span-3 xl:col-span-2 row-span-3 xl:col-start-3 md:col-start-1 col-start-4">
                    <div className='w-full overflow-hidden xl:rounded-[30px] md:rounded-[20px] rounded-[10px]'>
                        <Image src={CtaImages[1]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
                <div className="order-5 xl:col-span-4 md:col-span-6 col-span-12 row-span-3 md:row-start-1 md:col-start-4 col-start-1 xl:col-start-5 flex items-center justify-center">
                    <div className="2xl:px-[20px] md:px-[10px] cta-content flex flex-col items-center 2xl:gap-[30px] gap-[20px] lg:w-[100%] xl:w-full md:mt-0 mt-2">
                        <MainTitle title={CtaContent.title} description={CtaContent.description} contentClassName={'text-center'} h2ClassName="text-center" />
                        <MainBtn bookIcon btnType='outline' text={'Book Appointment Now'} url={''} />
                    </div>
                </div>
                <div className="col-span-3 xl:col-span-2 xl:col-start-9 md:col-start-10 col-start-7 row-span-3">
                    <div className='w-full overflow-hidden xl:rounded-[30px] md:rounded-[20px] rounded-[10px]'>
                        <Image src={CtaImages[2]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 row-span-3 md:col-start-11 col-start-10 xl:block md:hidden block">
                    <div className='w-full overflow-hidden xl:rounded-[30px] md:rounded-[20px] rounded-[10px]'>
                        <Image src={CtaImages[3]} alt="" width={270} height={360} className='w-full lg:h-auto hover:scale-110 hover:rotate-[2deg] common-transition' style={{ height: "auto" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCta

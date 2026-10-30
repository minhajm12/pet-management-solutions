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
        <div className='px-[40px] py-[80px] bg-white'>
            <div className="grid grid-cols-12 grid-rows-3 gap-[10px]">
                <div className="col-span-2 row-span-3">
                    <div className='w-full overflow-hidden rounded-[30px]'>
                        <Image src={CtaImages[0]} alt="" width={270} height={360} className='w-full hover:scale-110 common-transition' />
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-3">
                    <div className='w-full overflow-hidden rounded-[30px]'>
                        <Image src={CtaImages[1]} alt="" width={270} height={360} className='w-full hover:scale-110 common-transition' />
                    </div>
                </div>
                <div className="col-span-4 row-span-3 col-start-5 flex items-center">
                    <div className="px-[20px] cta-content flex flex-col items-center gap-[30px]">
                        <MainTitle title={CtaContent.title} description={CtaContent.description} contentClassName={''} />
                        <MainBtn bookIcon btnType='outline' text={'Book Appointment Now'} url={''} />
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-9">
                    <div className='w-full overflow-hidden rounded-[30px]'>
                        <Image src={CtaImages[2]} alt="" width={270} height={360} className='w-full hover:scale-110 common-transition' />
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-11">
                    <div className='w-full overflow-hidden rounded-[30px]'>
                        <Image src={CtaImages[3]} alt="" width={270} height={360} className='w-full hover:scale-110 common-transition' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCta
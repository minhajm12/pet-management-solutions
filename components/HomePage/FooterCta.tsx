import React from 'react'
import MainTitle from '../common/MainTitle'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterCta() {
    return (
        <div className='full-padding y-gap'>
            <div className="t-gap-pad">
                <div className="grid md:grid-cols-2 grid-cols-1 xl:rounded-[40px] md:rounded-[30px] rounded-[30px] bg-linear-to-r from-gradeColor1 to-gradeColor2 2xl:p-[80px] xl:p-[50px] md:p-[40px] px-[24px] py-[35px] relative">
                    <div className="col-span-1 flex flex-col md:gap-[30px] gap-[20px] 2xl:pe-[140px]">
                        <MainTitle alignLeft title={'Download The Official App, Your Pet’s Entire Spa Experience'} description={'Book grooming appointments, explore spa packages, manage your pet’s profile, and keep every pampering session organized all in one place.'} contentClassName={'md:w-[90%] text-white !font-normal md:!leading-relaxed md:text-start !text-center'} h2ClassName='text-white md:text-start !text-center' />
                        <div className="flex md:justify-start justify-center gap-3">
                            <Link href='#'>
                                <Image src={'/assets/img/svg/googleplaystore.svg'} alt='Google Playstore' width={190} height={54} className="w-auto lg:!h-[54px] !h-[40px]" style={{ width: "auto", height: "auto" }} />
                            </Link>
                            <Link href='#'>
                                <Image src={'/assets/img/svg/applestore.svg'} alt='Apple Store' width={190} height={54} className="w-auto lg:!h-[54px] !h-[40px]" style={{ width: "auto", height: "auto" }} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1 md:block hidden">
                        <Image src={'/assets/img/footercta-img.png'} alt='Footer CTA' width={905} height={590} className='absolute right-0 bottom-0 2xl:w-[48%] xl:w-[53%] lg:w-[50%] w-[55%] h-auto xl:rounded-r-[40px] rounded-r-[30px]' style={{ height: "auto" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

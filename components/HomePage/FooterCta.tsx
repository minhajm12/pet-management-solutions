import React from 'react'
import MainTitle from '../common/MainTitle'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterCta() {
    return (
        <div className='full-padding y-gap'>
            <div className="t-gap-pad">
                <div className="grid grid-cols-2 xl:rounded-[40px] rounded-[30px] bg-linear-to-r from-gradeColor1 to-gradeColor2 2xl:p-[80px] xl:p-[50px] p-[40px] relative">
                    <div className="col-span-1 flex flex-col gap-[30px] 2xl:pe-[140px]">
                        <MainTitle alignLeft title={'Download The Official App, Your Pet’s Entire Spa Experience'} description={'Book grooming appointments, explore spa packages, manage your pet’s profile, and keep every pampering session organized all in one place.'} contentClassName={'w-[90%] text-white !font-normal !leading-relaxed'} h2ClassName='text-white' />
                        <div className="flex gap-3">
                            <Link href='#'>
                                <Image src={'/assets/img/svg/googleplaystore.svg'} alt='Google Playstore' width={190} height={54} className="w-auto lg:!h-[54px] !h-[40px]" style={{ width: "auto", height: "auto" }} />
                            </Link>
                            <Link href='#'>
                                <Image src={'/assets/img/svg/applestore.svg'} alt='Apple Store' width={190} height={54} className="w-auto lg:!h-[54px] !h-[40px]" style={{ width: "auto", height: "auto" }} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <Image src={'/assets/img/footercta-img.png'} alt='Footer CTA' width={905} height={590} className='absolute right-0 bottom-0 2xl:w-[48%] xl:w-[53%] lg:w-[50%] w-[55%] h-auto xl:rounded-r-[40px] rounded-r-[30px]' style={{ height: "auto" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

import Image from "next/image"
import ContentMain from "../common/ContentMain"
import MainTitle from "../common/MainTitle"
import Link from "next/link"
import { Icons } from "../common/Icons"

const salonItems: Array<any> = [
    { img: "/assets/img/svg/salon-img-1.svg", url: '', buttonText: 'Services', title: "Spa Services", description: "Baths, Scissor Trims & Hygiene" },
    { img: "/assets/img/svg/salon-img-2.svg", url: '', buttonText: 'Pacakges', title: "Royal Packages", description: "All Inclusive Luxury Bundles" },
    { img: "/assets/img/svg/salon-img-3.svg", url: '', buttonText: 'Gallery', title: "Makeover gallery", description: "Real Customer Transformation" },
    { img: "/assets/img/svg/salon-img-4.svg", url: '', buttonText: 'Booking', title: "Instant Booking", description: "Choose Groomer & Time Slot" },
]

function ExploreSalon() {
    return (
        <div className="main-padding flex flex-col y-gap">
            <div className="title-section">
                <MainTitle
                    contentClassName="w-[50%]"
                    title="Expore Salon Experiences"
                    description="Crafted for pure comfort, relaxation, and stunning breed-standard styling." />
            </div>
            <div className="items-section lg:mt-[50px] mt-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-5 lg:gap-2 gap-4 w-full">
                    {salonItems.map((item: any, index: number) => {
                        return (
                            <div key={index} className="relative bg-white 2xl:p-[50px] lg:px-[20px] lg:py-[30px] py-[30px] rounded-[30px] flex flex-col gap-[20px] items-center">
                                <div className="icon-div flex items-center justify-center xl:size-[100px] size-[80px] bg-linear-to-r from-gradeColor1 to-gradeColor2 xl:rounded-[20px] rounded-[14px] ">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        title={item.title}
                                        width={60}
                                        height={60}
                                        className="w-auto 2xl:h-[60px] xl:h-[50px] h-[40px] object-contain"
                                        style={{ width: "auto" }}
                                    />
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <h3 className="capitalize text-center font-semibold 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[24px] text-[20px]">{item.title}</h3>
                                    <p className="font-normal leading-tight text-center 2xl:text-[18px] lg:text-[16px] md:text-[18px] text-[16px]">{item.description}</p>
                                    <Link
                                        href=""
                                        title={`Explore ${item.url}`}
                                        className="text-center font-semibold 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[18px] text-[16px] pt-[10px] flex items-center 2xl:gap-4 xl:gap-3 gap-2 group/link"
                                    >Explore {item.buttonText} <Icons.BtnArrow className="fill-black group-hover/link:translate-x-2 common-transition xl:size-[15px] size-[13px]" /></Link>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ExploreSalon

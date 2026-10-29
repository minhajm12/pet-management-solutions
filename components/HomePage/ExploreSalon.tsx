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
            <div className="items-section mt-[50px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                    {salonItems.map((item: any, index: number) => {
                        return (
                            <div key={index} className="relative bg-white p-[50px] rounded-[30px] flex flex-col gap-[20px] items-center">
                                <div className="icon-div flex items-center size-[100px] bg-linear-to-r from-gradeColor1 to-gradeColor2 rounded-[20px] ">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        title={item.title}
                                        width={30}
                                        height={30}
                                        className="w-full h-[60px]"
                                    />
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <h3 className="capitalize text-center font-semibold text-[24px]">{item.title}</h3>
                                    <p className="font-normal text-center text-[18px]">{item.description}</p>
                                    <Link
                                        href=""
                                        title={`Explore ${item.url}`}
                                        className="text-center font-semibold text-[18px] pt-[10px] flex items-center gap-4 group/link"
                                    >Explore {item.buttonText} <Icons.BtnArrow className="fill-black group-hover/link:translate-x-2 common-transition" /></Link>

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
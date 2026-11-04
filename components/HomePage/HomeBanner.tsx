import Image from "next/image";
import { Icons } from "../common/Icons";
import ContentMain from "../common/ContentMain";
import MainBtn from "../common/MainBtn";

function HomeBanner() {
    return (
        <div className="main-padding md:mt-[50px] md:mb-0 sm:mt-[80px] mt-[50px] sm:mb-[100px] flex flex-col items-center xl:gap-[80px] md:gap-[60px] gap-[60px]">
            <div className="top-section flex flex-col md:gap-5 gap-4 items-center">
                <h1 className="text-center leading-tight text-[26px] sm:text-[24px] md:text-[36px] lg:text-[44px] xl:text-[50px] ">Where Every Pet Leaves <br /> Looking &
                    <span className="font-bold relative"> Feeling Like Royalty
                        <Icons.shineIcon className="absolute md:top-[0px] top-[-3px] md:right-[-20px] right-[-20px] z-10 md:size-[20px] size-[18px] md:block hidden" />
                    </span>
                </h1>
                <ContentMain description={"Certified gentle groomers, bubbly hydrotherapy baths, and stress- free breed styling. We treat your beloved companions to a soothing sanctuary crafted with love and organic botanicals."} className="text-center xl:w-[70%] lg:w-[90%] w-full" />
                <div className="flex md:flex-row flex-col items-center md:gap-5 gap-3">
                    <MainBtn bookIcon text="Book Spa Session" url="/" btnType="outline" className="text-nowrap" />
                    <MainBtn BtnArrow text="Explore Packages" url="/" btnType="fill" className="text-nowrap" />
                </div>
            </div>
            <Image
                loading="eager"
                className="w-full h-auto shadow-custom-shadow lg:rounded-[30px] md:rounded-[20px] rounded-[10px]"
                style={{ width: "100%", height: "auto" }}
                src="/assets/img/dashboard-image.png" alt="Dashboard Image" title="Dashboard Image" width={1200} height={630} />
        </div>
    )
}

export default HomeBanner

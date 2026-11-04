import Image from "next/image";
import { Icons } from "../common/Icons";
import ContentMain from "../common/ContentMain";
import MainBtn from "../common/MainBtn";

function HomeBanner() {
    return (
        <div className="main-padding mt-[50px] flex flex-col items-center xl:gap-[80px] gap-[60px]">
            <div className="top-section flex flex-col gap-5 items-center">
                <h1 className="text-center leading-tight text-[36px] lg:text-[44px] xl:text-[50px] ">Where Every Pet Leaves <br /> Looking &
                    <span className="font-bold relative"> Feeling Like Royalty
                        <Icons.shineIcon className="absolute top-[0px] right-[-20px] z-10" />
                    </span>
                </h1>
                <ContentMain description={"Certified gentle groomers, bubbly hydrotherapy baths, and stress- free breed styling. We treat your beloved companions to a soothing sanctuary crafted with love and organic botanicals."} className="text-center xl:w-[70%] lg:w-[90%]" />
                <div className="flex items-center gap-5">
                    <MainBtn bookIcon text="Book Spa Session" url="/" btnType="outline" />
                    <MainBtn BtnArrow text="Explore Packages" url="/" btnType="fill" />
                </div>
            </div>
            <Image
                loading="eager"
                className="w-full h-auto shadow-custom-shadow lg:rounded-[30px] rounded-[20px]"
                style={{ width: "100%", height: "auto" }}
                src="/assets/img/dashboard-image.png" alt="Dashboard Image" title="Dashboard Image" width={1200} height={630} />
        </div>
    )
}

export default HomeBanner

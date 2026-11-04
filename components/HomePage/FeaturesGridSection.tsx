import Image from "next/image"

const GridData: Array<any> = [
    {
        title: "All In One App",
        description: "Book spa sessions, manage your pets, and explore grooming services",
        img: "/assets/img/grid-image-3.png"
    },
    {
        title: "18,500+",
        description: "Happy Pets Groomed",
        img: "/assets/img/grid-image-2.jpg"
    },
    {
        title: "12+",
        description: "Certified Stylists"
    },
    {
        title: "10K+",
        description: "Five Star Reviews"
    },
    {
        title: "Zero Toxins",
        description: "using 100% Organic Products",
        img: "/assets/img/grid-image-4.jpg"
    },
]

const GridPoints = [
    "100% Fear Free Certified",
    "organic Tearless Shampoos",
    "No Stressful Cages"
]

function FeaturesGridSection() {
    return (
        <div className="main-padding y-gap">
            <div className="grid md:grid-cols-6 grid-rows-6 xl:gap-4 gap-3">
                {/* Grid 1 */}
                <div className="relative xl:rounded-[30px] rounded-[20px] overflow-hidden col-span-2 bg-[#fff] min-h-[120px] row-span-6">
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="2xl:text-[40px] xl:text-[32px] md:text-[24px] text-[22px] font-bold leading-tight">{GridData[0].title}</h3>
                        <p className="2xl:text-[18px] xl:text-[16px] text-[14px] text-center leading-tight xl:w-[90%] md:w-[100%] w-[100%] font-normal">{GridData[0].description}</p>
                    </div>
                    <Image className="md:absolute relative left-1/2 -translate-x-[calc(50%-20px)] xl:-translate-x-[calc(50%-30px)] 2xl:-translate-x-[calc(50%-40px)] bottom-0 w-auto 2xl:h-[440px] xl:h-[360px] lg:h-[300px] h-[260px] object-contain lg:max-h-[65%] max-h-[80%]" src={GridData[0].img} alt="" width={500} height={650} style={{ width: "auto" }} />
                </div>

                {/* Grid 2 */}
                <div className="relative xl:rounded-[30px] rounded-[20px] overflow-hidden col-span-2 md:min-h-[120px] min-h-[280px] row-span-4 col-start-3">
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="2xl:text-[40px] xl:text-[32px] lg:text-[24px] text-[22px] font-bold leading-tight">{GridData[1].title}</h3>
                        <p className="2xl:text-[18px] xl:text-[16px] text-[14px] text-center leading-tight w-[90%] font-normal">{GridData[1].description}</p>
                    </div>
                    <span className="absolute -z-1 left-0 top-0 w-full h-[55%] bg-linear-to-b from-[#ffffffea] via-[#ffffffe3] to-[#ffffff00]"></span>
                    <Image className="absolute -z-2 top-0 left-0 w-full h-full 2xl:h-full object-cover xl:rounded-[30px] rounded-[20px]" src={GridData[1].img} alt="" width={500} height={500} />
                </div>

                {/* Grid 3 */}
                <div className="xl:rounded-[30px] rounded-[20px] row-span-2 bg-[#fff] min-h-[120px] col-start-5 flex items-center justify-center">
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="2xl:text-[40px] xl:text-[32px] lg:text-[24px] text-[22px] font-bold leading-tight">{GridData[2].title}</h3>
                        <p className="2xl:text-[18px] xl:text-[16px] text-[14px] text-center leading-tight w-full font-normal">{GridData[2].description}</p>
                    </div>
                </div>
                {/* Grid 4 */}
                <div className="xl:rounded-[30px] rounded-[20px] row-span-2 bg-[#fff] min-h-[120px] col-start-6 flex items-center justify-center">
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="2xl:text-[40px] xl:text-[32px] lg:text-[24px] text-[22px] font-bold leading-tight">{GridData[3].title}</h3>
                        <p className="2xl:text-[18px] xl:text-[16px] text-[14px] text-center leading-tight w-full font-normal">{GridData[3].description}</p>
                    </div>
                </div>

                {/* Grid 5 */}
                <div className="relative xl:rounded-[30px] rounded-[20px] overflow-hidden col-span-2 bg-[#fff] min-h-[120px] row-span-2 col-start-3 row-start-5 flex items-center">
                    <div className="content-div w-full flex flex-col gap-[3px] items-end justify-center px-[10px] py-[26px] xl:pe-[32px] md:pe-[20px]">
                        <h3 className="2xl:text-[40px] xl:text-[32px] lg:text-[24px] text-[22px] font-bold leading-tight">{GridData[4].title}</h3>
                        <p className="2xl:text-[18px] xl:text-[16px] text-[14px] text-end leading-tight w-full font-normal lg:max-w-[180px] xl:max-w-[70%]">{GridData[4].description}</p>
                    </div>
                    <Image className="absolute z-1 top-1/2 left-0 -translate-y-1/2 w-auto h-full object-contain rounded-[40px]" src={GridData[4].img} alt="" width={500} height={500} style={{ width: "auto" }} />
                </div>

                {/* Grid 6 */}
                <div className="xl:rounded-[30px] rounded-[20px] col-span-2 max-h-[400px] row-span-4 col-start-5 row-start-3">
                    <Image className="w-full h-full object-cover xl:rounded-[30px] rounded-[20px]" src={'/assets/img/grid-image-1.jpg'} alt="" width={500} height={500} />
                </div>
            </div>

        </div>
    )
}

export default FeaturesGridSection

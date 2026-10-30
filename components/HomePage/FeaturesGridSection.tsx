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
            <div className="grid grid-cols-6 grid-rows-6 gap-4">
                {/* Grid 1 */}
                <div className="relative rounded-[30px] col-span-2 bg-[#fff] min-h-[120px] row-span-6">
                    <Image className="rounded-[30px] absolute left-[40px] bottom-0 h-[440px] object-contain" src={GridData[0].img} alt="" width={500} height={650} />
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="text-[40px] font-bold leading-tight">{GridData[0].title}</h3>
                        <p className="text-[18px] text-center leading-tight w-[90%] font-normal">{GridData[0].description}</p>
                    </div>
                </div>

                {/* Grid 2 */}
                <div className="relative rounded-[30px] col-span-2 min-h-[120px] row-span-4 col-start-3">
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="text-[40px] font-bold leading-tight">{GridData[1].title}</h3>
                        <p className="text-[18px] text-center leading-tight w-[90%] font-normal">{GridData[1].description}</p>
                    </div>
                    <span className="absolute -z-1 left-0 top-0 w-full h-[55%] bg-linear-to-b from-[#ffffffea] via-[#ffffffe3] to-[#ffffff00]"></span>
                    <Image className="absolute -z-2 top-0 left-0 w-full h-full object-cover rounded-[30px]" src={GridData[1].img} alt="" width={500} height={500} />
                </div>

                {/* Grid 3 */}
                <div className="rounded-[30px] row-span-2 bg-[#fff] min-h-[120px] col-start-5 flex items-center justify-center">
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="text-[40px] font-bold leading-tight">{GridData[2].title}</h3>
                        <p className="text-[18px] text-center leading-tight w-full font-normal">{GridData[2].description}</p>
                    </div>
                </div>
                {/* Grid 4 */}
                <div className="rounded-[30px] row-span-2 bg-[#fff] min-h-[120px] col-start-6 flex items-center justify-center">
                    <div className="content-div w-full flex flex-col gap-[3px] items-center justify-center px-[10px] py-[26px]">
                        <h3 className="text-[40px] font-bold leading-tight">{GridData[3].title}</h3>
                        <p className="text-[18px] text-center leading-tight w-full font-normal">{GridData[3].description}</p>
                    </div>
                </div>

                {/* Grid 5 */}
                <div className="relative rounded-[30px] overflow-hidden col-span-2 bg-[#fff] min-h-[120px] row-span-2 col-start-3 row-start-5 flex items-center">
                    <div className="content-div w-full flex flex-col gap-[3px] items-end justify-center px-[10px] py-[26px] pe-[32px]">
                        <h3 className="text-[40px] font-bold leading-tight">{GridData[4].title}</h3>
                        <p className="text-[18px] text-end leading-tight w-full font-normal">{GridData[4].description}</p>
                    </div>
                    <Image className="absolute z-1 top-1/2 left-0 -translate-y-1/2  w-fit h-full object-contain rounded-[40px]" src={GridData[4].img} alt="" width={500} height={500} />
                </div>

                {/* Grid 6 */}
                <div className="rounded-[30px] col-span-2 max-h-[400px] row-span-4 col-start-5 row-start-3">
                    <Image className="w-full h-full object-cover rounded-[30px]" src={'/assets/img/grid-image-1.jpg'} alt="" width={500} height={500} />
                </div>
            </div>

        </div>
    )
}

export default FeaturesGridSection
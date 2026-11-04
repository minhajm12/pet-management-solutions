import Link from "next/link";
import { Icons } from "./Icons";

function MainBtn({
    text,
    url,
    btnType = 'fill',
    bookIcon = false,
    BtnArrow = false,
    iconDisable = false,
    className = '',
}: {
    text: string;
    url: string;
    btnType?: string;
    bookIcon?: boolean;
    iconDisable?: boolean;
    BtnArrow?: boolean;
    className?: string;
}) {
    return (
        <>
            {btnType === 'outline' && (
                <Link
                    href={url}
                    aria-label={text}
                    title={text}
                    className={`w-fit font-poppins hover:bg-primaryColor hover:text-white common-transition px-[30px] py-[8px] border border-primaryColor rounded-[40px] font-medium 2xl:text-[18px] text-[16px] flex items-center gap-3 group/btn ${className}`}
                >
                    {bookIcon && <Icons.BookIcon className={`${iconDisable == true ? 'hidden md:block' : ''} fill-black group-hover/btn:fill-white common-transition shrink-0`} />}
                    {text}
                    {BtnArrow && <Icons.BtnArrow className={`${iconDisable == true ? 'hidden md:block' : ''} fill-black group-hover/btn:-rotate-45 common-transition shrink-0`} />}
                </Link>
            )}
            {btnType === 'fill' && (
                <Link
                    href={url}
                    aria-label={text}
                    title={text}
                    className={`w-fit font-poppins bg-linear-to-r from-gradeColor1 to-gradeColor2 text-white hover:bg-transparent common-transition px-[30px] py-[8px] border border-primaryColor rounded-[40px] font-medium 2xl:text-[18px] text-[16px] flex items-center gap-3 group/btn ${className}`}
                >
                    {bookIcon && <Icons.BookIcon className={`${iconDisable == true ? 'hidden md:block' : ''} fill-white common-transition shrink-0`} />}
                    {text}
                    {BtnArrow && <Icons.BtnArrow className={`${iconDisable == true ? 'hidden md:block' : ''} fill-white group-hover/btn:-rotate-45 common-transition shrink-0`} />}
                </Link>
            )}
        </>
    );
}

export default MainBtn;

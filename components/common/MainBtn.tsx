import Link from "next/link"
import { Icons } from "./Icons"

function MainBtn({ text, url, btnType = 'fill', bookIcon = false, BtnArrow = false }: { text: string, url: string, btnType?: string, bookIcon?: boolean, BtnArrow?: boolean }) {
    return (
        <>
            {btnType === 'outline' && (
                <Link href={url} aria-label={text} title={text} className="w-fit font-poppins hover:bg-primaryColor hover:text-white common-transition px-[30px] py-[8px] border border-primaryColor rounded-[40px] font-medium 2xl:text-[18px] text-[16px] flex items-center gap-3 group">
                    {bookIcon && <Icons.BookIcon className="fill-black group-hover:fill-white common-transition" />}
                    {text}
                    {BtnArrow && <Icons.BtnArrow className="fill-black group-hover:-rotate-45 common-transition" />}
                </Link>
            )}
            {btnType === 'fill' && (
                <Link href={url} aria-label={text} title={text} className="w-fit font-poppins bg-linear-to-r from-gradeColor1 to-gradeColor2  text-white hover:bg-transparent common-transition px-[30px] py-[8px] border border-primaryColor rounded-[40px] font-medium 2xl:text-[18px] text-[16px] flex items-center gap-3 group">
                    {bookIcon && <Icons.BookIcon className="fill-white group-hover:fill-white common-transition" />}
                    {text}
                    {BtnArrow && <Icons.BtnArrow className="fill-white group-hover:-rotate-45 common-transition" />}
                </Link>
            )}
        </>
    )
}

export default MainBtn
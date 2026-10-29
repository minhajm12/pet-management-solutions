'use client'

import Image from "next/image"
import Link from "next/link"
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import MobileMenu from "../common/MobileMenu";
import { useState } from "react";
// import { Icons } from "../common/Icons";
import { usePathname } from "next/navigation";
import MainBtn from "../common/MainBtn";
// import { headerConfig } from "@/lib/data/common/header";

const headerData = {
    branding: {
        logoSrc: "/assets/img/logo/shear-heaven-logo.svg",
        logoAlt: "Shear Heaven Pet Spa Logo",
        logoTitle: "Shear Heaven Pet Spa Logo",
    },
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Services",
            href: "#",
        },
        {
            label: "Spa Packages",
            href: "#",
        },
        {
            label: "About",
            href: "#",
        },
    ],
    ctaButton: {
        label: "Book Now",
        href: "/",
    },
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="py-[15px] full-padding bg-white">
            <nav className="">
                <div className="w-full flex items-center justify-between">
                    {/* Menu Button & Logo */}
                    <div
                        className="flex w-fit">
                        <Link href="/" title="Navigate to Home" className="logo md:w-[122px] w-[100px]">
                            <Image
                                src={headerData.branding.logoSrc}
                                alt={headerData.branding.logoAlt}
                                title={headerData.branding.logoTitle}
                                width={122}
                                height={68}
                                preload
                                className="w-full h-auto"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden w-full xl:block md:w-auto ">
                        <ul className="relative font-normal flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0">
                            {headerData.navItems?.map((link, index) => {
                                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(`${link.href}/`));
                                return (
                                    <li
                                        key={index}>
                                        <Link
                                            href={link.href}
                                            title={`Navigate to ${link.label}`}
                                            className={`!font-google-sans relative overflow-hidden flex flex-col py-[4px] lg:px-[16px] xl:px-[18px] rounded-[40px] 2xl:text-[18px] text-[16px] font-normal transition duration-300 group ${isActive
                                                ? "!font-bold"
                                                : ""
                                                }`}
                                        >
                                            <span className={`!font-google-sans left-0 top-1/2 duration-300 transition-all text-nowrap ${isActive
                                                ? ""
                                                : ""
                                                }`}>{link.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex items-center gap-5">
                        {/* Buttons */}
                        <div className="md:block hidden">
                            <MainBtn text="Sign In" url="/" btnType="outline" />
                        </div>
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="text-current xl:hidden cursor-pointer"
                            title="Open Navigation Menu"
                        >
                            {/* <Icons.Menu_Icon className="size-[34px]" /> */}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {/* <Sheet open={menuOpen} onOpenChange={() => setMenuOpen(false)}>
                <SheetContent side={"right"} className="w-[85%] z-99">
                    <MobileMenu navLinks={headerConfig.navLinks} closeMenu={() => setMenuOpen(false)} />
                </SheetContent>
            </Sheet> */}
        </header>
    )
}

export default Header
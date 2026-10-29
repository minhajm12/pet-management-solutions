'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MobileMenu({ closeMenu, navLinks }: any) {
    const pathname = usePathname();

    return (
        <nav className="p-[30px]">
            <div className="flex flex-col gap-[50px]">
                {/* Menu Button & Logo */}
                <div className="flex">
                    <div className="logo w-[150px]">
                        <Image preload src="/assets/img/logo/shear-heaven-logo.svg" alt="Shear Heaven Logo" title="Shear Heaven Pet Spa Logo" width={122} height={68} loading="eager" className="w-full h-auto" style={{ width: "auto", height: "auto" }} />
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <div className="w-full">
                    <ul className="relative font-normal flex flex-col gap-[25px]">
                        {/* <span className="absolute top-0 left-0 w-[30px] bg-black h-full"></span> */}
                        {navLinks?.map((link: any, index: any) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(`${link.href}/`));
                            return (
                                <li key={index}>
                                    <Link
                                        onClick={closeMenu}
                                        href={link.href}
                                        title={`Navigate to ${link.label}`}
                                        className={`relative overflow-hidden flex flex-col rounded-[0px] lg:text-[22px] text-[18px] bg-transparent w-fit ${isActive ? "font-semibold text-black" : ""}`}
                                    >
                                        <span className="left-0 top-1/2 group-hover:-translate-y-[230%] duration-300 transition-all text-nowrap group-hover:text-white">{link.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    {/* Buttons */}
                    <div onClick={closeMenu} className="mt-6 block md:hidden">
                        {/* <MainBtn text="Book Now" url="/booknow" /> */}
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default MobileMenu
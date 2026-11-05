"use client";

import Image from "next/image";
import Link from "next/link";
import { Icons } from "../common/Icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface HeaderProfileProps {
  className?: string;
  userName?: string;
  avatarSrc?: string;
  onLogout?: () => void;
}

export default function HeaderProfile({
  className = "",
  userName = "Alex",
  avatarSrc = "/assets/img/grid-image-2.jpg",
  onLogout,
}: HeaderProfileProps) {
  const menuItems = [
    {
      label: "My Profile",
      href: "/profile",
      icon: Icons.Profile_Icon,
    },
    {
      label: "My Pets",
      href: "/pets",
      icon: Icons.Paw_Icon,
    },
    {
      label: "My Bookings",
      href: "/bookings",
      icon: Icons.Booking_Icon,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: Icons.Notification_Icon,
    },
    {
      label: "Account Settings",
      href: "/settings",
      icon: Icons.AccountSettings_Icon,
    },
  ];

  return (
    <div className={`flex items-center gap-3 sm:gap-4 font-poppins ${className}`}>
      {/* My Pets Header Pill */}
      <Link
        href="/pets"
        className="flex items-center gap-3 bg-[#f5f5f5] hover:bg-[#ebebeb] transition-colors duration-200 rounded-full pl-5 pr-1.5 py-1.5 cursor-pointer select-none group"
        title="View My Pets"
      >
        <span className="font-semibold text-[15px] text-neutral-900 tracking-tight">
          My Pets
        </span>
        <span className="size-[38px] rounded-full bg-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
          <Icons.MyPets_Icon className="w-[22px] h-[20px]" />
        </span>
      </Link>

      {/* User Avatar with Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="size-[48px] rounded-full overflow-hidden border border-neutral-200 hover:ring-2 hover:ring-black/15 focus:outline-none focus:ring-2 focus:ring-black/20 cursor-pointer transition-all shrink-0"
            title="Open Profile Menu"
            aria-label="User profile menu"
          >
            <Image
              src={avatarSrc}
              alt={`${userName}'s profile`}
              width={48}
              height={48}
              className="w-full h-full object-cover object-center"
            />
          </button>
        </DropdownMenuTrigger>

        {/* Dropdown Content aligned with the profile avatar's right edge */}
        <DropdownMenuContent
          align="end"
          alignOffset={0}
          sideOffset={12}
          className="w-[270px] bg-white rounded-[24px] p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-neutral-100 font-poppins z-50"
        >
          {/* Greeting Header */}
          <div className="px-3.5 pt-2 pb-2">
            <h3 className="font-semibold text-[17px] text-neutral-900 leading-snug">
              Hi, {userName}..!
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DropdownMenuItem
                  key={item.label}
                  asChild
                  className="cursor-pointer group rounded-[10px] px-3.5 py-3 text-[15px] font-medium text-neutral-900 hover:bg-[#F3F4F6] focus:bg-[#F3F4F6] data-[highlighted]:bg-[#F3F4F6] data-[highlighted]:text-black transition-colors outline-none"
                >
                  <Link href={item.href} className="flex items-center gap-3.5 w-full">
                    <span className="flex items-center justify-center size-[20px] shrink-0 text-black">
                      <IconComponent className="size-[17px] text-black" />
                    </span>
                    <span className="leading-none group-hover:translate-x-2 common-transition">{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuSeparator className="my-1.5 bg-neutral-100 h-px" />

            {/* Logout Action */}
            <DropdownMenuItem
              onSelect={() => {
                if (onLogout) {
                  onLogout();
                }
              }}
              className="cursor-pointer rounded-[14px] px-3.5 py-2.5 text-[15px] font-medium text-red-600 hover:bg-red-50 focus:bg-red-50 data-[highlighted]:bg-red-50 data-[highlighted]:text-red-700 transition-colors outline-none flex items-center gap-3.5 w-full"
            >
              <span className="flex items-center justify-center size-[20px] shrink-0 text-red-600">
                <Icons.Logout_Icon className="size-[17px]" />
              </span>
              <span className="leading-none">Logout</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LoginAsCustomer from "./LoginAsCustomer";
import LoginAsGroomer from "./LoginAsGroomer";
import { Icons } from "@/components/common/Icons";

export default function AuthLogin() {
  const [sharedEmail, setSharedEmail] = useState("");

  return (
    <div className="w-full max-w-[420px] sm:max-w-[440px] flex flex-col mx-auto">
      {/* 1. Welcome Heading & Supporting Text */}
      <div className="flex flex-col mb-6 sm:mb-7">
        <h1 className="font-google-sans text-[34px] sm:text-[40px] lg:text-[44px] font-bold text-black leading-tight mb-2 tracking-tight">
          Welcome Back
        </h1>
        <p className="font-poppins text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-normal">
          Customers and groomers sign in here. Book appointments, manage your pets, or run your grooming day.
        </p>
      </div>

      {/* 2. Customer / Groomer Login Tabs */}
      <Tabs defaultValue="customer" className="w-full">
        <TabsList className="bg-black rounded-full p-1 sm:p-1.5 flex items-center w-full mb-6">
          <TabsTrigger
            value="customer"
            className="flex-1 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-semibold rounded-full transition-all duration-200 cursor-pointer data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
          >
            Login as Customer
          </TabsTrigger>
          <TabsTrigger
            value="groomer"
            className="flex-1 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-semibold rounded-full transition-all duration-200 cursor-pointer data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
          >
            Login as Groomer
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Customer Form */}
        <TabsContent value="customer">
          <LoginAsCustomer email={sharedEmail} onEmailChange={setSharedEmail} />
        </TabsContent>

        {/* Tab 2: Groomer Form */}
        <TabsContent value="groomer">
          <LoginAsGroomer email={sharedEmail} onEmailChange={setSharedEmail} />
        </TabsContent>
      </Tabs>

      {/* 3. Social Login Divider */}
      <div className="flex items-center gap-3 my-5 sm:my-6">
        <div className="flex-1 h-[1px] bg-gray-300"></div>
        <span className="font-poppins text-[12px] text-gray-500 whitespace-nowrap">
          or continue with
        </span>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* 4. Social Login Buttons */}
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Continue with Google"
          className="hover:opacity-80 transition-opacity cursor-pointer inline-flex items-center justify-center"
        >
          <Image
            src="/assets/img/svg/authgoogle.svg"
            alt="Google"
            width={116}
            height={38}
            className="w-[116px] h-[38px]"
            style={{ width: "auto", height: "auto" }}
          />
        </button>
        <button
          type="button"
          aria-label="Continue with Apple"
          className="hover:opacity-80 transition-opacity cursor-pointer inline-flex items-center justify-center"
        >
          <Image
            src="/assets/img/svg/authapple.svg"
            alt="Apple"
            width={116}
            height={38}
            className="w-[116px] h-[38px]"
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      </div>

      {/* 5. Create Account Section */}
      <div className="text-center mt-4 sm:mt-5">
        <p className="font-poppins text-[13px] text-gray-700">
          Don&apos;t have an account?{" "}
          <Link href="#" className="font-bold text-black hover:underline">
            Create Account
          </Link>
        </p>
      </div>

      {/* 6. Back to Home Button */}
      <div className="flex justify-center mt-5 sm:mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#f4f4f4] hover:bg-[#eaeaea] text-black border border-gray-200/80 rounded-full px-5 py-2 sm:py-2.5 font-poppins text-[12px] sm:text-[13px] font-medium transition-colors cursor-pointer"
        >
          <Icons.BtnArrow className="scale-x-[-1] w-[14px] h-[10px] fill-current" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}


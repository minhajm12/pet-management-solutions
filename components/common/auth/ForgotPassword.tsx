"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/common/Icons";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Placeholder reset link dispatch simulation
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage("Password reset link sent! Check your inbox.");
    } catch {
      setErrorMessage("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col mx-auto">
      {/* 1. Heading & Supporting Text */}
      <div className="flex flex-col lg:items-start items-center mb-6 sm:mb-7">
        <h1 className="font-google-sans text-[26px] md:text-[32px] lg:text-[30px] xl:text-[34px] 2xl:text-[44px] font-bold text-black leading-tight mb-2 tracking-tight">
          Forgot Password?
        </h1>
        <p className="font-poppins text-[14px] md:text-[16px] 2xl:text-[18px] text-black leading-tight font-normal lg:text-start text-center lg:w-full w-[100%]">
          Enter your email id and we&apos;ll send a link to reset your password on your account
        </p>
      </div>

      <div className="form-section lg:mx-[unset] mx-auto w-[100%] lg:w-auto md:max-w-[450px] lg:max-w-[500px] 2xl:mt-[30px] mt-[10px]">
        <form onSubmit={handleSubmit} className="w-full flex flex-col" noValidate={false}>
          {/* Email Field */}
          <div className="flex flex-col mb-5">
            <label
              htmlFor="forgot-email"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthEmail_Icon className="shrink-0" />
              <span>Enter Email ID</span>
            </label>
            <input
              id="forgot-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
              placeholder="name@gmail.com"
              className="w-full bg-white border border-black rounded-full px-5 2xl:py-4 lg:py-3.5 py-3 text-[16px] md:text-[16px] text-black placeholder:text-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          {/* Feedback Alerts */}
          {errorMessage && (
            <p className="font-poppins text-[12px] text-red-600 mb-3 px-1">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="font-poppins text-[12px] text-green-700 mb-3 px-1">{successMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-gradeColor1 to-gradeColor2 hover:opacity-90 active:scale-[0.99] text-white font-poppins font-bold text-[14px] md:text-[16px] lg:text-[18px] py-3.5 rounded-full transition-all cursor-pointer shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending Link..." : "Send Link"}
          </button>
        </form>

        {/* Back to Home Button */}
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
    </div>
  );
}


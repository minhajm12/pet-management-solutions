"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/common/Icons";

export default function AuthSignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      // Placeholder registration simulation
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage("Account created successfully! Verification code sent.");
    } catch {
      setErrorMessage("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col mx-auto">
      {/* 1. Heading & Supporting Text */}
      <div className="flex flex-col lg:items-start items-center mb-6 sm:mb-7">
        <h1 className="font-google-sans text-[26px] md:text-[32px] lg:text-[30px] xl:text-[34px] 2xl:text-[44px] font-bold text-black leading-tight mb-2 tracking-tight">
          Create your Account
        </h1>
        <p className="font-poppins text-[14px] md:text-[16px] 2xl:text-[18px] text-black leading-tight font-normal lg:text-start text-center lg:w-full w-[100%]">
          Join Shear Heaven to book spa days online. We&apos;ll send a one time code to verify your email.
        </p>
      </div>

      <div className="form-section lg:mx-[unset] mx-auto w-[100%] lg:w-auto md:max-w-[450px] lg:max-w-[500px] 2xl:mt-[30px] mt-[10px]">
        <form onSubmit={handleSubmit} className="w-full flex flex-col" noValidate={false}>
          {/* Field 1: Full Name */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="signup-fullname"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthEmail_Icon className="shrink-0" />
              <span>Enter Full Name</span>
            </label>
            <input
              id="signup-fullname"
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setErrorMessage("");
              }}
              placeholder="Eg: Robert Martin"
              className="w-full bg-white border border-black rounded-full px-5 2xl:py-4 lg:py-3.5 py-3 text-[16px] md:text-[16px] text-black placeholder:text-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          {/* Field 2: Email */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="signup-email"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthPassword_Icon className="shrink-0" />
              <span>Enter Email Address</span>
            </label>
            <input
              id="signup-email"
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

          {/* Field 3: Phone Number */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="signup-phone"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthPassword_Icon className="shrink-0" />
              <span>Enter Phone Number</span>
            </label>
            <input
              id="signup-phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrorMessage("");
              }}
              placeholder="+(817) 123-4567"
              className="w-full bg-white border border-black rounded-full px-5 2xl:py-4 lg:py-3.5 py-3 text-[16px] md:text-[16px] text-black placeholder:text-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          {/* Field 4: Password */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="signup-password"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthPassword_Icon className="shrink-0" />
              <span>Enter Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="new-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="••••••••••••••••"
                className="w-full bg-white border border-black rounded-full px-5 pr-12 2xl:py-4 lg:py-3.5 py-3 text-[16px] md:text-[16px] text-black placeholder:text-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-500 hover:text-black transition-colors cursor-pointer p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <Icons.PasswordEyeOff_Icon className="size-5" />
                ) : (
                  <Icons.PasswordEyeOn_Icon className="size-5" />
                )}
              </button>
            </div>
          </div>

          {/* Field 5: Confirm Password */}
          <div className="flex flex-col mb-5">
            <label
              htmlFor="signup-confirm-password"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthPassword_Icon className="shrink-0" />
              <span>Confirm Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                id="signup-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="••••••••••••••••"
                className="w-full bg-white border border-black rounded-full px-5 pr-12 2xl:py-4 lg:py-3.5 py-3 text-[16px] md:text-[16px] text-black placeholder:text-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 text-gray-500 hover:text-black transition-colors cursor-pointer p-1"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <Icons.PasswordEyeOff_Icon className="size-5" />
                ) : (
                  <Icons.PasswordEyeOn_Icon className="size-5" />
                )}
              </button>
            </div>
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
            {isLoading ? "Please wait..." : "Continue"}
          </button>
        </form>

        {/* Already Registered Section (Replaces create account section) */}
        <div className="text-center mt-5 sm:mt-6">
          <p className="font-poppins text-[13px] sm:text-[14px] text-gray-700">
            Already Registered?{" "}
            <Link href="/login" className="font-bold text-black hover:underline">
              Sign In
            </Link>
          </p>
        </div>

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


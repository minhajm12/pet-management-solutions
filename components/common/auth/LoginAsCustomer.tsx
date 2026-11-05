"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/common/Icons";

interface LoginAsCustomerProps {
  email?: string;
  onEmailChange?: (email: string) => void;
}

export default function LoginAsCustomer({
  email: externalEmail,
  onEmailChange,
}: LoginAsCustomerProps) {
  const [internalEmail, setInternalEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const email = externalEmail !== undefined ? externalEmail : internalEmail;

  const handleEmailChange = (val: string) => {
    if (onEmailChange) {
      onEmailChange(val);
    } else {
      setInternalEmail(val);
    }
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    try {
      // Placeholder authentication simulation
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage("Customer login verified successfully!");
    } catch {
      setErrorMessage("Login failed. Please verify your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col" noValidate={false}>
      {/* Field 1: Email */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor="customer-email"
          className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
        >
          <Icons.AuthEmail_Icon className="shrink-0" />
          <span>Enter Email ID</span>
        </label>
        <input
          id="customer-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="name@gmail.com"
          className="w-full bg-white border border-black rounded-full px-5 pr-12 2xl:py-4 lg:py-3.5 py-3 text-[16px] md:text-[16px] text-black placeholder:text-gray-400 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
        />
      </div>

      {/* Field 2: Password */}
      <div className="flex flex-col mb-2">
        <label
          htmlFor="customer-password"
          className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
        >
          <Icons.AuthPassword_Icon className="shrink-0" />
          <span>Enter Password</span>
        </label>
        <div className="relative flex items-center">
          <input
            id="customer-password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage("");
            }}
            placeholder="Enter Password"
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

      {/* Forgot Password Link */}
      <div className="flex justify-end mb-5">
        <Link
          href="/forgot-password"
          className="font-poppins text-[14px] text-black hover:text-black underline transition-colors"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Feedback Alert */}
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
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/common/Icons";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

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
      // Placeholder password reset simulation
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage("Your password has been successfully reset!");
    } catch {
      setErrorMessage("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const criteriaList = [
    { label: "At least one uppercase letter", valid: hasUppercase },
    { label: "At least one lowercase letter", valid: hasLowercase },
    { label: "At least one number", valid: hasNumber },
    { label: "At least one special character", valid: hasSpecial },
  ];

  return (
    <div className="w-full flex flex-col mx-auto">
      {/* 1. Heading & Supporting Text */}
      <div className="flex flex-col lg:items-start items-center mb-6 sm:mb-7">
        <h1 className="font-google-sans text-[26px] md:text-[32px] lg:text-[30px] xl:text-[34px] 2xl:text-[44px] font-bold text-black leading-tight mb-2 tracking-tight">
          Set Up New Password
        </h1>
        <p className="font-poppins text-[14px] md:text-[16px] 2xl:text-[18px] text-black leading-tight font-normal lg:text-start text-center lg:w-full w-[100%]">
          Enter your new password for your account.
        </p>
      </div>

      <div className="form-section lg:mx-[unset] mx-auto w-[100%] lg:w-auto md:max-w-[450px] lg:max-w-[500px] 2xl:mt-[30px] mt-[10px]">
        <form onSubmit={handleSubmit} className="w-full flex flex-col" noValidate={false}>
          {/* Field 1: New Password */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="reset-password"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthPassword_Icon className="shrink-0" />
              <span>Enter Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                id="reset-password"
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

          {/* Field 2: Confirm Password */}
          <div className="flex flex-col mb-5">
            <label
              htmlFor="reset-confirm-password"
              className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-1.5"
            >
              <Icons.AuthPassword_Icon className="shrink-0" />
              <span>Confirm Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                id="reset-confirm-password"
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
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {/* Password Criteria Checklist */}
        <div className="flex flex-col gap-2 mt-5">
          {criteriaList.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              {item.valid ? (
                <span className="size-4 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  ✓
                </span>
              ) : (
                <span className="size-4 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                  <span className="size-1.5 rounded-full bg-gray-400" />
                </span>
              )}
              <span
                className={`font-poppins text-[13px] ${
                  item.valid ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
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


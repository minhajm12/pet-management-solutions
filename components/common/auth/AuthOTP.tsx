"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icons } from "@/components/common/Icons";

export default function AuthOTP() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(25);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    // Only accept numeric input
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    // Handle single character or last entered character
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setErrorMessage("");

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pastedData) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    setErrorMessage("");

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setTimer(25);
    setCanResend(false);
    setSuccessMessage("A fresh verification code has been sent!");
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const code = otp.join("");
    if (code.length < 6) {
      setErrorMessage("Please enter all 6 digits of the code.");
      return;
    }

    setIsLoading(true);

    try {
      // Placeholder verification simulation
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage("Code verified successfully!");
    } catch {
      setErrorMessage("Invalid verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col mx-auto">
      {/* 1. Heading & Supporting Text */}
      <div className="flex flex-col lg:items-start items-center mb-6 sm:mb-7">
        <h1 className="font-google-sans text-[26px] md:text-[32px] lg:text-[30px] xl:text-[34px] 2xl:text-[44px] font-bold text-black leading-tight mb-2 tracking-tight">
          Enter The Code
        </h1>
        <p className="font-poppins text-[14px] md:text-[16px] 2xl:text-[18px] text-black leading-tight font-normal lg:text-start text-center lg:w-full w-[100%]">
          we&apos;ve sent a 6 digit code to user***@gmail.com
        </p>
      </div>

      <div className="form-section lg:mx-[unset] mx-auto w-[100%] lg:w-auto md:max-w-[450px] lg:max-w-[500px] 2xl:mt-[30px] mt-[10px]">
        <form onSubmit={handleSubmit} className="w-full flex flex-col" noValidate={false}>
          {/* OTP Label */}
          <div className="flex items-center gap-2 font-poppins text-[14px] xl:text-[16px] font-medium text-black mb-3">
            <Icons.AuthPassword_Icon className="shrink-0" />
            <span>Enter OTP</span>
          </div>

          {/* OTP Digit Boxes */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={idx === 0 ? handlePaste : undefined}
                className="w-[46px] h-[54px] sm:w-[58px] sm:h-[66px] bg-white border border-black rounded-[14px] sm:rounded-[18px] text-center text-[20px] sm:text-[26px] font-bold text-black outline-none focus:ring-2 focus:ring-black transition-all"
                aria-label={`Digit ${idx + 1}`}
              />
            ))}
          </div>

          {/* Resend Link with Countdown */}
          <div className="mb-6">
            <p className="font-poppins text-[13px] sm:text-[14px] text-black">
              Didn&apos;t get it?{" "}
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResend}
                  className="font-bold underline text-black hover:opacity-75 cursor-pointer"
                >
                  Resend
                </button>
              ) : (
                <>
                  <span className="font-bold underline text-black">Resend</span>{" "}
                  <span className="text-gray-700">
                    in 0:{timer < 10 ? `0${timer}` : timer}
                  </span>
                </>
              )}
            </p>
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
            {isLoading ? "Verifying..." : "Submit"}
          </button>
        </form>

        {/* Already Registered Section */}
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


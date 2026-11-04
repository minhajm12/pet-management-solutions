"use client";

import { useState } from "react";

export default function NewsLetterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    // Frontend validation & placeholder handler
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 4000);
  };

  return (
    <div className="w-full bg-white rounded-[20px] md:rounded-[28px] lg:rounded-[30px] xl:rounded-[40px] p-5 md:p-8 lg:p-8 xl:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
      {/* Newsletter Text Content */}
      <div className="flex flex-col">
        <h2 className="font-google-sans text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-bold text-black leading-tight md:text-start text-center">
          Receive Exclusive Spa Perks & Seasonal Tips
        </h2>
        <p className="font-poppins xl:w-[75%] lg:w-[95%] w-full text-[14px] md:text-[16px] 2xl:text-[18px] text-black font-normal md:leading-relaxed mt-2 sm:mt-2.5 md:text-start text-center">
          Subscribe To Get 15% Off Spa Add-Ons And Early Holiday Appointment Access.
        </p>
      </div>

      {/* Subscription Form */}
      <div className="w-fit lg:w-auto shrink-0">
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-[290px] md:w-[350px] lg:w-[400px] xl:w-[440px] 2xl:w-[480px] border border-gray-400/80 md:rounded-full rounded-[10px] p-1 sm:p-1.5 bg-white common-transition focus-within:border-black"
          noValidate={false}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Enter Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="font-poppins flex-1 bg-transparent px-3 sm:px-5 py-2 text-[14px] xl:text-[16px] text-black placeholder:text-gray-400 outline-none min-w-0"
          />
          <button
            type="submit"
            className="font-poppins bg-linear-to-r from-gradeColor1 to-gradeColor2 hover:bg-pink-600 text-white text-[14px] xl:text-[16px] font-bold tracking-wider uppercase px-5 sm:px-7 py-2.5 sm:py-3 md:rounded-full rounded-[8px] common-transition shrink-0 cursor-pointer"
          >
            {isSubmitted ? "SUBMITTED" : "SUBMIT"}
          </button>
        </form>

        {isSubmitted && (
          <p className="font-poppins text-[12px] text-green-700 font-medium mt-2 px-3">
            Thank you for subscribing to Shear Heaven Perks!
          </p>
        )}
      </div>
    </div>
  );
}


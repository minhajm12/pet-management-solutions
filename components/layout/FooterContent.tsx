import Image from "next/image";
import Link from "next/link";
import { Icons } from "../common/Icons";
import ContentMain from "../common/ContentMain";

export default function FooterContent() {
  return (
    <div className="w-full flex flex-col">
      {/* 4 Footer Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12">
        {/* Column 1: Logo and Brand Description */}
        <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start">
          <Link href="/" title="Navigate to Home" className="block mb-4 sm:mb-5">
            <Image
              src="/assets/img/logo/shear-heaven-logo.svg"
              alt="Shear Heaven Pet Spa Logo"
              title="Shear Heaven Pet Spa Logo"
              width={130}
              height={72}
              className="w-[120px] sm:w-[150px] h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <ContentMain
            className="text-black !leading-normal pe-[30px]"
            description="At Shear Heaven Pet Spa, We Provide Professional Dog Grooming Services With Care, Patience, And Attention To Detail. For Over 20 Years, We've Helped Dogs Look, Feel, And Smell Their Best Through Expert Pet Grooming, Nail Clipping, Flea Baths, And Full Service Pet Care."
          />
        </div>

        {/* Column 2: Spa Treatments */}
        <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
          <h3 className="font-google-sans text-[20px] sm:text-[22px] font-semibold text-black mb-4 sm:mb-6">
            Spa Treatments
          </h3>
          <ul className="space-y-3 font-poppins text-[18px] text-black">
            <li>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                The Royal Spa Sanctuary
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                Full Luxury Scissor Styling
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                Hydro Aroma Bubbly
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
          <h3 className="font-google-sans text-[20px] sm:text-[22px] font-semibold text-black mb-4 sm:mb-6">
            Contact Details
          </h3>
          <div className="space-y-4 font-poppins text-[18px] text-black">
            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="text-black shrink-0 mt-1">
                <Icons.Location_Icon className="w-[20px] h-[20px]" />
              </span>
              <span className="leading-snug">
                2218 S. Bowen, Arlington, TX 76013
              </span>
            </div>

            {/* Grooming Appointments Phone */}
            <div className="flex items-start gap-3">
              <span className="text-black shrink-0 mt-1">
                <Icons.Phone_Icon className="w-[20px] h-[20px]" />
              </span>
              <div>
                <span className="block text-[14px] text-black/70 leading-tight mb-0.5">
                  For Grooming or Pet Care Service Appointments
                </span>
                <a
                  href="tel:8172778433"
                  className="font-semibold text-black hover:underline block leading-snug"
                >
                  (817) 277-8433
                </a>
              </div>
            </div>

            {/* Business Phone */}
            <div className="flex items-start gap-3">
              <span className="text-black shrink-0 mt-1">
                <Icons.Phone_Icon className="w-[20px] h-[20px]" />
              </span>
              <div>
                <span className="block text-[14px] text-black/70 leading-tight mb-0.5">
                  For Website or Other Business Related Calls
                </span>
                <a
                  href="tel:6693385227"
                  className="font-semibold text-black hover:underline block leading-snug"
                >
                  (669) 338-5227
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-black shrink-0">
                <Icons.Mail_Icon className="w-[20px] h-[20px]" />
              </span>
              <a
                href="mailto:shearheaven.dwg@gmail.com"
                className="hover:underline leading-snug break-all"
              >
                shearheaven.dwg@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Working Hours & Social Media */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between">
          <div className="flex flex-col">
            <h3 className="font-google-sans text-[20px] sm:text-[22px] font-semibold text-black mb-3.5">
              Working Hours
            </h3>
            <div className="space-y-2 font-poppins text-[18px] text-black max-w-[320px]">
              <div className="flex justify-between items-center gap-4">
                <span>Tue – Sat</span>
                <span className="font-semibold text-black">9 am – 5 pm</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <span>Sun – Mon</span>
                <span className="font-semibold text-black">Store Closed</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-google-sans text-[20px] sm:text-[22px] font-semibold text-black mt-6 sm:mt-7 mb-3.5">
              Follow Us On Social Media
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shear Heaven on Facebook"
                className="text-black hover:opacity-75 transition-opacity"
              >
                <Icons.Fb_Icon className="w-[27px] h-[27px]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shear Heaven on YouTube"
                className="text-black hover:opacity-75 transition-opacity"
              >
                <Icons.Youtube_Icon className="w-[27px] h-[27px]" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shear Heaven on X"
                className="text-black hover:opacity-75 transition-opacity"
              >
                <Icons.X_Icon className="w-[27px] h-[27px]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shear Heaven on Instagram"
                className="text-black hover:opacity-75 transition-opacity"
              >
                <Icons.Insta_Icon className="w-[27px] h-[27px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="w-full bg-black text-white rounded-full px-6 sm:px-10 py-3.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-10 sm:mt-14">
        <p className="font-poppins text-[16px] text-white/90 font-normal text-center sm:text-left">
          © 2026 Shear Heaven Pet Spa. All Right Reserved.
        </p>
        <div className="font-poppins text-[16px] text-white/90 font-normal flex items-center gap-2 sm:gap-3">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-white/60">|</span>
          <Link href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}

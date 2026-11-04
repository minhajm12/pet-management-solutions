import Image from "next/image";

interface SplashFeature {
  id: string;
  title: string;
  icon: string;
}

const splashFeatures: SplashFeature[] = [
  {
    id: "feature-1",
    title: "Book Appointments In Minutes",
    icon: "/assets/img/auth/authIcon_1.svg",
  },
  {
    id: "feature-2",
    title: "Manage Your Pets in one place",
    icon: "/assets/img/auth/authIcon_2.svg",
  },
  {
    id: "feature-3",
    title: "Fear Free, Certified Stylists",
    icon: "/assets/img/auth/authIcon_3.svg",
  },
];

export default function LoginSplashScreen() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-10 select-none">
      {/* Outer Card Wrapper with bottom padding so dogs can overlap */}
      <div className="relative w-full max-w-[680px] flex flex-col items-center pb-14 sm:pb-16 lg:pb-20">
        {/* Sky Background Card */}
        <div
          className="relative w-full rounded-[36px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden bg-cover bg-center pt-8 sm:pt-12 px-6 sm:px-10 pb-48 sm:pb-56 min-h-[580px] sm:min-h-[640px] lg:min-h-[660px] xl:min-h-[700px] shadow-sm flex flex-col items-center"
          style={{
            backgroundImage: "url('/assets/img/auth/authbg.jpg')",
          }}
        >
          {/* Logo */}
          <div className="w-fit flex justify-center mb-4 sm:mb-5">
            <Image
              src="/assets/img/logo/shear-heaven-logo.svg"
              alt="Shear Heaven Pet Spa Logo"
              title="Shear Heaven Pet Spa Logo"
              width={160}
              height={88}
              priority
              className="w-[140px] sm:w-[160px] h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Promotional Description */}
          <p className="font-poppins text-[13px] sm:text-[14px] lg:text-[15px] text-black font-normal max-w-[440px] mx-auto text-center leading-relaxed mb-6 sm:mb-8">
            Luxury pet spa booking - groomers, packages, and real-time slots powered by your salon API.
          </p>

          {/* Three Feature Cards Container (Translucent Glass Effect) */}
          <div className="w-full max-w-[540px] mx-auto bg-white/70 backdrop-blur-md rounded-[24px] sm:rounded-[28px] border border-white/80 p-4 sm:p-5 shadow-xs">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center items-start">
              {splashFeatures.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center">
                  {/* Black Circular Icon Container */}
                  <div className="size-[42px] sm:size-[46px] bg-black rounded-full flex items-center justify-center mx-auto mb-2.5 sm:mb-3 shadow-xs">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] object-contain"
                      style={{ width: "auto", height: "auto" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Feature Description */}
                  <span className="font-poppins text-[11px] sm:text-[12px] font-medium text-black leading-snug px-1">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Golden Retriever Dogs (Overlaps the bottom edge of the sky card) */}
        <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 w-[340px] sm:w-[410px] lg:w-[450px] xl:w-[480px] pointer-events-none z-20">
          <Image
            src="/assets/img/auth/authDog.png"
            alt="Golden Retriever with Puppy"
            width={510}
            height={512}
            className="w-full h-auto object-contain"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}


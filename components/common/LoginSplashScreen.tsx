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
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
      {/* Outer Card Wrapper with bottom padding so dogs can overlap */}
      <div className="relative w-full  flex flex-col items-center h-full">
        {/* Sky Background Card */}
        <div
          className="relative w-full rounded-[36px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden bg-cover bg-center pt-8 sm:pt-12 px-6 lg:px-10 mc:px-15 2xl:px-20 pb-48 sm:pb-56 min-h-[580px] sm:min-h-[640px] lg:min-h-[660px] xl:min-h-[700px] flex flex-col items-center"
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
              className="w-[140px] xl:!w-[160px] h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Promotional Description */}
          <p className="font-poppins text-[14px] md:text-[16px] 2xl:text-[18px] text-black font-normal 2xl:max-w-[640px] max-w-[440px] mx-auto text-center leading-tight mb-6 sm:mb-8">
            Luxury pet spa booking - groomers, packages, and real-time slots powered by your salon API.
          </p>

          {/* Three Feature Cards Container (Translucent Glass Effect) */}
          <div className="w-full mx-auto bg-white/70 backdrop-blur-md rounded-[24px] sm:rounded-[28px] border border-white/80 py-10 2xl:px-20 xl:px-10 lg:px-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center items-start">
              {splashFeatures.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center">
                  {/* Black Circular Icon Container */}
                  <div className="size-[42px] lg:size-[62px] bg-black rounded-full flex items-center justify-center mx-auto mb-2.5 sm:mb-3">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="!size-[26px] object-contain"
                      style={{ width: "auto", height: "auto" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Feature Description */}
                  <span className="2xl:w-[80%] font-poppins text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-black leading-tight px-1">
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


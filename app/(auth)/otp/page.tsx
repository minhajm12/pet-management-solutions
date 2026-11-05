import type { Metadata } from "next";
import LoginSplashScreen from "@/components/common/LoginSplashScreen";
import AuthContent from "@/components/common/auth/AuthContent";

export const metadata: Metadata = {
  title: "Verify Code | Shear Heaven Pet Spa",
  description: "Enter the verification code sent to your email to verify your Shear Heaven account.",
};

export default function OTPPage() {
  return (
    <div className="grid min-h-screen grid-cols-12 bg-white 2xl:p-[40px] xl:p-[30px] md:p-[20px] p-0">
      {/* Left Column: Splash Screen (7/12) */}
      <div className="hidden lg:flex lg:col-span-7 flex-col justify-center">
        <LoginSplashScreen />
      </div>

      {/* Right Column: Authentication Content (5/12) */}
      <div className="col-span-12 lg:col-span-5 flex items-center justify-center 2xl:px-[100px] mc:px-[80px] xl:px-[60px] lg:px-[40px] md:px-[100px] sm:px-[40px]">
        <div
          className="lg:hidden block md:opacity-100 opacity-30 absolute w-full h-full top-0 left-0 right-0 bottom-0 z-0"
          style={{
            backgroundImage: "url('/assets/img/auth/authbg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <AuthContent AuthData="otp" />
      </div>
    </div>
  );
}


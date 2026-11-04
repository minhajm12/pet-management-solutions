import type { Metadata } from "next";
import LoginSplashScreen from "@/components/common/LoginSplashScreen";
import AuthContent from "@/components/common/auth/AuthContent";

export const metadata: Metadata = {
  title: "Login | Shear Heaven Pet Spa",
  description:
    "Customers and groomers sign in here. Book appointments, manage your pets, or run your grooming day.",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-12 bg-white">
      {/* Left Column: Splash Screen (7/12) */}
      <div className="hidden lg:flex lg:col-span-7 flex-col justify-center">
        <LoginSplashScreen />
      </div>

      {/* Right Column: Authentication Content (5/12) */}
      <div className="col-span-12 lg:col-span-5 flex items-center justify-center min-h-screen">
        <AuthContent />
      </div>
    </div>
  );
}


import Image from "next/image";
import AuthLogin from "./AuthLogin";
import AuthSignUp from "./AuthSignUp";

interface AuthContentProps {
  AuthData?: "login" | "signup";
}

export default function AuthContent({ AuthData = "login" }: AuthContentProps) {
  return (
    <div className="auth-maindiv relative z-1 w-full flex flex-col items-center justify-center bg-white lg:bg-transparent lg:p-0 md:p-[40px] sm:p-[30px] p-[30px] lg:rounded-none rounded-[30px]">
      {/* Logo */}
      <div className="w-fit flex justify-start mb-4 sm:mb-7 lg:hidden">
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
      {AuthData === "login" && <AuthLogin />}
      {AuthData === "signup" && <AuthSignUp />}
    </div>
  );
}

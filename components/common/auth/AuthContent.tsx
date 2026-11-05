import Image from "next/image";
import AuthLogin from "./AuthLogin";

export default function AuthContent() {
  return (
    <div className="relative z-1 w-full flex flex-col items-center justify-center bg-white lg:bg-transparent lg:p-0 md:p-[40px] sm:p-[30px] p-[20px] lg:rounded-none rounded-[30px] max-h-[90vh] overflow-y-auto">
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
      <AuthLogin />
    </div>
  );
}


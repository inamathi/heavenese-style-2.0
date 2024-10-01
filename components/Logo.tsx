import React from "react";
import SplashLogo from "@/public/logo_hstv.svg";

const Logo = () => {
  return (
    <div className="bg-slate-900 flex flex-col gap-8 pt-8 items-center">
      <div className="flex justify-center text-white mt-8 mb-8">
        <SplashLogo
          src="/img/logo_hstv.svg"
          width="500"
          height="200"
          alt="logo"
          className="text-white max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Logo;

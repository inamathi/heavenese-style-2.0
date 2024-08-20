"use client";

import React from "react";
import Link from "next/link";
import Drawer from "../elements/drawer/Drawer";
import GnavMenu from "./GnavMenu";
const Header = () => {
  return (
    <header
      className={`bg-slate-800 text-white py-2 max-[480px]:py4 max-[480px]:px-4 px-6 z-10`}
    >
      <nav className="container mx-auto flex justify-between items-center max-[899px]:hidden">
        <Link href="/">
          <div
            className="text-[1rem] font-bold text-nowrap max-[1000px]:text-[1.8rem] 
          hover:opacity-70 transition-all duration-300"
          >
            HEAVENESE style.tv
          </div>
        </Link>
        <GnavMenu />
      </nav>
      <Drawer />
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerTitle } from "@/constants/header";
import { isMobile } from "@/lib/utils";
import { ReactNode } from "react";

type PropsType = {
  propClass?: string;
  setIsMenuOpen?: (arg0: boolean) => void;
};

type TypeHeader = {
  title: string;
  link: string;
  blank: boolean;
  admin: boolean;
};

const GnavMenu = ({ propClass, setIsMenuOpen }: PropsType) => {
  const currentPath = usePathname();
  const headers: TypeHeader[] = headerTitle;

  const renderHeader = (): ReactNode => {
    if (isMobile()) {
      return null;
    }

    return (
      <div>
        {headers.map((title) => (
          <Link
            onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
            href={title.link}
            className={`w-[fit-content] hover:bg-slate-700 hover:text-primary/60 px-3 py-1 rounded-md font-medium cursor-pointer text-sm
            ${title.admin && "bg-slate-500 text-white"}
            ${
              currentPath == title.link
                ? "bg-slate-700 cursor-default shadow-1 text-primary/70 hover:text-primary/60 "
                : ""
            }`}
            key={title.title}
          >
            {title.title}
          </Link>
        ))}
      </div>
    );
  };

  return <div className="flex gap-3 mx-3">{renderHeader()}</div>;
};

export default GnavMenu;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropsType = {
  propClass?: string;
  setIsMenuOpen?: (arg0: boolean) => void;
};

const GnavMenu = ({ propClass, setIsMenuOpen }: PropsType) => {
  const currentPath = usePathname();

  const links = [
    { label: "TOP", href: "/" },
    { label: "Episode", href: "/episode" },
    { label: "Pickup", href: "/pickup" },
    { label: "Chapter Ch.", href: "/chapter" },
    { label: "Parody", href: "/parody" },
    { label: "Music", href: "/music" },
    { label: "The Message", href: "/message" },
    { label: "Admin", href: "/admin", admin: true }
  ];

  return (
    <div
      className={`flex gap-3 mx-3 max-[899px]:flex-col max-[899px]:text-white 
      max-[899px]:gap-9 max-[767px]:w-[fit-content] max-[767px]:last:w-[70%] ${propClass}`}
    >
      {links.map((link) => (
        <Link
          onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
          href={link.href}
          className={`w-[fit-content] hover:bg-slate-700 hover:text-primary/60 px-3 py-1 rounded-md font-medium cursor-pointer text-sm
            ${link.admin && "bg-slate-500 text-white"}
            ${
              currentPath == link.href
                ? "bg-slate-700 cursor-default shadow-1 text-primary/70 hover:text-primary/60 "
                : ""
            }`}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default GnavMenu;

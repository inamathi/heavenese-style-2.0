import React from "react";
import Link from "next/link";
import FooterLogo from "@/public/logo_hstv.svg";

const Footer = () => {
  return (
    <div className="bg-slate-900 flex flex-col gap-8 pt-8 pb-2">
      <div className="flex justify-center text-white">
        <FooterLogo className="text-white max-w-32" />
      </div>
      <ul className="flex justify-center font-bold gap-4 text-white">
        <li>
          <Link href="">Episode</Link>
        </li>
        <li>
          <Link href="">Chapter ch.</Link>
        </li>
        <li>
          <Link href="">Parody</Link>
        </li>
        <li>
          <Link href="">Music</Link>
        </li>
        <li>
          <Link href="">The Message</Link>
        </li>
        <li>
          <Link href="">Premium & Link</Link>
        </li>
        <li>
          <Link href="">Forum</Link>
        </li>
      </ul>
      <ul className="flex justify-center gap-4 text-white text-sm">
        <li>
          <Link href="">Club HEAVENESE</Link>
        </li>
        <li>
          <Link href="">Kick Back Cafe</Link>
        </li>
        <li>
          <Link href="">Online Shop</Link>
        </li>
      </ul>
      <ul className="flex justify-center gap-4 text-white text-sm">
        <li>
          <Link href="">Privacy Policy</Link>
        </li>
        <li>
          <Link href="">Tearms of Usage</Link>
        </li>
        <li>
          <Link href="">Commited LTD.</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

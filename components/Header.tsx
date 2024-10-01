"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerTitle } from "@/constants/header";
import { useAppSelector } from "@/store/store";
import style from "@/css/Header.module.scss";

type TypeHeader = {
  title: string;
  link: string;
  blank: boolean;
  admin: boolean;
};

const Header = () => {
  const currentPath = usePathname();
  const headers: TypeHeader[] = headerTitle;
  const showMenuButton = useAppSelector(
    (state) => state.hamburger.showMenuButton
  );

  // ロゴの描画
  const renderLogo = (): ReactNode => {
    return (
      <Link href="/">
        {/* TODO：一旦アニメーションはやめる。必要なら後ほど調整 */}
        <div
          className="text-[1.2rem] font-bold text-nowrap hover:opacity-70"
          //     className="text-[1rem] font-bold text-nowrap max-[900px]:text-[1.5rem]
          // hover:opacity-70 transition-all duration-300"
        >
          HEAVENESE style.tv
        </div>
      </Link>
    );
  };

  // メニューのデザイン
  const getMenuClassName = (title: TypeHeader) => {
    let className =
      " hover:bg-slate-700 hover:text-primary/60 px-2 py-1 rounded-md font-medium cursor-pointer text-sm";
    // "w-[fit-content] hover:bg-slate-700 hover:text-primary/60 px-3 py-1 rounded-md font-medium cursor-pointer text-sm";

    // admin 用デザイン
    if (title.admin) {
      className += " bg-slate-500 text-white";
    }

    // 選択済み用デザイン
    if (currentPath == title.link) {
      className +=
        " bg-slate-700 cursor-default shadow-1 text-primary/70 hover:text-primary/60";
    }

    return className;
  };

  // メニューの描画
  const renderMenu = (): ReactNode => {
    if (showMenuButton) {
      return null;
    }

    return (
      // 「The Message」で高さが変わらないように nowrapする
      <div className="flex gap-3 mx-3 text-nowrap">
        {headers.map((title) => (
          <Link
            href={title.link}
            className={getMenuClassName(title)}
            key={title.title}
          >
            {title.title}
          </Link>
        ))}
      </div>
    );
  };

  // TODO：ハンバーガーメニューボタンの描画
  const renderHamburgerButton = (): ReactNode => {
    if (showMenuButton) {
      return <div className={style.hamburger_button}></div>;
    }

    return (
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
    // <div className={style.hamburger_button}></div>;
    // return null;
  };

  return (
    // TODO：ヘッダはアプリを想定してトップ固定にしたい
    // ハンバーガーでメニュー表示にしたい
    <header
      className={"bg-slate-800 text-white py-2 px-6  z-10 h-10"}
      // className={`bg-slate-800 text-white py-2 max-[480px]:py4 max-[480px]:px-4 px-6 z-10`}
    >
      <nav className="container flex justify-between items-center ">
        {/* logo */}
        {renderLogo()}

        {/* menu */}
        {renderMenu()}

        {/* ハンバーガーボタン */}
        {renderHamburgerButton()}
      </nav>
    </header>
  );
};

export default Header;

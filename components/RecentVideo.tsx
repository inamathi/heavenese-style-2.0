import React, { ReactNode } from "react";
import Link from "next/link";
import { CategoryButton } from "@/components/elements/button/Button";
import CarouselAutoplay from "@/components/CarouselAutoplay";
import { typeTopData } from "@/types/types";

const getSectionClassName = (mode: string) => {
  let className = "";

  // 背景黒の時のデザイン
  if (mode == "bgBlack") {
    className = " bg-slate-900";
  }

  return className;
};

const getTitleClassName = (mode: string) => {
  let className = "w-full text-center text-3xl font-bold pt-24 pb-0";

  // 背景黒の時のデザイン
  if (mode == "bgBlack") {
    className += " text-white";
  }

  return className;
};

const RecentVideo = (props: typeTopData): ReactNode => {
  const { title, buttonLabel, buttonLink, background, items } = props;
  return (
    <section className={getSectionClassName(background)}>
      {/* タイトル */}
      <div className={getTitleClassName(background)}>{title}</div>

      {/* ボタン */}
      <Link href={buttonLink}>
        <CategoryButton buttonLabel={buttonLabel} />
      </Link>

      {/* カルーセル */}
      <div>
        <CarouselAutoplay items={items} />
      </div>
    </section>
  );
};

export default RecentVideo;

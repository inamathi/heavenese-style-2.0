import React from "react";
import { CategoryButton } from "@/components/elements/button/Button";
import Link from "next/link";
import CarouselAutoplay from "../CarouselAutoplay";

const carousels = [
  {
    key: 1,
    linkUrl: "/parody",
    imgUrl: "/img/carousel/parody/carousel01.webp"
  },
  {
    key: 2,
    linkUrl: "/parody",
    imgUrl: "/img/carousel/parody/carousel02.webp"
  },
  {
    key: 3,
    linkUrl: "/parody",
    imgUrl: "/img/carousel/parody/carousel03.webp"
  },
  {
    key: 4,
    linkUrl: "/parody",
    imgUrl: "/img/carousel/parody/carousel04.webp"
  },
  {
    key: 5,
    linkUrl: "/parody",
    imgUrl: "/img/carousel/parody/carousel05.webp"
  }
];

const RecentParody = ({ title, buttonLabel }: any) => {
  return (
    <section>
      <div className="w-full text-center text-3xl font-bold py-24 pb-0">
        {title}
      </div>
      <Link href={"/parody"}>
        <CategoryButton buttonLabel={buttonLabel} />
      </Link>
      <div>
        <CarouselAutoplay carousels={carousels} />
      </div>
    </section>
  );
};

export default RecentParody;

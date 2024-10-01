import React from "react";
import { CategoryButton } from "@/components/elements/button/Button";
import Link from "next/link";
import CarouselAutoplay from "../CarouselAutoplay";

const carousels = [
  {
    key: 1,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel01.webp"
  },
  {
    key: 2,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel02.webp"
  },
  {
    key: 3,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel03.webp"
  },
  {
    key: 4,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel04.webp"
  },
  {
    key: 5,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel05.webp"
  }
];

const RecentTheMessage = ({ title, buttonLabel }: any) => {
  return (
    <section>
      <div className="w-full text-center text-3xl font-bold py-24 pb-0">
        {title}
      </div>
      <Link href={"/episode"}>
        <CategoryButton buttonLabel={buttonLabel} />
      </Link>
      <div>
        <CarouselAutoplay carousels={carousels} />
      </div>
    </section>
  );
};

export default RecentTheMessage;

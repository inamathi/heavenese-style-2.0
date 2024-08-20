import Image from "next/image";
import React from "react";
import { CategoryButton } from "@/app/components/elements/button/Button";
import Link from "next/link";
import EmblaCarousel from "../../EmblaCarousel/EmblaCarousel";

const carousels = [
  {
    key: 1,
    linkUrl: "/recommend",
    imgUrl: "/img/carousel/recommend/carousel01.webp",
  },
  {
    key: 2,
    linkUrl: "/recommend",
    imgUrl: "/img/carousel/recommend/carousel02.webp",
  },
  {
    key: 3,
    linkUrl: "/recommend",
    imgUrl: "/img/carousel/recommend/carousel03.webp",
  },
  {
    key: 4,
    linkUrl: "/recommend",
    imgUrl: "/img/carousel/recommend/carousel04.webp",
  },
  {
    key: 5,
    linkUrl: "/recommend",
    imgUrl: "/img/carousel/recommend/carousel05.webp",
  },
  {
    key: 6,
    linkUrl: "/recommend",
    imgUrl: "/img/carousel/recommend/carousel06.webp",
  },
];

const SecRecommend = ({ title, buttonLabel }: any) => {
  return (
    <section>
      <div className="w-full text-center text-3xl font-bold py-24 pb-0">
        {title}
      </div>
      <Link href={"/recommend"}>
        <CategoryButton buttonLabel={buttonLabel} />
      </Link>
      <div>
        <EmblaCarousel carousels={carousels} />
      </div>
    </section>
  );
};

export default SecRecommend;

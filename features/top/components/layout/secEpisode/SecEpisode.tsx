import Image from "next/image";
import React from "react";
import { CategoryButton } from "@/components/elements/button/Button";
import Link from "next/link";
import EmblaCarousel from "../../EmblaCarousel/EmblaCarousel";

const carousels = [
  {
    key: 1,
    linkUrl: "/episode",
    imgUrl: "/img/carousel/episode/carousel01.webp"
  },
  {
    key: 2,
    linkUrl: "/episode",
    imgUrl: "/img/carousel/episode/carousel02.webp"
  },
  {
    key: 3,
    linkUrl: "/episode",
    imgUrl: "/img/carousel/episode/carousel03.webp"
  },
  {
    key: 4,
    linkUrl: "/episode",
    imgUrl: "/img/carousel/episode/carousel04.webp"
  },
  {
    key: 5,
    linkUrl: "/episode",
    imgUrl: "/img/carousel/episode/carousel05.webp"
  }
];

const SecEpisode = ({ title, buttonLabel }: any) => {
  return (
    <section>
      <div className="w-full text-center text-3xl text-white font-bold pb-0">
        {title}
      </div>
      <Link href={"/episode"}>
        <CategoryButton buttonLabel={buttonLabel} />
      </Link>
      <div>
        <EmblaCarousel carousels={carousels} />
      </div>
    </section>
  );
};

export default SecEpisode;

import Image from "next/image";
import React from "react";
import { CategoryButton } from "@/app/components/elements/button/Button";
import Link from "next/link";
import EmblaCarousel from "../../EmblaCarousel/EmblaCarousel";
const carousels = [
  {
    key: 1,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel01.webp",
  },
  {
    key: 2,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel02.webp",
  },
  {
    key: 3,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel03.webp",
  },
  {
    key: 4,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel04.webp",
  },
  {
    key: 5,
    linkUrl: "/message",
    imgUrl: "/img/carousel/message/carousel05.webp",
  },
];
const SecTheMessage = ({ title, buttonLabel }: any) => {
  return (
    <section>
      <div className="w-full text-center text-3xl font-bold py-24 pb-0">
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

export default SecTheMessage;

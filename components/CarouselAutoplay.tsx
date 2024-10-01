"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import styles from "@/css/CarouselAutoplay.module.scss";

interface item {
  key: number;
  linkUrl: string;
  imgUrl: string;
}

interface props {
  items: item[];
}

export default function CarouselAutoplay({ items }: props) {
  const options: EmblaOptionsType = { loop: true };
  const plugins = [Autoplay()];
  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {items.map((item: item) => (
          <div key={item.key} className={styles.embla__slide}>
            <Link href={item.linkUrl}>
              <Image
                src={item.imgUrl}
                alt="carousel image"
                priority={true}
                width={445}
                height={278}
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

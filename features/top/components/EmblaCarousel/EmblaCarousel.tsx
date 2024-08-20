"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./styles.module.scss";
import Link from "next/link";
interface CarouselItem {
  key: number;
  linkUrl: string;
  imgUrl: string;
}

interface CarouselProps {
  carousels: CarouselItem[];
}

export default function EmblaCarousel({ carousels }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {carousels.map((carousel: CarouselItem) => (
          <div key={carousel.key} className={styles.embla__slide}>
            <Link href={carousel.linkUrl}>
              <Image
                src={carousel.imgUrl}
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

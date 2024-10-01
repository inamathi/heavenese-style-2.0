"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "@/components/CarouselByButtonArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

import PickupItems from "@/app/api/local/pickup.json";
import styles from "@/css/CarouselByButton.module.scss";

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
  title?: string;
};

type PickupProps = {
  key: number;
  index: number;
  chapterCategory: string;
  chapterCategoryKana: string;
  title: string;
  fromEp: string;
  description: string;
  thumbnail: string;
  linkUrl: string;
};

const CarouselByButton: React.FC<PropType> = (props) => {
  const { slides, options, title } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const pickupItems: PickupProps[] = PickupItems;

  return (
    <>
      {/* タイトル */}
      <div className="w-full text-center text-3xl font-bold py-24 pb-0">
        {title}
      </div>

      {/* PickUp動画の紹介 */}
      <section className={`${styles["embla"]}`}>
        <div className={`${styles["embla__viewport"]} mt-8`} ref={emblaRef}>
          <div className={`${styles["embla__container"]}`}>
            {pickupItems.map((pickupItem) => (
              <div
                className={`${styles["embla__slide"]}`}
                key={pickupItem.index}
              >
                <div
                  className={`${styles["embla__slide__number"]} flex flex-col justify-start gap-2 pb-4`}
                >
                  <Link href={pickupItem.linkUrl}>
                    {/* サムネイル */}
                    <Image
                      src={pickupItem.thumbnail}
                      alt={pickupItem.title}
                      width={300}
                      height={200}
                      className="object-cover aspect-video"
                      style={{ width: "100%", height: "auto" }}
                    />

                    {/* 要約 */}
                    <div className="px-4 flex flex-col gap-2">
                      {/* カテゴリ */}
                      <h3 className="text-base">
                        {pickupItem.chapterCategory}
                      </h3>

                      <h2 className="text-lg flex items-center justify-between flex-wrap">
                        {/* タイトル */}
                        {pickupItem.title}

                        {/* エピソード */}
                        <span className="text-sm text-slate-500 ">
                          from {pickupItem.fromEp}
                        </span>
                      </h2>

                      {/* 詳細説明 */}
                      <p className="text-sm font-normal">
                        {pickupItem.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles["embla__controls"]}`}>
          <div className={`${styles["embla__buttons"]}`}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselByButton;

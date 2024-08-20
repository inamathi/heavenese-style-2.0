'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './SPVCarouselDotButtons'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './SPVCarouselArrowButtons'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import PickupItems from '@/app/api/local/pickup.json'
import styles from './styles.module.scss'

const OPTIONS: EmblaOptionsType = { align: 'start' }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  title: string
}

type PickupProps = {
  key: number
  index: number
  chapterCategory: string
  title: string
  fromEp: string
  chapterCategoryKana: string
  description: string
  thumbnail: string
  linkUrl: string
}

const SPVCarousel: React.FC<PropType> = (props) => {
  const { slides, options, title } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const pickupItems = PickupItems

  return (
    <>
      <div className="w-full text-center text-3xl font-bold py-24 pb-0">
        {title}
      </div>
      <section className={`${styles['embla']}`}>
        <div className={`${styles['embla__viewport']} mt-8`} ref={emblaRef}>
          <div className={`${styles['embla__container']}`}>
            {pickupItems.map((pickupItem) => (
              <div
                className={`${styles['embla__slide']}`}
                key={pickupItem.index}
              >
                <div
                  className={`${styles['embla__slide__number']} flex flex-col justify-start gap-2 pb-4`}
                >
                  <Image
                    src={pickupItem.thumbnail}
                    alt="thumbnail"
                    width={300}
                    height={200}
                    className="object-cover aspect-video"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="px-4 flex flex-col gap-2">
                    <h3 className="text-base">{pickupItem.chapterCategory}</h3>
                    <h2 className="text-lg flex items-center justify-between flex-wrap">
                      {pickupItem.title}{' '}
                      <span className="text-sm text-slate-500 ">
                        from {pickupItem.fromEp}
                      </span>
                    </h2>
                    <p className="text-sm font-normal">
                      {pickupItem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles['embla__controls']}`}>
          <div className={`${styles['embla__buttons']}`}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          {/* <div className={`${styles['embla__dot']}`}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles['embla__dot']}`.concat(
                index === selectedIndex
                  ? `${styles['embla__dot--selected']}`
                  : ''
              )}
            />
          ))}
        </div> */}
        </div>
      </section>
    </>
  )
}

export default SPVCarousel

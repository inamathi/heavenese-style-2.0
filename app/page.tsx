import Image from 'next/image'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import SecSplash from '@/features/top/components/layout/secSplash/SecSplash'
import SecEpisode from '@/features/top/components/layout/secEpisode/SecEpisode'
import SecChapter from '@/features/top/components/layout/secChapter/SecChapter'
import SecParody from '@/features/top/components/layout/secParody/SecParody'
import SecMusic from '@/features/top/components/layout/secMusic/SecMusic'
import SecMessage from '@/features/top/components/layout/secTheMessage/SecTheMessage'
import SecRecommend from '@/features/top/components/layout/secRecommend/SecRecommend'
import ParallaxCarousel from '@/features/top/components/ParallaxCarousel/ParallaxCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import SPVCarousel from '@/features/top/components/SPVCarousel/SPVCarousel'

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto', loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main>
      <Header />
      <SecSplash />
      {/* <SecRecommend title="Recommend" buttonLabel="Recommend" /> */}
      {/* <SecEpisode title="Episode" buttonLabel="Episode" /> */}
      <SPVCarousel title="👉 Topics" slides={SLIDES} options={OPTIONS} />
      {/* <ParallaxCarousel slides={SLIDES} options={OPTIONS} /> */}
      <SecChapter title="Chapter" buttonLabel="Chapter" />
      <SecEpisode title="Premium" buttonLabel="Premium" />
      <SecParody title="Parody" buttonLabel="Parody" />
      <SecMusic title="Music" buttonLabel="Music" />
      <SecMessage title="The Message" buttonLabel="The Message" />
      <Footer />
    </main>
  )
}

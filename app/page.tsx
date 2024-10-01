// 'use client'

import Logo from "@/components/Logo";
import NewestEpisode from "@/components/NewestEpisode";
import RecentVideo from "@/components/RecentVideo";
import RecentChapter from "@/components/RecentChapter";
import CarouselByButton from "@/components/CarouselByButton";
import { EmblaOptionsType } from "embla-carousel";

import {
  newestData,
  episodeData,
  parodyData,
  musicData,
  messageData,
  chapterData
} from "@/constants/topData";

export default function Home() {
  const carouselOptions: EmblaOptionsType = {
    slidesToScroll: "auto",
    loop: true
  };

  return (
    <>
      {/* ロゴ */}
      <Logo />

      {/* 最新動画 */}
      <NewestEpisode {...newestData} />

      {/* 過去動画 */}
      <RecentVideo {...episodeData} />

      {/* トピックス */}
      {/* 話題の動画や告知、Musicビデオの公開など */}
      <CarouselByButton options={carouselOptions} title="👉 Topics" />

      {/* チャプター検索 */}
      <RecentChapter {...chapterData} />

      {/* プレミアム */}
      {/* TODO：これはどういう意味の機能なのか？一旦保留 */}
      {/* <RecentEpisode title="Premium" buttonLabel="Premium" /> */}

      {/* パロディソング */}
      <RecentVideo {...parodyData} />

      {/* 音楽 */}
      <RecentVideo {...musicData} />

      {/* The Message */}
      <RecentVideo {...messageData} />
    </>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
// DBのvalue内のhtmlタグを有効に
import parse from "html-react-parser";
// Episodeの型をインポート
import {
  TypeChapter,
  TypeEpisode,
  TypeComment,
  TypeParams
} from "@/types/types";
// プレイヤーをインポート
import { YouTubeEmbed } from "@next/third-parties/google";
import { getEpisodeDetailData } from "@/app/episode/[epId]/page";

const EpisodeDetailPage = async ({ params }: TypeParams) => {
  const episodeDetailData = await getEpisodeDetailData(params.epId);
  const {
    id,
    episodeId,
    subTitle,
    title,
    thumbnail,
    description,
    displayDate,
    embYt,
    chapters,
    comments
  } = episodeDetailData;
  return (
    <div>
      <YouTubeEmbed
        videoid={embYt}
        params="controls=1"
        style="max-width: 100%;"
      />
      <div>
        <div className="mt-1 text-lg font-bold">
          HEAVENESE style episode {episodeId}
        </div>
        <div className="mt-2 text-xl font-bold">{subTitle}</div>
        <div className="mt-1 text-3xl font-bold">{title}</div>
      </div>
    </div>
  );
};

export default EpisodeDetailPage;

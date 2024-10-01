import React from "react";
import Image from "next/image";
import Link from "next/link";
import Chapter from "@/features/epId/components/ActiveComponent/Chapter";
import Comment from "@/features/epId/components/ActiveComponent/Comment";
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
import Header from "@/components/Header";
import TabWindow from "@/features/epId/components/TabWindow/TabWindow";
import Viewer from "@/features/epId/components/Viewer/Viewer";
import TabArea from "@/features/epId/components/TabArea/TabArea";
import ActiveComponent from "@/features/epId/components/ActiveComponent/ActiveComponent";

export async function getEpisodeDetailData(id: number) {
  const response = await fetch(`http://localhost:3000/api/episode/${id}`, {
    cache: "no-store"
  });

  const episodeDetailData: TypeEpisode = await response.json();

  return episodeDetailData;
}

const EpisodeDetailPage = async ({ params }: TypeParams) => {
  const epData = await getEpisodeDetailData(params.epId);
  const { episodeId } = epData;
  return (
    <div>
      <Header />
      <div className="container flex flex-row gap-4 mx-auto my-8 ">
        <div className="w-2/3">
          <Viewer
            params={{
              epId: episodeId
            }}
          />
          <Comment {...epData} />
        </div>
        <div className="w-1/3">
          {/* <ActiveComponent {...epData} /> */}
          <Chapter {...epData} />
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailPage;

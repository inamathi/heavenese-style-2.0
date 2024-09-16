import React from "react";
import Image from "next/image";
import { TypeChapter, TypeEpisode } from "@/types/types";
import parse from "html-react-parser";

async function getEpisodeDetailData(id: number) {
  const response = await fetch(`http://localhost:3000/api/episode/${id}`, {
    cache: "no-store"
  });
  const episodeDetailData: TypeEpisode = await response.json();
  return episodeDetailData;
}

const TabChapter = async ({ params }: { params: { epId: number } }) => {
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
      <div className="flex flex-col gap-2">
        {episodeDetailData.chapters.map((chapter: TypeChapter) => (
          <div key={chapter.id} className="flex gap-2">
            <Image src={chapter.thumbnail} width="140" height="80" alt="hoge" />
            <div>
              <p className="text-sm">{chapter.embYtTime}</p>
              <p className="text-sm">{chapter.subTitle}</p>
              <p className="text-sm font-bold">{chapter.title}</p>
              <p className="text-sm">{chapter.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabChapter;

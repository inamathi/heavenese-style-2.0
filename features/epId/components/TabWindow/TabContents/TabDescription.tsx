import React from "react";
import Image from "next/image";
import { TypeChapter, TypeEpisode } from "@/types/types";
import parse from "html-react-parser";
import { getEpisodeDetailData } from "@/app/episode/[epId]/page";

const TabDescription = async ({ params }: { params: { epId: number } }) => {
  const episodeDetailData = await getEpisodeDetailData(params.epId);
  const { description } = episodeDetailData;
  return (
    <div>
      <div className="text-sm">{parse(description)}</div>
    </div>
  );
};

export default TabDescription;

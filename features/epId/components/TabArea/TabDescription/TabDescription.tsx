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

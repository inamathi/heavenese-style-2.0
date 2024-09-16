import React from "react";
import EpisodeCard from "./EpisodeCard";
import { TypeEpisode } from "@/types/types";

// Propsで型を渡すためinterfaceで定義
interface EpisodeListProps {
  //map関数で展開するため、配列であることを定義
  allEpisodeData: TypeEpisode[];
}

const EpisodeCardList = ({ allEpisodeData }: EpisodeListProps) => {
  return (
    <div className="container grid lg:grid-cols-6 gap-4 mx-auto mb-8">
      {allEpisodeData.map((episodeData: TypeEpisode) => (
        <>
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
          <EpisodeCard key={episodeData.episodeId} episodeData={episodeData} />
        </>
      ))}
    </div>
  );
};

export default EpisodeCardList;

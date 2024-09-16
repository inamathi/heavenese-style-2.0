import React from "react";
import Image from "next/image";
import { TypeComment, TypeEpisode } from "@/types/types";
import parse from "html-react-parser";

async function getEpisodeDetailData(id: number) {
  const response = await fetch(`http://localhost:3000/api/episode/${id}`, {
    cache: "no-store"
  });
  const episodeDetailData: TypeEpisode = await response.json();
  return episodeDetailData;
}

const TabComment = async ({ params }: { params: { epId: number } }) => {
  const episodeDetailData = await getEpisodeDetailData(params.epId);
  const { comments, username } = episodeDetailData;
  return (
    <div>
      <div className="text-red">
        {episodeDetailData.comments.map((comment: TypeComment) => (
          <div key={comment.id} className="text-sm">
            {comment.username}
            {comment.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComment;

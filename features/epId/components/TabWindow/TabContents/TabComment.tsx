import React from "react";
import Image from "next/image";
import { TypeComment, TypeEpisode } from "@/types/types";
import parse from "html-react-parser";
import { getEpisodeDetailData } from "@/app/episode/[epId]/page";

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

import React from "react";
import Image from "next/image";
import { TypeChapter } from "@/app/types/types";

const Chapter = ({ ...epData }) => {
  return (
    <div className="flex flex-col gap-2">
      {epData.chapters.map((chapter: TypeChapter) => (
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
  );
};

export default Chapter;

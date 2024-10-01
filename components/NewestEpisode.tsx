import React from "react";
import Image from "next/image";
import Link from "next/link";
import { typeNewestData } from "@/types/types";

const NewestEpisode = (props: typeNewestData) => {
  const { linkUrl, imgUrl, title, subtitle, description } = props;

  return (
    <div className="bg-slate-900 pt-8 ">
      <div className="flex justify-center gap-8 max-w-screen-2xl mx-auto">
        {/* 左側 */}
        <div className="text-white">
          {/* Watch Now!! */}
          <div className="font-bold text-3xl text-red-500">Watch Now!!</div>

          <Link href={linkUrl}>
            {/* イメージ */}
            <Image
              src={imgUrl}
              alt={title}
              width="380"
              height="214"
              className="mt-2"
            />
          </Link>
        </div>

        {/* 右側 */}
        <div className="flex flex-col gap-2">
          {/* タイトル */}
          <h1 className="text-2xl font-bold text-white">{title}</h1>

          {/* 放送回数 */}
          <h2 className="text-white">
            {subtitle}
            {/* HEAVENESE style season 4 ever episode xxx */}
          </h2>

          {/* 詳細 */}
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-white text-sm leading-7 whitespace-pre-wrap "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewestEpisode;

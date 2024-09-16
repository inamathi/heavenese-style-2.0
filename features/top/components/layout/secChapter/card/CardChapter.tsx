import React from "react";
import Image from "next/image";

interface ChapterTitleProps {
  chapterTitle: string;
  thumbnail: string;
  style: {};
  className: string;
  alt: string;
  width: number;
  height: number;
}

const CardChapter = ({
  chapterTitle,
  thumbnail,
  style,
  className,
  alt,
  width,
  height
}: ChapterTitleProps) => {
  return (
    <div className="w-full">
      <div className="border border-slate-300 rounded-md">
        <Image
          src={thumbnail}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={style}
        />
        <div className="py-4 px-4 flex flex-col gap-2">
          <div className="text-2xl font-bold">{chapterTitle}</div>
          <p className="text-sm leading-6">
            説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardChapter;

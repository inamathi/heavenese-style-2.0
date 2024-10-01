import React from "react";
import Image from "next/image";
import Link from "next/link";

type typeChapterTitle = {
  linkUrl: string;
  title: string;
  imgUrl: string;
  description: string;
};

type typeChapterItem = {
  items: typeChapterTitle[];
};

const CardChapter = ({ items }: typeChapterItem) => {
  return (
    <div className="w-[60rem] grid grid-cols-3 gap-6 mx-auto">
      {items.map((item: typeChapterTitle) => (
        <div className="w-full">
          <div className="border border-slate-300 rounded-md">
            <div key={item.imgUrl}>
              <Link href={item.linkUrl}>
                {/* イメージ */}
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover aspect-video"
                  style={{ width: "100%", height: "auto" }}
                />

                <div className="py-4 px-4 flex flex-col gap-2">
                  {/* カテゴリタイトル */}
                  <div className="text-2xl font-bold">{item.title}</div>

                  {/* 説明文 */}
                  <p className="text-sm leading-6">{item.description}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardChapter;

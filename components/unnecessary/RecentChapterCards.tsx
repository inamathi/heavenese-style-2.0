import React from "react";
import RecentChapterCard from "@/components/RecentChapterCard";

const CardChapterList = () => {
  return (
    <div className="w-[70rem] grid grid-cols-3 gap-8 mx-auto">
      <RecentChapterCard
        chapterTitle={"👉 Pickup"}
        thumbnail={"/img/thumbnail/chapter_tmb-climaxtalk.webp"}
        className="object-cover aspect-video"
        style={{ width: "100%", height: "auto" }}
        alt={"hoge"}
        width={100}
        height={100}
      />
      <RecentChapterCard
        chapterTitle={"🇯🇵 Climax Talk"}
        thumbnail={"/img/thumbnail/chapter_tmb-climaxtalk.webp"}
        className="object-cover aspect-video"
        style={{ width: "100%", height: "auto" }}
        alt={"hoge"}
        width={100}
        height={100}
      />
      <RecentChapterCard
        chapterTitle={"🛋 Guest Corner"}
        thumbnail={"/img/thumbnail/chapter_tmb-climaxtalk.webp"}
        className="object-cover aspect-video"
        style={{ width: "100%", height: "auto" }}
        alt={"hoge"}
        width={100}
        height={100}
      />
      <RecentChapterCard
        chapterTitle={"👉 Pickup"}
        thumbnail={"/img/thumbnail/chapter_tmb-climaxtalk.webp"}
        className="object-cover aspect-video"
        style={{ width: "100%", height: "auto" }}
        alt={"hoge"}
        width={100}
        height={100}
      />
      <RecentChapterCard
        chapterTitle={"🇯🇵 Climax Talk"}
        thumbnail={"/img/thumbnail/chapter_tmb-climaxtalk.webp"}
        className="object-cover aspect-video"
        style={{ width: "100%", height: "auto" }}
        alt={"hoge"}
        width={100}
        height={100}
      />
      <RecentChapterCard
        chapterTitle={"🛋 Guest Corner"}
        thumbnail={"/img/thumbnail/chapter_tmb-climaxtalk.webp"}
        className="object-cover aspect-video"
        style={{ width: "100%", height: "auto" }}
        alt={"hoge"}
        width={100}
        height={100}
      />
      {/* <CardChapter chapterTitle={"🇯🇵Climax Talk"} />
      <CardChapter chapterTitle={"🛋Guest Corner"} />
      <CardChapter chapterTitle={"🌏What in the..."} />
      <CardChapter chapterTitle={"🌝ハゲソン"} />
      <CardChapter chapterTitle={"👊社会風刺ソング"} /> */}
    </div>
  );
};

export default CardChapterList;

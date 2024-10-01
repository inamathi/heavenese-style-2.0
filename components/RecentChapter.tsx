import React, { ReactNode } from "react";
import SearchCondButton from "@/components/SearchCondButton";
import RecentChapterCard from "@/components/RecentChapterCard";

type typeChapterTitle = {
  linkUrl: string;
  title: string;
  imgUrl: string;
  description: string;
};

type typeChapter = {
  title: string;
  items: typeChapterTitle[];
};

const RecentChapter = (props: typeChapter): ReactNode => {
  const { title, items } = props;

  return (
    <section>
      {/* タイトル */}
      <div className="container text-center text-3xl font-bold mx-auto mt-16 mb-4">
        {title}
      </div>

      {/* 検索条件ボタン */}
      <SearchCondButton />

      {/* チャプターカード */}
      <RecentChapterCard items={items} />
    </section>
  );
};

export default RecentChapter;

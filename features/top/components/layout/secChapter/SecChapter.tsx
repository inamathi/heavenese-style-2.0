import React from "react";
import Image from "next/image";
import CardChapterList from "./card/CardChapterList";
import TaglistModal from "@/components/SearchCondButton";
// import Tags from '@/app/api/local/tags.json'
import SearchCondButton from "@/components/SearchCondButton";

const SecChapter = ({ title }: any) => {
  // const tagList = Tags
  return (
    <section>
      <div className="container text-center text-3xl font-bold mx-auto mt-16 mb-4">
        {title}
      </div>
      <SearchCondButton />
      <CardChapterList />
    </section>
  );
};

export default SecChapter;

"use client";

import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";

// ReactModal.setAppElement(".App");
interface TypeTag {
  key: number;
  index: number;
  tag: string;
  tagCategory: string;
}
interface tagListProps {
  tagList: TypeTag[];
}

const modalStyle = {
  overlay: {
    // position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  content: {
    // position: "absolute",
    top: "5rem",
    left: "5rem",
    right: "5rem",
    bottom: "5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "30px",
  },
};

const Tagslist = ({ tagList }: tagListProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // トピックス
  const filteredTopicsTags = tagList.filter(
    (tag) => tag.tagCategory == "topics"
  );
  const sortedTopicsTags = [...filteredTopicsTags].sort();
  sortedTopicsTags.sort((b, a) => a.index - b.index);
  // 音楽
  const filteredMusicTags = tagList.filter((tag) => tag.tagCategory == "music");
  const sortedMusicTags = [...filteredMusicTags].sort();
  sortedMusicTags.sort((b, a) => a.index - b.index);
  // 人物
  const filteredHumanTags = tagList.filter((tag) => tag.tagCategory == "human");
  const sortedHumanTags = [...filteredHumanTags].sort();
  sortedHumanTags.sort((b, a) => a.index - b.index);
  // 番組コーナー
  const filteredCornerTags = tagList.filter(
    (tag) => tag.tagCategory == "corner"
  );
  const sortedCornerTags = [...filteredCornerTags].sort();
  sortedCornerTags.sort((b, a) => a.index - b.index);

  return (
    <div className="App container mx-auto flex justify-center mb-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
      >
        タグで絞り込む
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        style={modalStyle}
        contentLabel={"Example Modal"}
        onRequestClose={() => setIsOpen(false)}
      >
        <button
          onClick={() => setIsOpen(false)}
          className={styles.close}
        ></button>
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-md block font-bold pl-4 py-1 border-l-4 border-slate-500 mb-4 bg-slate-100">
              トピックス
            </h2>
            <ul className="flex flex-wrap gap-2 ">
              {sortedTopicsTags.map((tag: TypeTag) => (
                <li
                  key={tag.index}
                  className="bg-blue-100 text-slate-900 text-sm px-4 py-2 rounded font-bold"
                >
                  {tag.tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-md block font-bold pl-4 py-1 border-l-4 border-slate-500 mb-4 bg-slate-100">
              人物
            </h2>
            <ul className="flex flex-wrap gap-2 ">
              {sortedHumanTags.map((tag: TypeTag) => (
                <li
                  key={tag.index}
                  className="bg-blue-100 text-slate-900 text-sm px-4 py-2 rounded font-bold"
                >
                  {tag.tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-md block font-bold pl-4 py-1 border-l-4 border-slate-500 mb-4 bg-slate-100">
              番組コーナー
            </h2>
            <ul className="flex flex-wrap gap-2 ">
              {filteredCornerTags.map((tag: TypeTag) => (
                <li
                  key={tag.key}
                  className="bg-blue-100 text-slate-900 text-sm px-4 py-2 rounded font-bold"
                >
                  {tag.tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-md block font-bold pl-4 py-1 border-l-4 border-slate-500 mb-4 bg-slate-100">
              Music
            </h2>
            <ul className="flex flex-wrap gap-2 ">
              {filteredMusicTags.map((tag: TypeTag) => (
                <li
                  key={tag.key}
                  className="bg-blue-100 text-slate-900 text-sm px-4 py-2 rounded font-bold"
                >
                  {tag.tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Tagslist;

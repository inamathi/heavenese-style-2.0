"use client";

import { useEffect, useState } from "react";
import TabChapter from "@/features/epId/components/TabWindow/TabContents/TabChapter";
import TabComment from "@/features/epId/components/TabWindow/TabContents/TabComment";
import TabDescription from "@/features/epId/components/TabWindow/TabContents/TabDescription";
// Episodeの型をインポート
import { TypeChapter, TypeEpisode, TypeComment } from "@/types/types";

type TabProps = {
  tabs: string[];
};

const async Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // 非同期でデータを取得する例
      const response = await fetch(`http://localhost:3000/api/episode/${id}`, {
        cache: "no-store",
      });

      const episodeDetailData: TypeEpisode = await response.json();

      return episodeDetailData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const contents = () => {
    switch (activeTab) {
      case "チャプター":
        return (
          <TabChapter
            params={{
              epId: 300,
            }}
          />
        );
      case "コメント":
        return (
          <TabComment
            params={{
              epId: 300,
            }}
          />
        );
      case "番組概要":
        return (
          <TabDescription
            params={{
              epId: 300,
            }}
          />
        );
      default:
        return (
          // <TabChapter
          //   params={{
          //     epId: 300,
          //   }}
          // />
          <p>HOGHOGGEGE 33333</p>
        );
    }
  };

  return (
    <>
      <div>
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
        <div>{contents()}</div>
      </div>
    </>
  );
};

export default Tabs;

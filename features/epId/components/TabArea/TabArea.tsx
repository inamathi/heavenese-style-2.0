import React from "react";
// Episodeの型をインポート
import { TypeChapter, TypeEpisode, TypeComment } from "@/types/types";
// タブで表示を切り替えるコンポーネントをインポート
import TabChapter from "@/features/epId/components/TabArea/TabChapter/TabChapter";
import TabComment from "@/features/epId/components/TabArea/TabComment/TabComment";
import TabDescription from "@/features/epId/components/TabArea/TabDescription/TabDescription";
import { getEpisodeDetailData } from "@/app/episode/[epId]/page";

const TabArea = async ({ params }: { params: { epId: number } }) => {
  const episodeDetailData = await getEpisodeDetailData(params.epId);
  const { episodeId } = episodeDetailData;
  return (
    <div>
      <div className="flex justify-between text-sm gap-1">
        <button className="p-2 pb-1 border-b-4 border-slate-300 bg-white w-1/3 text-center">
          番組概要
        </button>
        <button className="p-2 pb-1 border-b-4 border-slate-300 bg-white w-1/3 text-center">
          チャプター
        </button>
        <button className="p-2 pb-1 border-b-4 border-slate-300 bg-white w-1/3 text-center">
          コメント
        </button>
      </div>
      <div>
        <TabDescription params={{ epId: episodeId }} />
      </div>
      <div>
        <TabChapter params={{ epId: episodeId }} />
      </div>
      <div>
        <TabComment params={{ epId: episodeId }} />
      </div>
    </div>
  );
};

export default TabArea;

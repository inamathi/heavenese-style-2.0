import Image from "next/image";
import React from "react";

const Newest = () => {
  return (
    <div className="flex justify-center gap-8 max-w-screen-2xl mx-auto pb-8">
      <div className="text-white">
        <div className="font-bold text-3xl text-red-500">Watch Now!!</div>
        <Image
          src="/img/thumbnail/tmb-1212-l.png"
          alt="dummy thumbnail"
          width="380"
          height="214"
          className="mt-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Episode Title</h1>
        <h2 className="text-white">
          HEAVENESE style season 4 ever episode xxx
        </h2>
        <div className="text-white text-sm leading-7">
          世界が騒然❗️タッカー・カールソンのプーチン🇷🇺インタビュー
          <br />
          何が本当か❓プーチンも所詮は・・・ トランプ新たな国境対策法案にNO❗️
          <br />
          俺が悪者を倒す❗️アメリカ人じゃないアメリカ人
          <br />
          国境問題で南米でとんでもないことに。 バイデン機密文書持ち出し不起訴！
          <br />
          報告書がヤバい😱怒ったバイデンだったが。 テイラー・スイフト騒動
          <br />
          ついにサタンが記者会見❓🎙 社会風刺ソングは、ついに登場さだまさし❗️🤣
          <br />
          励ましソング♪ そしてクライマックス・トーク🇯🇵
        </div>
      </div>
    </div>
  );
};

export default Newest;

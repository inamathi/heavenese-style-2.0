"use client";

import React from "react";
import { useState } from "react";
import Comment from "./Comment";
import Chapter from "./Chapter";
import Description from "./Description";
import { getEpisodeDetailData } from "@/app/episode/[epId]/page";
import { TypeParams, TypeButtons } from "@/types/types";

const ActiveComponent = ({ ...epData }) => {
  const [activeComponent, setActiveComponent] = useState("chapter");
  const buttons = [
    { id: 0, label: "チャプター", setActiveComponent: "chapter" },
    { id: 1, label: "コメント", setActiveComponent: "comment" },
    { id: 2, label: "番組概要", setActiveComponent: "description" }
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "chapter":
        return <Chapter {...epData} />;
      case "comment":
        return <Comment {...epData} />;
      case "description":
        return <Description {...epData} />;
      default:
        return <Chapter {...epData} />;
    }
  };
  return (
    <div>
      {buttons.map((button) => (
        <button
          key={button.id}
          className="pt-2 pb-[4px] pl-4 pr-4 border-b-2 border-slate-200"
          onClick={() => setActiveComponent(button.setActiveComponent)}
        >
          {button.label}
        </button>
      ))}
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ActiveComponent;

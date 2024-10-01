import { useState } from "react";
import clsx from "clsx";
import { useResizeDetector } from "react-resize-detector";

// アコーディオンのコンテンツの型
export interface ContentsProps {
  trigger: string;
  menu: string;
}

// 描画用のコンポーネント
const Accordion = () => {
  const contents: ContentsProps[] = [
    { trigger: "質問１", menu: "質問１の回答です。" },
    { trigger: "質問２", menu: "質問２の回答です。" },
  ];

  return (
    <div>
      <AccordionContainer contents={contents} />
    </div>
  );
};

// アコーディオンの項目を縦並びで整列しておく。
const AccordionContainer = ({ contents }: { contents: ContentsProps[] }) => {
  return (
    <div className="flex flex-col">
      {contents.map((theItem) => (
        <AccordionItem key={theItem.menu} item={theItem} />
      ))}
    </div>
  );
};

const AccordionItem = ({ item }: { item: ContentsProps }) => {
  const [isOpen, setIsOpen] = useState(false); // 【状態】開閉を記憶
  const { height, ref } = useResizeDetector(); // react-resize-detector

  return (
    <dl className="overflow-hidden bg-slate-500">
      <dt
        className="flex items-center cursor-pointer select-none"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{item.trigger}</span>
      </dt>
      <dd
        style={{ "--content-height": height + "px" } as React.CSSProperties}
        className={`
	  overflow-hidden transition-[max-height] duration-500 ease-out-expo
	  ${clsx(isOpen === true ? "max-h-[var(--content-height)]" : "max-h-0")}
	`}
      >
        <div ref={ref}>
          <p className="border-t border-gray">{item.menu}</p>
        </div>
      </dd>
    </dl>
  );
};

export { Accordion };

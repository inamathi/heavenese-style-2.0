import Tabs from "./Tabs";

const TabWindow = ({ params }: { params: { epId: number } }) => {
  return (
    <div>
      <Tabs tabs={["チャプター", "コメント", "番組概要"]} />
    </div>
  );
};

export default TabWindow;

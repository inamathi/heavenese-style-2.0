import { useEffect, FC } from "react";
import { useSearchParams } from "react-router-dom";

type TabTypes = "tab1" | "tab2" | "tab3";

const TabTest: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabType = searchParams.get("tab");

  const handleTabChange = (newTab: TabTypes): void => {
    setSearchParams({ tab: newTab });
  };

  useEffect(() => {
    if (tabType !== null) {
      return;
    }

    setSearchParams({ tab: "tab1" });
  }, [tabType, setSearchParams]);

  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${tabType === "tab1" ? "active" : ""}`}
          onClick={() => handleTabChange("tab1")}
        >
          Tab 1
        </button>
        <button
          className={`tab ${tabType === "tab2" ? "active" : ""}`}
          onClick={() => handleTabChange("tab2")}
        >
          Tab 2
        </button>
        <button
          className={`tab ${tabType === "tab3" ? "active" : ""}`}
          onClick={() => handleTabChange("tab3")}
        >
          Tab 3
        </button>
      </div>
      {tabType === "tab1" && <div>Content of Tab 1</div>}
      {tabType === "tab2" && <div>Content of Tab 2</div>}
      {tabType === "tab3" && <div>Content of Tab 3</div>}
    </>
  );
};

export default TabTest;

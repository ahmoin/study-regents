import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggleActiveTab = (newTab: string) => {
    setActiveTab(newTab);
  };
  return (
    <>
      <div className="mb-4 border-b border-green-200 dark:border-green-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center text-green-500 dark:text-green-400"
          id="tabs"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-green-300 hover:text-green-600 dark:hover:text-green-300 uppercase"
              id="tab1-tab"
              type="button"
              role="tab"
              aria-controls="tab1"
              aria-selected="false"
              onClick={() => toggleActiveTab("tab1")}
            >
              tab1
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-green-300 hover:text-green-600 dark:hover:text-green-300 uppercase"
              id="tab2-tab"
              type="button"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
              onClick={() => toggleActiveTab("tab2")}
            >
              tab2
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-green-300 hover:text-green-600 dark:hover:text-green-300 uppercase"
              id="tab3-tab"
              type="button"
              role="tab"
              aria-controls="tab3"
              aria-selected="false"
              onClick={() => toggleActiveTab("tab3")}
            >
              tab3
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-green-300 hover:text-green-600 dark:hover:text-green-300 uppercase"
              id="tab4-tab"
              type="button"
              role="tab"
              aria-controls="tab4"
              aria-selected="false"
              onClick={() => toggleActiveTab("tab4")}
            >
              tab4
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContent">
        <div
          className={`rounded-lg bg-green-50 p-4 dark:bg-green-800 ${
            activeTab === "tab1" ? "" : "hidden"
          }`}
          id="tab1"
          role="tabpanel"
          aria-labelledby="tab1-tab"
        >
          <p className="text-sm text-green-500 dark:text-green-400"> </p>
        </div>
        <div
          className={`rounded-lg bg-green-50 p-4 dark:bg-green-800 ${
            activeTab === "tab2" ? "" : "hidden"
          }`}
          id="tab2"
          role="tabpanel"
          aria-labelledby="tab2-tab"
        >
          <p className="text-sm text-green-500 dark:text-green-400"> </p>
        </div>
        <div
          className={`rounded-lg bg-green-50 p-4 dark:bg-green-800 ${
            activeTab === "tab3" ? "" : "hidden"
          }`}
          id="tab3"
          role="tabpanel"
          aria-labelledby="tab3-tab"
        >
          <p className="text-sm text-green-500 dark:text-green-400"> </p>
        </div>
        <div
          className={`rounded-lg bg-green-50 p-4 dark:bg-green-800 ${
            activeTab === "tab4" ? "" : "hidden"
          }`}
          id="tab4"
          role="tabpanel"
          aria-labelledby="tab4-tab"
        >
          <p className="text-sm text-green-500 dark:text-green-400"></p>
        </div>
      </div>
    </>
  );
}

export default Tabs;

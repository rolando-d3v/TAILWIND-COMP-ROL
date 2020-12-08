import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

export default function TabGame() {
  const [tabsState, setTabsState] = useState(1);

  return (
    <div>
      <div className="bg-transparent">
        <nav className="flex flex-col sm:flex-row ">
          <button
            className={`${
              tabsState === 1 ? "border-gray-400 text-blue-600 rounded-t-xl border-opacity-50 border-b-0 border-t-2 border-r-2  bg-white border-l-2" : 'border-b-2'
            }  'text-blue-600 py-4 px-6 block hover:text-blue-500 focus:outline-none  focus:border-gray-400 focus:border-opacity-50   border-gray-400'`}
            onClick={() => setTabsState(1)}
          >
            Tab 1
          </button>
          <button
            className={`${
              tabsState === 2 ? "border-gray-400 text-blue-600 rounded-t-xl border-opacity-50 border-b-0 border-t-2 border-r-2 bg-white border-l-2" : 'border-b-2'
            }  'text-blue-600  py-4 px-6 block hover:text-blue-500 focus:outline-none  focus:border-gray-400 focus:border-opacity-50   border-gray-400'`}
            onClick={() => setTabsState(2)}
          >
            Tab 2
          </button>
          <button
              className={`${
                tabsState === 3 ? "border-gray-400 text-blue-600 rounded-t-xl border-opacity-50 border-b-0 border-t-2 border-r-2 bg-white border-l-2" : 'border-b-2'
              }  'text-blue-600 py-4 px-6 block hover:text-blue-500 focus:outline-none  focus:border-gray-400 focus:border-opacity-50   border-gray-400'`}
            onClick={() => setTabsState(3)}
          >
            Tab 3
          </button>
        </nav>
      </div>
      <section>
        {tabsState === 1 && (
          <div className="bg-white h-40">
            <Tab1 />
          </div>
        )}
        {tabsState === 2 && (
          <div className="bg-white h-40">
            <Tab2 />
          </div>
        )}
        {tabsState === 3 && (
          <div className="bg-white h-40">
            <Tab1 />
          </div>
        )}
      </section>
    </div>
  );
}

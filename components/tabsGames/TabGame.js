import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

export default function TabGame() {
  const [tabsState, setTabsState] = useState(1);

  const listTabs = [
    { id: 1, name: "Informacion" },
    { id: 2, name: "Photos" },
  ];

  return (
    <div className='mx-4  '  >
      <div className="bg-transparent ">
        <nav className="flex sm:flex-row ">
          {listTabs.map((ev, index) => (
            <button
            key={index}
              className={`${
                tabsState === ev.id
                  ? "border-gray-400 text-blue-600 rounded-t-xl border-opacity-75 border-b-0 border-t-2 border-r-2  bg-white border-l-2"
                  : "border-b-2 border-gray-300"
              }  'text-blue-600 py-2 px-6 block  hover:text-blue-500 focus:outline-none focus:border-gray-400 focus:border-opacity-75 border-gray-400'`}
              onClick={() => setTabsState(ev.id)}
            >
              {ev.name}
            </button>
          ))}
        </nav>
      </div>
      <section className="w-full border-r-2 border-l-2 border-b-2  border-gray-400 border-opacity-75">
        {tabsState === 1 && (
          <div className="bg-white p-4 h-auto w-full ">
            <Tab1  />
          </div>
        )}
        {tabsState === 2 && (
          <div className="bg-white p-4 h-auto w-full">
            <Tab2 />
          </div>
        )}
      </section>
    </div>
  );
}

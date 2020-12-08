import React, { useState } from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

export default function MainLayout(props) {
  const [sidebarx, setSidebarx] = useState(false);
  const [drop, setDrop] = useState(false);

  const showDrop = () => {
    setDrop(!drop);
  };

  const closeDrop = () => {
    setDrop(false);
  };

  //sidebar
  const changeSidebar = () => {
    setSidebarx(sidebarx === false ? true : false);
  };

  const closeSidebar = () => {
    setSidebarx(false);
  };

  return (
    <div>
      <Navigation
        changeSidebar={changeSidebar}
        drop={drop}
        showDrop={showDrop}
      />
      <Sidebar sidebarx={sidebarx} changeSidebar={changeSidebar} />
      <section
        className="h-screen pt-16 bg-gray-50 "
        onClick={sidebarx ? closeSidebar : closeDrop}
      >
        {props.children}
      </section>
    </div>
  );
}

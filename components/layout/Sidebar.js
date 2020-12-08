import React from "react";
import Link from "next/link";
import { navList, linksDerecho } from "./Navigation";

const SidebarComponent = (props) => {
  return (
    <div className={`sidebar ${props.toggleState ? "sidebar-visible" : ""}`}>
      <div className='w-full flex justify-center py-6' >
        <img
          className="w-40 h-40 mx-2 rounded-full"
          src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
          alt="logo"
        />
      </div>
      <div className="sidebar__menu  ">
        <ul className="list-unstyled">
          {navList.map((nav, i) => (
            <li key={i}>
              <Link href={nav.href}>
                <a className="nav-link py-2">
                  <span className="mr-3">{nav.icon}</span> {nav.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border border-gray-500" />
      <div className="sidebar__menu">
        <ul className="list-unstyled">
          {linksDerecho.map((nav, i) => (
            <li key={i}>
              <Link href={nav.href}>
                <a className="nav-link py-2">
                  <span className="mr-3">{nav.icon}</span> {nav.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;

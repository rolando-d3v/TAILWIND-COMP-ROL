import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./dataLinks";

export default function Sidebar(props) {

  const {changeSidebar, sidebarx} = props
 
  return (
    <aside
      className={`${
        sidebarx
          ? "bg-azul-900 z-10 md:w-64 fixed top-0 left-0 w-full h-screen transform translate-x-0 transition  duration-200 ease-in-out"
          : "bg-azul-900 z-10 md:w-64 fixed top-0 left-0 w-full h-screen transform -translate-x-full transition duration-200 ease-in-out"
      } md:hidden`}
    >
      <div className="flex mt-1 justify-between">
        <Link href="/">
          <a className="nav_link mx-6 ">
            <img src="/assets/react.png" alt="logo" className="w-12 mr-1" />
            <h2 className=" text-white text-xl font-extrabold tracking-wider">
              React js
            </h2>
          </a>
        </Link>
        <button onClick={changeSidebar} className="px-4 focus:outline-none ">
          <FaTimes className="text-red-500 text-3xl hover:text-red-600  " />
        </button>
      </div>

      <section
        className="flex flex-col justify-between"
        style={{ height: "90vh" }}
      >
        <div className="w-full mt-2 ">
          {links.map((ev) => (
            <Link key={ev.id} href={ev.url}>
              <a className="nav_link text-indigo-300 hover:bg-blue-700 hover:text-white px-6 ">
                <span className="mx-2 text-xl ">{ev.icon}</span>
                {ev.text}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          {social.map((ev) => (
            <Link key={ev.id} href={ev.url}>
              <a className="nav_link  mx-2 ">
                <span className="text-xl rounded-full  text-blue-600 hover:text-white ">
                  {ev.icon}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}

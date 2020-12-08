import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { links, social } from "./dataLinks";

export default function Navigation(props) {
  const { changeSidebar, drop, showDrop } = props;
  

  return (
    <div className="">
      {/* MOVIL */}
      <section className="absolute w-full bg-azul-800 flex items-center justify-between md:hidden px-3">
        <Link href="/">
          <a className="nav_link ">
            <img src="/assets/react.png" alt="logo" className="w-12 mr-1" />
            <h2 className=" text-white text-xl font-extrabold tracking-wider">
              React
            </h2>
          </a>
        </Link>
        <button className="focus:outline-none  " onClick={changeSidebar}>
          <FaBars className="text-indigo-100 text-3xl" />
        </button>
      </section>

      <div className="bg-azul-800 w-full px-3 absolute ">
        <div className="hidden md:flex ">
          <div className="flex items-center justify-between w-full">
            <section className="flex items-center">
              <Link href="/">
                <a className="nav_link pr-4 ">
                  <img
                    src="/assets/react.png"
                    alt="logo"
                    className="w-12 mr-1"
                  />
                  <h2 className=" text-white text-xl font-extrabold tracking-wider">
                    React
                  </h2>
                </a>
              </Link>

              <nav className="flex items-center">
                {links.map((ev) => (
                  <Link key={ev.id} href={ev.url}>
                    <a className="nav_link text-indigo-300 hover:bg-blue-700 hover:text-white px-3 ">
                      <span className="mr-1 text-xl ">{ev.icon}</span>
                      {ev.text}
                    </a>
                  </Link>
                ))}
                <div>
                  <button
                    className="nav_link text-indigo-300 hover:bg-blue-700 hover:text-white px-3 focus:outline-none"
                    onClick={() => showDrop()}
                  >
                    <span> Social </span>
                    <FaAngleDown className="ml-1 text-xl" />
                  </button>

                  <div className="absolute">
                    <div className={`${drop ? "flex-col mt-2.5" : "hidden"} `}>
                      <div className="bg-azul-800 rounded-b-xl ">
                        {social.map((ev) => (
                          <Link key={ev.id} href={ev.url}>
                            <a className="nav_link text-indigo-300 hover:bg-blue-700 hover:text-white px-6 py-3  rounded-b-xl">
                              <span className="mr-1 text-xl ">{ev.icon}</span>
                              {ev.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </section>

            <section>
              <button
                className="bg-indigo-600 text-indigo-100 px-4 py-1 rounded"
                // onClick={openModal}
              >
                Login
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

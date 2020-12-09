import { useState } from "react";
import Link from "next/link";
import NavigationMovil from "./NavigationMovil";
import { dropList1, dropList2 } from "./data";
import { FaChevronDown, FaBars, FaPhone, FaPlayCircle } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { useDarkMode } from "./hooks/useDarkMode";

export default function Home() {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [sidebarPhone, setSidebarPhone] = useState(false);

  const { cambioDark, toggle } = useDarkMode();

  console.log(toggle);

  const showSidebarPhone = () => {
    setSidebarPhone(!sidebarPhone);
  };

  const hiddenDrop = () => {
    setDrop(!drop);
  };

  const hiddenDrop2 = () => {
    setDrop2(!drop2);
  };

  return (
    <div className="relative bg-white dark:bg-azul-800 transform duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-indigo-500 py-4 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <img
                className="h-8 w-auto sm:h-10 mr-1"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                alt="Workflow"
              />
              <span className="text-indigo-600 font-bold text-2xl ">React</span>
            </a>
          </div>

          {/* BOTON OPEN MOVIL */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 focus:outline-none"
              onClick={() => showSidebarPhone()}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-10">
            <div className="relative">
              <button
                type="button"
                className="text-gray-500 group inline-flex items-center space-x-2 text-base font-medium hover:text-azul-900 focus:outline-none focus:text-indigo-600 "
                onClick={() => hiddenDrop()}
              >
                <span>Soluciones</span>
                <FaChevronDown className="text-gray-400 hover:text-gray-500 h-3 w-3" />
              </button>

              <div className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-3/4">
                <div
                  className={`${
                    drop ? "flex" : "hidden"
                  } "rounded-lg shadow-lg" `}
                >
                  <div className="rounded-lg shadow-xs overflow-hidden shadow-xl">
                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {dropList1.map((ev) => (
                        <Link href={ev.url} key={ev.id}>
                          <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50">
                            {ev.icon}
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                {ev.name}
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                {ev.text}
                              </p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>

                    <div className="px-5 py-5 bg-indigo-500 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 flex justify-around">
                      <div className="flow-root text-gray-100">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium hover:bg-indigo-600"
                        >
                          <FaPlayCircle className="flex-shrink-0 h-6 w-6 text-gray-100" />
                          <span>Watch Demo</span>
                        </a>
                      </div>
                      <div className="flow-root text-gray-100">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium  hover:bg-indigo-600"
                        >
                          <FaPhone className="flex-shrink-0 h-6 w-6 text-gray-100" />
                          <span>Contact Sales</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Precio
            </a>
            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Documentacion
            </a>

            <div className="relative">
              <button
                type="button"
                className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-azul-800 focus:outline-none focus:text-indigo-600"
                onClick={() => hiddenDrop2()}
              >
                <span>Mas</span>
                <FaChevronDown className="text-gray-400 hover:text-gray-500 h-3 w-3" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div
                  className={`${
                    drop2 ? "flex" : "hidden"
                  } "rounded-lg shadow-lg" `}
                >
                  <div className="rounded-lg shadow-xs overflow-hidden shadow-xl ">
                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {dropList2.map((ev) => (
                        <Link href={ev.url} key={ev.id}>
                          <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50">
                            {ev.icon}
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                {ev.name}
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                {ev.text}
                              </p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                    <div className="p-5 bg-indigo-500 space-y-5 sm:px-8 sm:py-8">
                      <div className="space-y-4">
                        <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-100 uppercase">
                          Recent Posts
                        </h3>
                        <ul className="space-y-4">
                          <li className="text-base leading-6 truncate">
                            <a
                              href="#"
                              className="font-medium text-gray-50 hover:text-gray-200"
                            >
                              Boost your conversion rate
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="text-sm leading-5">
                        <a
                          href="#"
                          className="font-medium text-blue-200 hover:text-indigo-100"
                        >
                          View all posts &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="w-28 relative flex items-center ">
              <FaIcons.FaSun className="dark:text-gray-400 text-yellow-400 absolute left-0" />
              <div
                className="w-14 h-7 bg-green-300  dark:bg-blue-500 rounded-2xl flex items-center mx-auto shadow-md "
                onClick={() => cambioDark()}
              >
                <div
                  className={`${
                    toggle ? "translate-x-8 " : ""
                  } bg-gray-50  inline-block h-5 w-5 rounded-full transform  duration-300 shadow-lg`}
                  style={{ margin: "0 0.08rem" }}
                ></div>
              </div>
              <FaIcons.FaMoon className="dark:text-blue-600 text-gray-400 absolute right-0" />
            </section>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="inline-flex px-4 py-2 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* MOVIL */}
      <NavigationMovil
        showSidebarPhone={showSidebarPhone}
        sidebarPhone={sidebarPhone}
        dropList1={dropList1}
        dropList2={dropList2}
        toggle={toggle}
        cambioDark={cambioDark}
      />
    </div>
  );
}

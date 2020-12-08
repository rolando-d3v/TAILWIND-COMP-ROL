import React from "react";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";

export default function NavigationMovil(props) {

    const {showSidebarPhone, sidebarPhone, dropList1, dropList2} = props

  return (
    <section className="absolute top-0 inset-x-0  transition transform origin-top-right md:hidden">
      <div
        className={`${
          sidebarPhone ? "flex-col" : "hidden"
        } "rounded-lg shadow-lg"`}
      >
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div className="pt-2 pb-6 px-4 space-y-6">
            <div className="flex items-center justify-between">
              <a className="flex items-center">
                <img
                  className="h-8 w-auto mr-1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                  alt="Workflow"
                />
                <span className="text-indigo-600 font-bold text-2xl ">
                  React
                </span>
              </a>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center my-2 mr-1 rounded-md text-gray-400  focus:outline-none focus:text-gray-500"
                  onClick={() => showSidebarPhone()}
                >
                  <TiDeleteOutline className="h-8 w-8" />
                </button>
              </div>
            </div>
            <div>
              <nav className="grid gap-y-8">
                {dropList1.map((ev) => (
                  <Link href={ev.url} key={ev.id}>
                    <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {ev.icon}
                      <div className="space-y-1">
                        <p className="text-base leading-6 font-medium text-gray-900">
                          {ev.name}
                        </p>
                      </div>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                Docs
              </a>
              {dropList2.map((ev) => (
                <Link href={ev.url} key={ev.id}>
                  <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                    {ev.icon}
                    <div className="space-y-1">
                      <p className="text-base leading-6 font-medium text-gray-900">
                        {ev.name}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className="space-y-6">
              <span className="w-full flex rounded-md shadow-sm">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Sign up
                </a>
              </span>
              <p className="text-center text-base leading-6 font-medium text-gray-500">
                Existing customer?
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

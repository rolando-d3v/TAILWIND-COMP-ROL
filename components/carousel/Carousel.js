import React from "react";

export default function Carousel1() {
  return (
    <div
      className="bg-cover flex h-64 md:h-90 rounded-xl"
      style={{ backgroundImage: "url(/assets/bg.jpg) " }}
    >
      <div className="w-full flex items-center text-white text-xs md:text-xl px-4 md:px-10">
        <div>
          <p className="font-bold">Experiencias</p>
          <p className="text-lg  md:text-3xl xl:text-4xl font-bold text-teal-300 ">
            Porque no viajas para dormir
          </p>
          <p className=" font-bold">
            Actividades memorables organizadas por habitantes locales, creadas
            por personas curiosas Actividades memorables organizadas por
            habitantes locales.
          </p>
        </div>
      </div>
      <div className="w-auto flex justify-end items-end p-4 text-xs md:text-xl">
        <a
          href="#"
          className="btn bg-teal-300 text-black w-40 md:w-56 hover:bg-teal-400"
        >
          <p className="text-center">Mas Informacion</p>
        </a>
      </div>
    </div>
  );
}


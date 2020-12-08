import React from "react";

export default function Custom404() {
  return (
    <div
      className="min-h-screen flex items-center justify-around  text-white font-dosis"
      style={{ backgroundColor: "#0c0a20" }}
      // style={{ backgroundColor: "#1b1d23" }}
    >
      <div className="">
        <h3 className="text-9xl ">
          Error 404{" "}
          <span className="h-10 w-10 inline-block bg-red-600 rounded-full  animate-bounce"></span>{" "}
        </h3>
        <p className="text-4xl mb-6">pagina no encotrada</p>
        <a href="/" className="btn text-xl px-8 ">
          regresar a la pagina pricipal
        </a>
      </div>

      <div className="">
        <img src="/assets/404.png" alt="red" className="w-3/4" />
      </div>
    </div>
  );
}

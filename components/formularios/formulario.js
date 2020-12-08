import React from "react";

function formulario() {
  return (
    <div className="container-x pt-16">
      <div className="text-center mt-24">
        <div className="flex items-center justify-center">
          <img
            className="w-40 h-40  rounded-full mr-4"
            src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
            alt="Avatar of Jonathan Reinink"
          />
        </div>
        <h2 className="text-4xl tracking-tight">Sign in into your account</h2>
        <span className="text-sm">
          or{" "}
          <a href="#" className="text-blue-500">
            register a new account
          </a>
        </span>
      </div>

      <div className="flex justify-center my-2 mx-4 md:mx-0 ">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 border border-gray-300">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-2 px-3 leading-tight focus:outline-none"
                type="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-2 px-3 leading-tight focus:outline-none"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <button className="btn block w-full hover:bg-blue-800 focus:bg-green-600">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default formulario;

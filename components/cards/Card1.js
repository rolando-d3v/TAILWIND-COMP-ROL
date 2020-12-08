import React from "react";
export default  function Card1() {
  return (
    <div className="max-w-xl lg:flex shadow-lg m-2">
      <div
        className="h-64 lg:h-auto lg:w-64 flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: "url(/assets/car2.jpg)",
        }}
      ></div>
      <div className=" border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex justify-between text-xs">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm text-gray-500">
              <p className="leading-none">Jonathan Reinink</p>
              <p>Aug 18</p>
            </div>
          </div>
          <div className="px-1 ">
            <button className="btn bg-blue-400 hover:bg-red-700">
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



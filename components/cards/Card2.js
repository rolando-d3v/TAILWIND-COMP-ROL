import React from "react";

function Card2() {
  return (
    <div className="w-auto  xl:flex bg-white rounded-lg p-4 m-2 border  border-gray-400">
      <img
        className="mx-auto h-16 w-16 md:h-24 md:w-24  lg:mx-auto"
        src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
      />
      <div className="text-center  xl:text-left text-xs sm:text-base">
        <h2 className="text-lg">Erin Lindford</h2>
        <div className="text-purple-500">Product Engineer</div>
        <div className=" text-gray-600">lindford@gmail.com</div>
        <div className="text-gray-600">(555) 765-4321</div>
      </div>
    </div>
  );
}

export default Card2;

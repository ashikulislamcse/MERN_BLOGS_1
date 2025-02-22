import React from "react";
import image from "../assets/image 1.jpg";
const Home = () => {
  return (
    //Post 1
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg mx-15">
      <div className="w-full">
        <img
          src={image}
          alt="Blog Thumbnail"
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Thiskmfg efrhyeroi aesrdhjfe hy7efth
        </h1>
      </div>
      <div className="mt-2">
        <p className="text-gray-600">
          uesrfherghigerfdrgnedrghjwero9pigniifgxmp0rtgj8tgeri90
        </p>
      </div>
    </div>
  );
};

export default Home;

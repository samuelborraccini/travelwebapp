import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div className="bg-gray-800">
      <div className="flex justify-evenly items-center bg-[url(/images/bggray.png)] bg-cover -translate-x-1xl">
        <div className="flex flex-col py-8 md:py-0 md:items-start items-center max-w-xl space-y-8">
          <h1 className="font-bold text-3xl md:text-8xl text-white ">
            Get free now!
          </h1>
          <p className="text-gray-400 font-thin text-lg md:text-2xl">
            Available on iOS and Android
          </p>
          <div className="flex space-x-6 md:space-x-16 items-center">
            <div className="bg-white py-4 px-6 rounded-full cursor-pointer text-xl font-bold text-green-500 flex items-center space-x-4">
              <Image src={"/apple.svg"} width={40} height={0} />
              <h1>App Store</h1>
            </div>
            <div className="border-[0.5px] cursor-pointer border-white px-6 space-x-4 py-4 rounded-full text-xl font-bold text-green-500 flex items-center">
              <Image src={"/android.svg"} width={40} height={0} />
              <h1>Play Store</h1>
            </div>
          </div>
        </div>
        <Image
          src={"/images/phone.png"}
          className="pt-14 lg:w-[350px] w-[150px] hidden md:block"
          height={0}
          width={350}
        />
      </div>
    </div>
  );
};

export default Download;

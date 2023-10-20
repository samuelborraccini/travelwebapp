"use client";
import imageCarousel from "@/constants/imageCarousel";
import Image from "next/image";
import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

const images = [
  { url: "/images/landscape1.jpg" },
  { url: "/images/landscape2.jpg" },
  { url: "/images/landscape3.jpg" },
];

const Carusel = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const nextImage = () => {
    if (currentImage + 1 >= imageCarousel.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(imageCarousel.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <section className="flex flex-col py-14 md:py-20">
      <div className="flex items-center justify-center pb-12 space-x-4">
        <div className="relative ">
          <h1 className="font-extrabold text-2xl md:text-6xl ml-10">
            Some of Our Popular Locations
          </h1>
          <Image
            src={"/plane.svg"}
            width={35}
            height={30}
            className="absolute -top-3 left-0"
          />
        </div>
      </div>
      <div className="flex justify-center lg:px-12 lg:space-x-16">
        <div className="lg:flex hidden flex-col relative justify-center items-center max-w-md">
          <button
            className="absolute top-1/2 -right-12 text-gray-300 hover:text-black"
            onClick={prevImage}
          >
            <RiArrowLeftSLine size={40} />
          </button>
          <div className=" text-4xl text-gray-300 font-extrabold">
            Millions of <span className="text-green-500">locations</span> to
            chose from...
          </div>
          <Image src={"/bote.svg"} height={80} width={80} />
        </div>
        <div className="relative min-w-[350px] lg:min-w-[350px] lg:min-h-[500px]  max-h-[500px] overflow-hidden rounded-xl transition-all duration-200">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={currentImage}
          >
            <Image
              src={imageCarousel[currentImage].url}
              width={350}
              height={0}
              className="rounded-xl"
            />
          </motion.div>

          <div className="absolute flex lg:flex flex-col justify-center group lg:justify-between hover:backdrop-blur-none duration-200 backdrop-blur-sm top-1/2 right-0 left-0 bottom-0 rounded-xl">
            <h1 className="flex justify-center py-4 lg:py-8 font-bold text-xl text-white group-hover:text-transparent duration-200">
              {imageCarousel[currentImage].head}
            </h1>
            <p className="px-12 lg:py-12 text-white font-semibold group-hover:text-transparent duration-200">
              {imageCarousel[currentImage].desc}
            </p>
          </div>
          <div
            className="absolute opacity-0 top-0 left-1/2 right-0 bottom-0"
            onClick={nextImage}
          ></div>
          <div
            className="absolute opacity-0 top-0 left-0 right-1/2 bottom-0"
            onClick={prevImage}
          ></div>
        </div>
        <div className="lg:flex hidden flex-col relative items-center justify-center space-y-5">
          <button
            className="absolute top-1/2 -left-14 text-gray-300 hover:text-black"
            onClick={nextImage}
          >
            <RiArrowRightSLine size={40} />
          </button>
          <div className="text-gray-400 hidden lg:block bg-gray-700 px-8 py-8 rounded-xl space-y-2 hover:shadow-xl cursor-default duration-300">
            <h1 className="text-2xl font-bold">Best Experience ever!!!</h1>
            <div className="flex items-center">
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
            </div>
          </div>
          <div className="text-gray-400 hidden lg:block bg-gray-700 px-8 py-8 rounded-xl space-y-2 hover:shadow-xl cursor-default duration-300">
            <h1 className="text-2xl font-bold">Awesome camping sites</h1>
            <div className="flex items-center">
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
              <AiFillStar size={30} className="text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carusel;

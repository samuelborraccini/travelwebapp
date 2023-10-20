import Image from "next/image";
import React from "react";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex justify-between px-8 md:px-16 py-12 md:py-24">
      <Image
        src={"/images/brandlogo.png"}
        className="max-h-9"
        height={0}
        width={100}
      />
      <div className=" hidden lg:flex flex-col">
        <h1 className="font-bold text-xl pb-4">Learn More</h1>
        <div className="text-gray-500 font-thin space-y-2">
          <p className="hover:text-black cursor-pointer">About Hiking</p>
          <p className="hover:text-black cursor-pointer">Press Releases</p>
          <p className="hover:text-black cursor-pointer">Enviroment</p>
          <p className="hover:text-black cursor-pointer">Jobs</p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col">
        <h1 className="font-bold text-xl pb-4">Our Comunnity</h1>
        <div className="text-gray-500 font-thin space-y-2">
          <p className="hover:text-black cursor-pointer">Climbing Geekos</p>
          <p className="hover:text-black cursor-pointer">Hiking all day</p>
          <p className="hover:text-black cursor-pointer">Hikers</p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col">
        <h1 className="font-bold text-xl pb-4">Contact Us</h1>
        <div className=" space-y-2 font-light">
          <p className="hover:text-black cursor-pointer">
            Admin Officer: 123-456-7890
          </p>
          <p className="hover:text-black cursor-pointer">
            Email Officer:{" "}
            <span className="font-bold">hilink@akinthil.com</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-xl pb-4">Socials</h1>
        <div className="space-y-2 flex relative items-center space-x-3">
          <AiOutlineTwitter size={30} className="relative top-1" />
          <BiLogoFacebook size={30} />
          <AiFillInstagram size={30} />
          <AiFillYoutube size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

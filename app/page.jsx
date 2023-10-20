import Carusel from "@/components/Carusel";
import CopyRights from "@/components/CopyRights";
import Download from "@/components/Download";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Image from "next/image";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { HiBriefcase } from "react-icons/hi";

export default function Home() {
  return (
    <div>
      <section className="h-full flex flex-cols">
        <div className="flex flex-col space-y-2 justify-center pt-12 lg:pl-16">
          <div className="relative flex justify-center md:block">
            <h1 className="font-extrabold text-4xl lg:text-8xl md:leading-none pb-8">
              Putuk Truno Camp Area
            </h1>
            <Image
              src={"/camp.svg"}
              height={40}
              width={40}
              className="absolute left-0 md:left-14 -top-8 w-8"
            />
          </div>

          <p className="md:text-2xl text-lg px-8 md:px-0 text-center text-gray-600 pb-8">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app.
          </p>
          <div className="flex items-center md:justify-normal justify-center">
            <AiFillStar size={30} className="text-yellow-400 " />
            <AiFillStar size={30} className="text-yellow-400" />
            <AiFillStar size={30} className="text-yellow-400" />
            <AiFillStar size={30} className="text-yellow-400" />
            <AiFillStar size={30} className="text-yellow-400" />
            <h1 className="ml-8 text-xl font-bold">
              200K <span className="font-extralight">Excelent Reviews</span>{" "}
            </h1>
          </div>
          <div className="pt-8 items-center md:justify-normal justify-center space-x-8 flex md:space-x-40">
            <button className="bg-green-500 px-6 py-4 md:px-8 md:py-6 font-bold text-white text-lg rounded-full">
              Download App
            </button>
            <div className="flex justify-center items-center space-x-3">
              <HiBriefcase size={30} className="text-green-500" />
              <h1 className="text-lg font-bold">How We Work?</h1>
            </div>
          </div>
        </div>
        <div className="relative hidden md:inline-block overflow-hidden max-w-2xl">
          <Image
            src={"/images/pattern.png"}
            height={1000}
            width={1000}
            className="h-[580px] w-[1900px] scale-y-125 scale-x-[2.5] relative -left-36 -top-28"
          />
          <div className="flex flex-col absolute top-32 left-20 bg-gray-700 py-4 px-4 rounded-xl text-white text-xl">
            <div className="flex items-center space-x-20 pb-2">
              <p className="text-gray-400">Location</p>
              <AiOutlineClose size={20} className="text-gray-400" />
            </div>
            <div className="pb-6">Aguas Calientes</div>
            <div className="flex items-center space-x-14">
              <div className="flex flex-col">
                <div className="text-gray-400">Distance</div>
                <div>173.28 mi</div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-400">Distance</div>
                <div>173.28 mi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carusel />

      <Features />

      <Download />

      <Footer />

      <CopyRights />
    </div>
  );
}

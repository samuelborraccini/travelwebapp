import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex justify-between px-8 py-6 md:py-12 gap-40">
      <div className="relative hidden lg:block">
        <Image
          src={"/images/phone.png"}
          width={500}
          height={0}
          className="rotate-12"
        />
        <div className="bg-[url(/images/featurebg.png)] absolute top-0 left-0 right-0 bottom-0 -z-10"></div>
      </div>
      <div className="flex flex-grow w-fit flex-col items-start">
        <Image src={"/camp.svg"} width={40} height={0} />
        <h1 className="font-extrabold text-6xl pb-8">Our Features</h1>

        <div className="flex w-full justify-between ">
          <div className="space-y-5 flex flex-col items-start max-w-md pb-14">
            <div className="bg-green-500 p-4 md:p-8 rounded-full">
              <Image src={"/map.svg"} width={40} height={0} />
            </div>
            <div className="md:text-4xl text-2xl font-extrabold">
              Real Maps Can Be Offline
            </div>
            <div className="font-light text-gray-500">
              We provide a solution for you to be able to use our application
              when climbing, yes offline maps you can use at any time there is
              no signal at the location
            </div>
          </div>
          <div className="space-y-5 space-x-4 flex flex-col items-start max-w-md">
            <div className="bg-green-500 p-4 md:p-8 rounded-full">
              <Image src={"/calendar.svg"} width={40} height={0} />
            </div>
            <div className="md:text-4xl text-2xl font-extrabold">
              Set An Adventure Schedule
            </div>
            <div className="font-light pb-6 md:pb-0 text-gray-500">
              Schedule an adventure with friends. On holidays, there are many
              interesting offers from Hilink. That way, there's no more
              discussion
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="space-y-5 flex flex-col items-start max-w-md">
            <div className="bg-green-500 p-4 md:p-8 rounded-full">
              <Image src={"/tech.svg"} width={40} height={0} />
            </div>
            <div className="md:text-4xl text-2xl font-extrabold">
              Technology Using Augment Reality
            </div>
            <div className="font-light text-gray-500">
              Technology uses augmented reality as a guide to your hiking trail
              in the forest to the top of the mountain. Already supported by the
              latest technology without an internet connection
            </div>
          </div>
          <div className="space-y-5 space-x-4 flex flex-col items-start max-w-md">
            <div className="bg-green-500 p-4 md:p-8 rounded-full">
              <Image src={"/location.svg"} width={40} height={0} />
            </div>
            <div className="md:text-4xl text-2xl font-extrabold">
              Many New Locations Every Month
            </div>
            <div className="font-light text-gray-500">
              Lots of new locations every month, because we have a worldwide
              community of climbers who share their best experiences with
              climbing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import { FaArrowRightLong } from "react-icons/fa6";
import cogImage from "../assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 md:pt-5 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="md:w-[678px]">
        <div className="md:flex items-center ">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 ml-2 rounded-lg tracking-tight ">
          Version 2.0 is here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#01003E] mt-6">
            Celebrate the joy of accomplishment with an app designed to track your progress. Motivate your effort, and celebrate your success.
          </p>
          <div className="mt-[30PX] flex gap-1 items-center ">
            <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white">
              Get for free
            </button>
            <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight  text-black bg-transparent gap-1">
             <span>Learn more</span>
              <FaArrowRightLong className="h-5 w-5 pl-1" />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[448px] md:flex relative">
          <Image src={cogImage} alt="Cog image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-4"/>
        </div>
        </div>
      </div>
    </section>
  );
};

import { TiArrowRightThick } from "react-icons/ti";
import starImage from "../assets/star.png"
import springImage from "../assets/spring.png"
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="px-4">
        <div className="relative flex flex-col items-center justify-center gap-1">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">Sign up for free today</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        <Image 
        src={starImage} 
        alt="Star" 
        width={360} 
        className="absolute lg:-left-[130px] -left-[350px] lg:-top-[137px] -top-[137px]" 
        />

        <Image 
          src={springImage}   
          alt="Spring Image" 
          width={360} 
            className="absolute lg:-right-[100px] -right-[331px] lg:-top-[5px] -top-[5px]" 
          />
        </div>
        <div className="mt-[30px] flex justify-center gap-1 items-center ">
          <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white">
            Get for free
          </button>
          <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight  text-black bg-transparent gap-1">
           <span>Learn more</span>
            <TiArrowRightThick className="h-5 w-5 pl-1" 
            />
          </button>
        </div>
      </div>
    </section>
  )
};

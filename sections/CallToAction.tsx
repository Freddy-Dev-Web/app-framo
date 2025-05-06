"use client"
import { TiArrowRightThick } from "react-icons/ti";
import starImage from "../assets/star.png"
import springImage from "../assets/spring.png"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="px-4">
        <div className="relative ">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">Sign up for free today</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          Celebrate the joy of accomplishment with <br /> an app designed to track your progress and  motivate <br /> your efforts.
        </p>
        <motion.img 
        src={starImage.src} 
        alt="Star" 
        width={360} 
        className="absolute md:-left-[168px] lg:-left-[10px] -left-[350px] md:-top-[97px] lg:-top-[87px] -top-[137px]"
        style={{
          translateY,
        }} 
        />

        <motion.img 
          src={springImage.src}   
          alt="Spring Image" 
          width={360} 
            className="absolute md:-right-[138px] lg:-right-[5px] -right-[331px] md:-top-[30px] lg:-top-[5px] -top-[5px]"
            style={{
              translateY,
            }} 
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

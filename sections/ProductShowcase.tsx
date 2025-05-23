"use client"
import Image from 'next/image';
import ProductImage from '../assets/product-image.png'
import pyramidImage from '../assets/pyramid.png'
import TubeImage from '../assets/tube.png'
import { motion, useScroll, useTransform } from 'framer-motion';
import {useRef} from 'react'


export const ProductShowcase = () => {
  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFFF] to-[#D2DCFF] py-24'> 
      <div className="px-4">
        <div className='mx-w-[540px] mx-auto'>
        <div className='flex justify-center'>
        <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 ml-2 rounded-lg tracking-tight'>
          Boost your productivity
        </div>
        </div>
        <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5'>
          A more effective way <br /> to track progress
        </h2>
        <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>
          Efforlessly turn your ideas in to a fully functional, responsive,
          Saas website in just minutes with this templates.
        </p>
        </div> 
        <div className='relative'>  
        <Image 
        src={ProductImage} 
        alt="product image" 
        />
        <motion.img 
        src={pyramidImage.src} 
        alt="pyramid image" 
        width={262} 
        height={262} 
        className="hidden md:block absolute -right-36 -top-32"
        style={{
          translateY,
        }}
        />

        <motion.img
        src={TubeImage.src}
        alt="tube image"
        height={248}
        width={248}
        className=' hidden md:block absolute bottom-24 -left-36'
        style={{
          translateY,
        }}
       />
        </div>
      </div>
    </section>
  )
};

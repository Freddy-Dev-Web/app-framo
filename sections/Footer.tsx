"use client"
import Image from 'next/image';
import Logo from '../assets/logosaas.png'
import Link from 'next/link';

import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";






export const Footer = () => {
  return (
    <footer className='bg-black text-center text-[#BCBCBC] text-sm py-10'>
      <div className="px-4">
        <div className="relative inline-flex before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full  before:bg-[linear-gradient(to-right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute" >
        <Image src={Logo} alt="SaaS logo" height={40} width={40} className='relative' />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
        <Link href="#">About</Link>
        <Link href="#">Features</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Help</Link>
        <Link href="#">Careers</Link>
        </nav>
        <div className='flex md:flex-row md:justify-center justify-center gap-6 mt-6'>
          <FaYoutube  width={24} height={24} className='h-6 w-6 cursor-pointer' />
          <IoLogoInstagram  width={24} height={24} className='h-6 w-6 cursor-pointer' />
          <FaPinterest  width={24} height={24} className='h-6 w-6 cursor-pointer' />
          <FaSquareXTwitter  width={24} height={24} className='h-6 w-6 cursor-pointer' />
        </div>
        <p className='mt-6'>&copy; 2025 Your company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
};

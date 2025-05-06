"use client"
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from "../assets/logosaas.png";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top banner */}
      <div className="flex items-center justify-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <FaArrowRightLong className="ml-1 items-center justify-center inline-flex" />
        </div>
      </div>

      {/* Main header */}
      <div className="py-5">
        <div className="flex items-center max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Image src={Logo} alt="Saas Logo" width={40} height={40} />

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <IoClose className="h-8 w-8" />
              ) : (
                <IoMenu className="h-8 w-8" />
              )}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#">About</Link>
              <Link href="#">Features</Link>
              <Link href="#">Customers</Link>
              <Link href="#">Updates</Link>
              <Link href="#">Help</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-200 text-black absolute top-11  left-0 w-full h-[60vh] z-30 flex flex-col items-center justify-center gap-6 shadow-lg">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-black"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <IoClose className="h-8 w-8" />
          </button>

          {/* Links */}
          <Link href="#" className="text-lg font-medium">
            About
          </Link>
          <Link href="#" className="text-lg font-medium">
            Features
          </Link>
          <Link href="#" className="text-lg font-medium">
            Customers
          </Link>
          <Link href="#" className="text-lg font-medium">
            Updates
          </Link>
          <Link href="#" className="text-lg font-medium">
            Help
          </Link>
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight">
            Get for free
          </button>
        </div>
      )}
    </header>
  );
};
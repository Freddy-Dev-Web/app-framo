import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from "../assets/logosaas.png";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
    <div className="flex items-center justify-center py-3 bg-black text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">
        Streamline your workflow and boost your productivity
      </p>
      <div className='inline-flex gap-1 items-center'>
      <p>Get started for free</p>
      <FaArrowRightLong className="ml-1 items-center justify-center inline-flex" />
      </div>
    </div>
    <div className="py-5">
      <div className="flex items-center max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between w-full">
      <Image src={Logo} alt="Saas Logo" width={40} height={40}  />
      <IoMenu className="h-10 w-10 md:hidden" />
      <nav className="hidden md:flex gap-6 text-black/60 items-center">
        <Link href="#">About</Link>
        <Link href="#">Features</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Updates</Link>
        <Link href="#">Help</Link>
        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get for free</button>
      </nav>
      </div>
      </div>
    </div>
    </header>
  );
};

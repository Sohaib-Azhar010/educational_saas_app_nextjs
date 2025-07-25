import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    // <nav className="navbar">
    //   <Link href="/">
    //     <div className="flex items-center gap-2.5 cursor-pointer">
    //       <Image src="/images/logo.svg" alt="logo" width={76} height={84} />
    //     </div>
    //   </Link>
    //   <div className="flex items-center gap-8">
    //     <NavItems/>
    //     <p>Sign In</p>
    //   </div>
    // </nav>
    <nav className="navbar sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-6 py-3 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
        <Image src="/images/logo.svg" alt="logo" width={76} height={84} />
      </Link>

      <div className="flex items-center gap-6">
        <NavItems />
        <p className="text-sm font-medium text-gray-700 hover:text-primary transition duration-200 cursor-pointer">
          Sign In
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

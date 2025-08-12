"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
        <Image src="/images/logo.svg" alt="logo" width={76} height={84} />
      </Link>

      {/* Nav items + Auth buttons */}
      <div className="flex items-center gap-6">
        <NavItems />

        {/* Auth buttons */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;


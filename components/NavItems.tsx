'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            href={href}
            key={label}
            className={cn(
              "transition-colors duration-200 text-primary hover:text-primary",
              isActive &&
                "text-primary underline decoration-[#d8b4fe] decoration-3 underline-offset-5"
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;

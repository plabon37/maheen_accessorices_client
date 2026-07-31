"use client";

import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 z-50 w-full bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex h-24 w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 text-gray-800"> 
          {/* Left */}
          <div className="flex items-center gap-8 xl:gap-12">
            <Logo />

            <div className="hidden lg:block h-8 w-px bg-gray-300" />

            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
              <MdOutlineEmail className="text-lg" />
              <span>info@maheenaccessories.com</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <DesktopNav />

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search (UI only for now) */}
            <button
              className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-xl text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
              aria-label="Search"
            >
              <FiSearch />
            </button>

            {/* Divider */}
            <div className="hidden xl:block h-8 w-px bg-gray-300" />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-2xl text-gray-700 transition hover:border-blue-600 hover:text-blue-600 xl:hidden"
              aria-label="Open menu"
            >
              <HiOutlineMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
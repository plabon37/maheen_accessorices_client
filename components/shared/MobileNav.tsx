"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineXMark } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SUSTAINABILITY", href: "/sustainability" },
  { name: "PRODUCTS", href: "/products" },
  { name: "POLICIES", href: "/policies" },
  { name: "PRODUCTION", href: "/production" },
  { name: "CONTACT", href: "/contact" },
];

export default function MobileNav({
  isOpen,
  onClose,
}: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40  transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[320px] max-w-full bg-black shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b">
          <h2 className="text-xl font-bold text-white tracking-wide">
            MENU
          </h2>

          <button
            onClick={onClose}
            className="text-3xl hover:text-blue-600 transition"
          >
            <HiOutlineXMark />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b">
          <button className="w-full h-12 rounded-lg border flex items-center px-4 gap-3 hover:border-blue-600 transition">
            <FiSearch className="text-lg" />

            <span className="text-gray-500">
              Search products...
            </span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col">

          {navLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`px-6 py-5 text-sm tracking-wider font-medium border-b transition-all duration-300 ${
                  active
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full border-t p-6 text-center text-sm text-gray-500">
          © 2026 Maheen Accessories
        </div>
      </aside>
    </>
  );
}
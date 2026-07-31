"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SUSTAINABILITY", href: "/sustainability" },
  { name: "PRODUCTS", href: "/products" },
  { name: "POLICIES", href: "/policies" },
  { name: "PRODUCTION", href: "/production" },
  { name: "CONTACT", href: "/contact" },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex items-center gap-8">
      {navLinks.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className="group relative uppercase text-[13px] font-medium tracking-[2px]"
          >
            <span
              className={`transition-colors duration-300 ${
                active
                  ? "text-blue-600"
                  : "text-gray-800 group-hover:text-blue-600"
              }`}
            >
              {item.name}
            </span>

            <span
              className={`absolute left-0 -bottom-2 h-[2px] bg-blue-600 transition-all duration-300 ${
                active ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
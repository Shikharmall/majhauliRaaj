"use client";

import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold text-[#f47217] font-serif"
              // className="text-xl font-semibold text-[#caaf44] font-serif"
            >
              Majhauli Raaj
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-orange-600">
              Home
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 hover:text-orange-600"
            >
              Family Tree
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-orange-600"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-600"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1">
          <Link href="/" className="block text-gray-700 hover:text-orange-600">
            Home
          </Link>
          <Link
            href="/profile"
            className="block text-gray-700 hover:text-orange-600"
          >
            Profile
          </Link>
          <Link
            href="/gallery"
            className="block text-gray-700 hover:text-orange-600"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-orange-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

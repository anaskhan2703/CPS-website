"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-10">
          <img
            src="/Logo.jpg"
            alt="Logo"
            className="h-10 w-auto sm:h-12 md:h-16 lg:h-20 xl:h-24"
          />
          <h1 className="text-xl font-bold text-red-600">
            Consultant Property Services
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium items-center">
          <Link
            href="#"
            className="text-black hover:text-red-600 transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-black hover:text-red-600 transition"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-black hover:text-red-600 transition"
          >
            Services
          </Link>
          <Link
            href="#testimonials"
            className="text-black hover:text-red-600 transition"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold shadow"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 font-medium bg-white shadow-md">
          <Link href="#" className="hover:text-red-600 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-red-600 transition">
            About
          </Link>
          <Link href="#services" className="hover:text-red-600 transition">
            Services
          </Link>
          <Link href="#testimonials" className="hover:text-red-600 transition">
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold shadow text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

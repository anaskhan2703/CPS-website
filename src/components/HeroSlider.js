"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Property Management",
    img: "/hero1.jpg", // put your image in /public
  },
  {
    title: "Real Estate Services",
    img: "/hero2.jpg",
  },
  {
    title: "Property Maintenance",
    img: "/hero3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-black/50 rounded-3xl px-14 py-8 flex flex-col items-center min-w-[350px]">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg relative w-full">
                  {slide.title}
                </h1>
                <div className="h-1 bg-red-700 mt-4 rounded w-full max-w-[90%]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

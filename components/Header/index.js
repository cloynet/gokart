"use client";
import { Orbitron, Bebas_Neue } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import logo from "@/assets/images/logos/logo2.jpeg";
import image1 from "@/assets/images/electric/a1.jpg";
import image2 from "@/assets/images/electric/y3.jpg";
import image3 from "@/assets/images/electric/c2.jpg";
import Link from "next/link";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const slides = [
  {
    image: image1.src,
    text: "Adrenalin burada şarj olur⚡",
  },
  {
    image: image2.src,
    text: "Go-kart deneyimi burada başlar",
  },
  {
    image: image3.src,
    text: "Minik pilotlar için büyük heyecan!",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative min-h-[300px] md:min-h-[600px] text-white'>
      <div
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
        className='absolute inset-0 z-0 bg-black opacity-100'
      >
        <div className='flex p-5 md:justify-between items-center md:py-5 md:px-30 shadow-2xl backdrop-blur-md border border-black/20 '>
          <div className='hidden md:block'>
            <Link href={"/#"}>
              <Image
                src={logo}
                alt='logo'
                width={100}
                height={100}
                className='rounded-xl'
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className='hidden md:flex'>
            <ul
              className={`flex  md:space-x-10 items-center ${bebas.className} md:text-2xl`}
            >
              <li>
                <Link
                  href='/#'
                  className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                >
                  Anasayfa
                </Link>
              </li>

              <li>
                <Link
                  href='/services'
                  className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                >
                  Hizmetler
                </Link>
              </li>

              <li>
                <Link
                  href={"/about"}
                  className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                >
                  Hakkımızda
                </Link>
              </li>

              <li>
                <Link
                  href='/contact'
                  className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>

          {/* MOBILE MENU */}
          <div className=' flex items-center'>
            <button
              className='md:hidden text-left items-center'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='Toggle menu'
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {menuOpen && (
              <nav className='absolute top-16 left-0 w-full bg-black/80 px-6 py-4 md:hidden z-50'>
                <ul
                  className={`flex flex-col space-y-4 text-lg ${bebas.className}`}
                >
                  <li>
                    <Link
                      href='/#'
                      className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                    >
                      Anasayfa
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='/services'
                      className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                    >
                      Hizmetler
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='/about'
                      className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                    >
                      Hakkımızda
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='#'
                      className="
                    relative 
                    transition
                    hover:text-red-500
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-yellow-900
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                    "
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>

        <div className='absolute bottom-3 left-5'>
          <div>
            <h2 className={`${orbitron.className} text-lg md:text-5xl`}>
              {slides[currentSlide].text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

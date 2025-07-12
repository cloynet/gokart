"use client";
import { Orbitron, Bebas_Neue } from "next/font/google";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import logo from "@/assets/images/logos/logo2.jpeg";

import Link from "next/link";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const offMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='text-white p-5 md:p-10 sticky top-0 z-50 backdrop-blur-md bg-black/5'>
      <div className='hidden md:flex justify-between '>
        {/* DESKTOP MENU */}
        <Link href={"/#"}>
          <Image
            src={logo}
            alt='logo'
            width={80}
            height={80}
            className='rounded-xl hidden md:block'
          />
        </Link>

        <nav className='flex items-center justify-between'>
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
      </div>

      <div className='flex items-center justify-between'>
        <Link href={"/#"}>
          <Image
            src={logo}
            alt='logo'
            width={40}
            height={40}
            className='rounded-sm md:hidden'
          />
        </Link>

        {/* MOBILE MENU */}
        <nav className='flex items-center'>
          <button
            className='md:hidden items-center'
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
                    onClick={offMenu}
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
                    onClick={offMenu}
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
                    onClick={offMenu}
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
                    onClick={offMenu}
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;

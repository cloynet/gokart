"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logos/logo1.jpeg";
import { motion } from "framer-motion";

import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Footer() {
  return (
    <footer className='bg-black text-gray-300'>
      <motion.div
        className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <Image
            src={logo}
            alt='logo'
            width={60}
            height={60}
            className='rounded-lg mb-4'
          />
          <h3 className={`${bebas.className} text-xl text-red-500`}>
            Hız tutkunlarının tek adresi
          </h3>
        </motion.div>

        <motion.div variants={item}>
          <h4 className={`${inter.className} font-semibold text-lg mb-3`}>
            Menü
          </h4>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='hover:text-white transition'>
                Anasayfa
              </a>
            </li>
            <li>
              <a href='/services' className='hover:text-white transition'>
                Hizmetler
              </a>
            </li>
            <li>
              <a href='/about' className='hover:text-white transition'>
                Hakkımızda
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-white transition'>
                İletişim
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={item}>
          <h4 className={`${inter.className} font-semibold text-lg mb-3`}>
            İletişim
          </h4>
          <p className='text-sm'>
            Tel:{" "}
            <a href='tel:+905555555555' className='hover:text-white'>
              +90 555 555 55 55
            </a>
            <br />
            Email:{" "}
            <a href='mailto:info@eskigarage.com' className='hover:text-white'>
              info@eskigarage.com
            </a>
          </p>
          <p className='text-xs mt-4 text-gray-500'>
            © 2025 Eski Garage. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;

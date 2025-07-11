"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Orbitron, Bebas_Neue, Inter } from "next/font/google";
import image3 from "@/assets/images/electric/y2.jpeg";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

const textVarinat = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function WhyUs() {
  return (
    <div className='text-white flex md:flex-row flex-col justify-center md:space-x-60 md:mt-10 items-center'>
      <motion.div
        variants={textVarinat}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        className='max-w-3xl p-5 md:p-10 space-y-5'
      >
        <div>
          <h2 className={`${bebas.className} text-6xl md:text-8xl`}>
            NEDEN BİZ?
          </h2>
          <p
            className={`${inter.className} text-sm md:text-md text-white/60 md:mt-0 mt-5`}
          >
            Modern elektrikli Go Kartlarımızla pistte geçirdiğiniz her an, sıfır
            emisyonlu motorlarımızın sessiz gücüyle birleşerek hız, güvenlik ve
            çevre bilincini bir arada sunar. Bu deneyim, sadece bir yarış değil,
            unutulmaz bir heyecan yolculuğudur.
          </p>
        </div>
        <h3
          className={`${orbitron.className} text-3xl md:text-5xl text-red-500/90`}
        >
          Bizimle gokart deneyimi, sadece bir yarış değil, unutulmaz bir heyecan
          yolculuğudur.
        </h3>
      </motion.div>

      <motion.div
        variants={imageVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        className='relative w-[300px] h-[300px] mb-10 md:mb-0 md:w-md md:h-[400px] shadow-2xl border-r-4 border-b-4 border-r-red-500 border-b-red-500'
      >
        <Image
          src={image3}
          alt={image3}
          fill
          className='object-cover rounded-tl-lg'
        />
      </motion.div>
    </div>
  );
}

export default WhyUs;

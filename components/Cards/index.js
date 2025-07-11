"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duraiton: 0.6, ease: "easeOut" },
  },
};

function Cards() {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className={`${bebas.className} flex flex-col md:flex-col lg:flex-row md:space-y-0 space-y-5 p-5 md:justify-center md:space-x-10 md:mt-20 text-center`}
    >
      <motion.div
        variants={item}
        className='flex justify-center flex-col space-y-5 min-h-[300px] bg-black text-red-500 p-10 md:min-w-md md:max-w-md rounded-md hover:scale-105 hover:shadow-xl transition-transform duration-300'
      >
        <h2 className='text-3xl'>Kendinizi Takip Edin</h2>
        <p className={`${inter.className} text-white`}>
          En iyi tur zamanlarında zirveye doğru yarışın
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className='flex justify-center flex-col space-y-5 min-h-[300px] bg-black text-red-500 p-10 md:min-w-md md:max-w-md rounded-md hover:scale-105 hover:shadow-xl transition-transform duration-300'
      >
        <h2 className='text-3xl'>Güvenliğimiz Zirvede</h2>
        <p className={`${inter.className} text-white`}>
          Elektrikli go kartlarımız, sessiz motoru ve güçlü frenleriyle güvenli
          sürüş sağlar. Düzenli bakımla hız ve güveni bir arada sunarız.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className='flex justify-center flex-col space-y-5 min-h-[300px] bg-black text-red-500 p-10 md:min-w-md md:max-w-md rounded-md hover:scale-105 hover:shadow-xl transition-transform duration-300'
      >
        <h2 className='text-3xl'>Grup Etkinlikleri</h2>
        <p className={`${inter.className} text-white`}>
          Arkadaşlarınızla unutulmaz anı ve deneyimler için heyecanın tek adresi
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Cards;

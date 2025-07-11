"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import kartImage from "@/assets/images/electric/y1.jpeg";

import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

function ServicesClientsPage() {
  return (
    <div className='max-w-6xl mx-auto p-6 space-y-16'>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'
      >
        <div className='space-y-3'>
          <h2
            className={`${bebas.className} text-4xl font-semibold text-red-500`}
          >
            Elektrikli Go Kart Kiralama
          </h2>

          <p className={`${inter.className} text-gray-200 text-sm md:text-lg`}>
            Modern pistimizde elektrikli go kartlarımızı ister tek başınıza,
            ister grup halinde kiralayarak heyecan dolu anlar yaşayabilirsiniz.
            Çevre dostu ve sessiz motorlarımızla konforlu sürüşün keyfini
            çıkarın.
          </p>
        </div>

        <div className='md:col-span-2 flex justify-center'>
          <Image
            src={kartImage}
            alt='Elektrikli Go Kart'
            width={600}
            height={400}
            className='rounded-lg shadow-lg'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'
      >
        <div className='space-y-3'>
          <h2
            className={`${bebas.className} text-4xl font-semibold text-red-500`}
          >
            Kurumsal Etkinlikler & Organizasyonlar
          </h2>

          <p className={`${inter.className} text-gray-200 text-sm md:text-lg`}>
            Şirketiniz için unutulmaz bir deneyim mi arıyorsunuz? Elektrikli go
            kart pistimizde kurumsal etkinlikler düzenleyebilir, çalışanlarınıza
            eğlenceli bir gün yaşatabilirsiniz.
          </p>
        </div>

        <div className='md:col-span-2 flex justify-center'>
          <h3
            className={`${bebas.className} text-7xl font-bold text-white animate-pulse`}
          >
            Takım Ruhunu Zirveye Taşıyın!
          </h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'
      >
        <div className='space-y-3'>
          <h2
            className={`${bebas.className} text-4xl font-semibold text-red-500`}
          >
            Çocuklara Özel Go Kart Deneyimi
          </h2>

          <p className={`${inter.className} text-gray-200 text-sm md:text-lg`}>
            Çocuklar için özel hız limitli ve güvenli go kartlarımızla eğlenceli
            ve güvenli bir sürüş deneyimi sunuyoruz. Onların mutluluğu bizim
            için her şeyden önemli!
          </p>
        </div>

        <div className='md:col-span-2 flex justify-center'>
          <Image
            src={kartImage}
            alt='Çocuk Go Kart'
            width={600}
            height={400}
            className='rounded-lg shadow-lg'
          />
        </div>
      </motion.div>
    </div>
  );
}

export default ServicesClientsPage;

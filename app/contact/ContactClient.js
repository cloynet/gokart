"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  TwitterLogo,
  Envelope,
} from "@phosphor-icons/react";

import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function ContactClientPage() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='md:mt-40'>
      <div className='max-w-6xl mx-auto p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white '>
        <motion.div
          variants={fadeInLeft}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex'
        >
          <Card className='w-full bg-black/10 text-white flex flex-col p-6 items-center justify-center ransition duration-300 hover:scale-[1.02]'>
            <CardTitle
              className={`${bebas.className} text-red-500 text-4xl text-center animate-pulse`}
            >
              Adresimiz
            </CardTitle>

            <CardContent className='text-lg leading-relaxed font-bold'>
              <p className={`${inter.className}`}>Eski Garage Go-Kart</p>
              <p className={`${inter.className}`}>
                Örnek Mahallesi, Örnek Caddesi No: 555{" "}
              </p>
              <p className={`${inter.className}`}>Türkiye</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex'
        >
          <Card className='w-full bg-black/10 text-white flex flex-col p-6 items-center justify-center ransition duration-300 hover:scale-[1.02]'>
            <CardTitle
              className={`${bebas.className} text-red-500 text-4xl text-center animate-pulse`}
            >
              İletişim
            </CardTitle>
            <CardContent className='flex flex-col gap-3'>
              <p className='max-w-lg text-lg flex gap-5 items-center'>
                <WhatsappLogo className='text-4xl text-red-800' />{" "}
                <Link
                  href='tel:+905555555555'
                  className={`${inter.className} font-bold rounded-lg p-3 bg-red-700`}
                >
                  +90 555 555 55 55
                </Link>
              </p>

              <p className='text-lg flex gap-5 items-center'>
                <Envelope className='text-4xl text-red-800' />{" "}
                <Link
                  href='mailto:ornek@hotmail.com'
                  className={`${inter.className} font-bold rounded-lg p-3 bg-red-700`}
                >
                  ornek@hotmail.com
                </Link>
              </p>

              <h3 className={`${bebas.className} text-red-500 text-2xl`}>
                Sosyal Medya
              </h3>
              <ul className='flex gap-5 text-4xl items-center'>
                <li>
                  <Link href='#'>
                    <FacebookLogo className='text-red-800' />
                  </Link>
                </li>

                <li>
                  <Link href='#'>
                    <InstagramLogo className='text-red-800' />
                  </Link>
                </li>

                <li>
                  <Link href='#'>
                    <TwitterLogo className='text-red-800' />
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactClientPage;

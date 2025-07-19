"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  TwitterLogo,
  Envelope,
  AddressBookIcon,
} from "@phosphor-icons/react";

import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

function ContactClientPage() {
  return (
    <section className='w-full p-6 md:p-16 rounded-xl bg-red-700/20 '>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-[300px] md:w-[500px] h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md'
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48747.34798050207!2d32.9905407272316!3d40.215530096847125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4082142f135edec9%3A0x958e5b7a1264f78!2zw4d1YnVrLCBBbmthcmE!5e0!3m2!1str!2str!4v1752941424869!5m2!1str!2str'
            width='100%'
            height='100%'
            className='border-0'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </motion.div>

        <div className='hidden md:block h-[300px] border-r border-red-600'></div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-8'
        >
          <ul className='space-y-6'>
            <li className='flex items-center gap-6'>
              <AddressBookIcon size={32} className='text-red-600' />
              <span
                className={`${inter.className} text-white/70 hover:text-white transition`}
              >
                Eski Garage Go-Kart
              </span>
            </li>

            <li className='flex items-center gap-6'>
              <WhatsappLogo size={32} className='text-red-600' />
              <Link
                href='tel:+905555555555'
                aria-label='Telefon Numarası'
                className={`${inter.className} text-white/70 hover:text-white transition`}
              >
                +90 555 555 55 55
              </Link>
            </li>

            <li className='flex items-center gap-6'>
              <Envelope size={32} className='text-red-600' />
              <Link
                href='mailto:ornek@hotmail.com'
                aria-label='Mail Adresi'
                className={`${inter.className} text-white/70 hover:text-white transition`}
              >
                ornek@hotmail.com
              </Link>
            </li>
          </ul>

          <ul className='flex gap-4 border-y border-white/10 py-4'>
            {[
              {
                href: "#",
                icon: <FacebookLogo size={28} />,
                label: "Facebook",
              },
              {
                href: "#",
                icon: <InstagramLogo size={28} />,
                label: "Instagram",
              },
              { href: "#", icon: <TwitterLogo size={28} />, label: "Twitter" },
            ].map(({ href, icon, label }, idx) => (
              <li key={idx} className='group'>
                <Link href={href} aria-label={label}>
                  <div className='w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-all group-hover:bg-white group-hover:scale-110 duration-300'>
                    <span className='text-white group-hover:text-black transition'>
                      {icon}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactClientPage;

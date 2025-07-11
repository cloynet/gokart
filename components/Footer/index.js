import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logos/logo1.jpeg";

import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <div className='text-white p-5 md:p-10 flex flex-col text-center md:justify-around items-center'>
      <div className='flex flex-col items-center'>
        <div className=''>
          <Image
            src={logo}
            alt='logo'
            width={100}
            height={100}
            className='rounded-lg'
          />
        </div>

        <h3
          className={`${bebas.className} mt-5 mb-5 md:mb-0 text-xl text-red-500`}
        >
          Hız tutkunlarının tek adresi
        </h3>
      </div>

      <div className={`${inter.className}`}>
        <p className='text-sm'>
          <strong>© 2025 Eski Garage</strong> Gokart tutkusunu yılların
          deneyimiyle birleştiriyoruz. Bizi tercih ettiğiniz için teşekkür
          ederiz.
        </p>
      </div>
    </div>
  );
}

export default Footer;

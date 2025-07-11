import React from "react";
import AnimatedText from "../AnimatedText";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Prices() {
  return (
    <div className='flex flex-col items-center p-5 md:p-8 bg-red-700 my-10'>
      <h2
        className={`${bebas.className} text-white text-3xl md:text-5xl md:mt-0 md:mb-10`}
      >
        <AnimatedText text='Ücretler' />
      </h2>

      <div className='text-white flex flex-col text-center md:flex-row my-5 space-y-10 md:space-y-0 md:space-x-30'>
        <div className='border-2 border-white/80 space-y-3 p-10 md:p-20 rounded-lg shaodow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300'>
          <h3 className={`${inter.className} text-white/80 font-bold`}>
            <AnimatedText text='10 Dakika' />
          </h3>
          <h2 className='text-5xl font-bold'>
            <AnimatedText text='295 TL' />
          </h2>
        </div>

        <div className='border-2 border-white/80 space-y-3 p-10 md:p-20 rounded-lg shaodow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300'>
          <h3 className={`${inter.className} text-white/80 font-bold`}>
            <AnimatedText text='20 Dakika' />
          </h3>
          <h2 className='text-5xl font-bold'>
            <AnimatedText text='580 TL' />
          </h2>
        </div>

        <div className='border-2 border-white/80 space-y-3 p-10 md:p-20 rounded-lg shaodow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300'>
          <h3 className={`${inter.className} text-white/80 font-bold`}>
            <AnimatedText text='30 Dakika' />
          </h3>
          <h2 className='text-5xl font-bold'>
            <AnimatedText text='870 TL' />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Prices;

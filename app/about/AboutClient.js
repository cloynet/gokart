"use client";
import React from "react";
import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Inter, Bebas_Neue, Audiowide } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

function AboutClientPage() {
  const sectionFade = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='relative overflow-hidden'>
      <motion.div
        className='absolute -top-20 -left-20 w-[500px] h-[500px] bg-red-600 rounded-full blur-3xl opacity-20 z-0'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700 rounded-full blur-2xl opacity-10 z-0'
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className='text-white p-5 md:p-10 space-y-20 max-w-6xl mx-auto relative z-10'>
        <div className='flex flex-col md:flex-row gap-10 items-center max-w-4xl mx-auto w-full'>
          <motion.div
            className='border-b-4 border-red-500 md:border-b-0 md:border-r-4 p-6 md:border-r-red-500 flex-shrink-0'
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className={`${bebas.className} text-4xl md:text-6xl`}>
              Biz Kimiz
            </h2>
          </motion.div>

          <motion.p
            className={`${inter.className} text-lg md:text-xl max-w-xl`}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Eski Garage, modern elektrikli go kartlarıyla her yaştan kullanıcıya
            çevre dostu, güvenli ve yüksek performanslı sürüş deneyimleri sunan,
            yenilikçi ve tutkuyla çalışan bir markadır.
          </motion.p>
        </div>

        <div className='relative inline-block mt-4'>
          <motion.p
            className={`${audiowide.className} text-lg md:text-3xl uppercase`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              animate={{
                x: [0, -5, 5, -5, 5, 0],
                color: ["#ffffff", "#ff0000", "#ffffff"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ display: "inline-block" }}
            >
              Elektrikli hız, unutulmaz deneyim
            </motion.span>
          </motion.p>
        </div>

        {/* 1 */}
        <motion.section
          variants={sectionFade}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='space-y-5'
        >
          <h3 className='text-2xl text-red-500 font-bold'>Ne Sunuyoruz?</h3>
          <ul className='text-gray-300 space-y-2 list-disc list-inside'>
            <li>Yüksek teknolojiye sahip elektrikli go kart araçlar.</li>
            <li>Çocuklar ve yetişkinler için güvenli ve uygun modeller.</li>
            <li>Çevre dostu, sessiz ve hızlı sürüş deneyimi.</li>
            <li>Uzman teknik ekip ve düzenli bakım hizmeti.</li>
          </ul>
        </motion.section>

        {/* 2 */}
        <motion.section
          variants={sectionFade}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='space-y-5'
        >
          <h3 className='text-2xl text-red-500 font-bold'>
            Çocuklar için Özel
          </h3>
          <p className='text-gray-300'>
            Eski Garage olarak, çocukların güvenliğini en üst düzeye taşıyan
            özel tasarımlı araçlar sunuyoruz. Hız limiti, yumuşak koltuk yapısı
            ve gelişmiş fren sistemleriyle çocuklar için ideal bir pist deneyimi
            yaratıyoruz.
          </p>
        </motion.section>

        {/* 3 */}
        <motion.section
          variants={sectionFade}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='space-y-5'
        >
          <h3 className='text-2xl text-red-500 font-bold'>Vizyonumuz</h3>
          <p className='text-gray-300'>
            Elektrikli go kart dünyasında sürdürülebilir ve heyecan verici
            deneyimler sunan lider marka olmak.
          </p>
        </motion.section>

        {/* 4 */}
        <motion.section
          variants={sectionFade}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='space-y-5'
        >
          <h3 className='text-2xl text-red-500 font-bold'>Misyonumuz</h3>
          <p className='text-gray-300'>
            Yüksek teknolojiyle donatılmış, güvenli ve çevre dostu elektrikli go
            kartlar üreterek pistte her yaştan sürücüye unutulmaz anlar
            yaşatmak.
          </p>
        </motion.section>
      </div>
    </div>
  );
}

export default AboutClientPage;

"use client";
import "flowbite";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/assets/images/electric/y1.jpeg";
import image2 from "@/assets/images/electric/c1.jpeg";
import k1 from "@/assets/images/electric/k1.jpg";
import m1 from "@/assets/images/electric/m1.jpg";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const faqs = [
  {
    question: "Elektrikli go-kartlar benzinli olanlardan farkı nedir?",
    answer:
      "Elektrikli go-kartlar çevre dostudur, sıfır emisyon üretir ve çok daha sessiz çalışır. Ayrıca anında tork üretimi sayesinde daha hızlı hızlanırlar. Hem güvenli hem de modern bir sürüş deneyimi sunar.",
  },
  {
    question: "Yaş sınırı var mı?",
    answer:
      "Evet, güvenlik nedeniyle minimum yaş sınırımız 7’dir ve minimum boy sınırı 120 cm’dir. Çocuklar için özel olarak hız limiti düşük araçlarımız da mevcuttur",
  },
  {
    question: "Kask ve ekipman veriliyor mu?",
    answer:
      "Evet, pistimize gelen tüm misafirlerimize ücretsiz olarak kask ve gerekli güvenlik ekipmanları sağlanmaktadır.",
  },
  {
    question: "Önceden rezervasyon yapmam gerekiyor mu?",
    answer:
      "Yoğunluk durumuna göre değişebilir. Özellikle hafta sonları ve grup etkinlikleri için önceden rezervasyon yapmanız tavsiye edilir.",
  },
  {
    question: "Grup etkinlikleri ve doğum günü organizasyonları yapılıyor mu?",
    answer:
      "Evet! Kurumsal etkinliklerden doğum günü partilerine kadar birçok organizasyona ev sahipliği yapıyoruz. Size özel paketler için bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Pistte aynı anda kaç kişi yarışabilir?",
    answer:
      "Pist büyüklüğüne bağlı olarak genellikle aynı anda 6-8 kişi güvenli şekilde yarışabilir. Grup büyüklüğüne göre seanslar ayarlanabilir.",
  },
];

const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

function ServicesClientsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='text-white p-5 md:p-10'>
      <div className='max-w-3xl mx-auto flex flex-col'>
        <ScrollReveal>
          <h2
            className={`${bebas.className} text-red-600 text-5xl mb-10 border-b border-red-600/60 pb-7`}
          >
            Hizmetlerimiz
          </h2>
        </ScrollReveal>

        <div className='space-y-10'>
          <ScrollReveal delay={0.1}>
            <div className='max-w-2xl'>
              <h2
                className={`${inter.className} font-bold uppercase text-xl md:text-2xl`}
              >
                Kartİng
              </h2>
              <p className={`${inter.className} text-sm my-5`}>
                Modern pistimizde elektrikli go kartlarımızı ister tek başınıza,
                ister grup halinde kiralayarak heyecan dolu anlar
                yaşayabilirsiniz. Çevre dostu ve sessiz motorlarımızla konforlu
                sürüşün keyfini çıkarın.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image src={image} alt='image' width={700} height={450} />
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className='max-w-2xl'>
              <h2
                className={`${inter.className} font-bold uppercase text-xl md:text-2xl`}
              >
                Kurumsal Etkinlikler & Organizasyonlar
              </h2>
              <p className={`${inter.className} text-sm my-5`}>
                Şirketiniz için unutulmaz bir deneyim mi arıyorsunuz? Elektrikli
                go kart pistimizde kurumsal etkinlikler düzenleyebilir,
                çalışanlarınıza eğlenceli bir gün yaşatabilirsiniz.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image src={k1} alt='image' width={700} height={450} />
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className='max-w-2xl'>
              <h2
                className={`${inter.className} font-bold uppercase text-xl md:text-2xl`}
              >
                Çocuklara Özel Go Kart Deneyimi
              </h2>
              <p className={`${inter.className} text-sm my-5`}>
                Çocuklar için özel hız limitli ve güvenli go kartlarımızla
                eğlenceli ve güvenli bir sürüş deneyimi sunuyoruz. Onların
                mutluluğu bizim için her şeyden önemli!
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image src={image2} alt='image' width={700} height={450} />
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className='max-w-2xl'>
              <h2
                className={`${inter.className} font-bold uppercase text-xl md:text-2xl`}
              >
                Mangal Partilerİ
              </h2>
              <p className={`${inter.className} text-sm my-5`}>
                Aileniz ve dostlarınızla keyifli vakit geçirmek için ideal bir
                ortam sunuyoruz. Geniş açık alanlarımızda mangalınızı yapabilir,
                doğanın tadını çıkararak huzurlu ve samimi bir gün
                geçirebilirsiniz. Lezzetli sohbetler, dumanı üstünde etler ve
                bol bol kahkaha sizi bekliyor.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Image src={m1} alt='image' width={700} height={450} />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={0.5}>
        <div className='mt-16 max-w-3xl mx-auto'>
          <h2
            className={`${bebas.className} font-bold text-xl md:text-2xl mb-5`}
          >
            Sıkça Sorulan Sorular
          </h2>
          <div className='max-w-2xl'>
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                className='mb-2'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.button
                  type='button'
                  onClick={() => toggle(index)}
                  className={`flex justify-between items-center w-full p-5 border border-red-600 cursor-pointer ${
                    openIndex === index
                      ? "bg-red-50 text-red-600"
                      : "text-gray-500"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item.question}</span>
                  <motion.svg
                    className='w-3 h-3'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5 5 1 1 5'
                    />
                  </motion.svg>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4, ease: "easeInOut" },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className='p-5 border border-t-0 border-red-600 text-gray-500'>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default ServicesClientsPage;

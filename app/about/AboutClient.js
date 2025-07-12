"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Inter, Bebas_Neue, Audiowide } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

function AboutClientPage() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='text-white flex flex-col'>
      <div className='flex flex-col items-center p-5 md:p-10 justify-center gap-5'>
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
      </div>

      <div className='grid grid-cols-1 max-w-5xl mx-auto w-full gap-10 p-5 md:p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            variants={fadeInLeft}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='flex h-full justify-center'
          >
            <Card className='max-w-md w-full flex flex-col bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl shadow-lg p-6 transition duration-300 hover:scale-[1.02]'>
              <CardHeader className='border-b border-white/10 pb-3 mb-3'>
                <CardTitle>
                  <h3 className={`${inter.className} font-bold text-lg`}>
                    Eski Garage olarak, elektrikli go kart alanında yenilikçi ve
                    güvenilir çözümler sunuyoruz.
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className='text-sm space-y-2'>
                <p className={`${inter.className}`}>
                  Elektrikli go kartlarımız, son teknoloji bataryalar ve
                  motorlarla donatılmış, çevre dostu, sessiz ve yüksek
                  performanslı araçlardır.
                </p>
                <p className={`${inter.className}`}>
                  Hem çocuklar hem yetişkinler için farklı modellerimizle pistte
                  adrenalini ve eğlenceyi en güvenli şekilde yaşamanızı
                  sağlıyoruz.
                </p>
                <p className={`${inter.className}`}>
                  Firmamız, müşteri memnuniyetini ön planda tutar; düzenli bakım
                  ve teknik destek ile ürünlerimizin kalitesini her zaman en üst
                  seviyede tutarız.
                </p>
                <p className={`${inter.className}`}>
                  Eski Garage, pist deneyiminizi unutulmaz kılmak için burada!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='flex h-full justify-center'
          >
            <Card className='max-w-md w-full flex flex-col bg-neutral-900 border border-white/10 text-white rounded-xl shadow-lg p-6 transition duration-300 hover:scale-[1.02]'>
              <CardHeader className='border-b border-white/10 pb-3 mb-3'>
                <CardTitle>
                  <h3 className={`${inter.className} font-bold text-lg`}>
                    Eski Garage ile hızın ve teknolojinin keyfini çıkarın!
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className='text-sm space-y-2'>
                <p className={`${inter.className}`}>
                  Elektrikli go kartlarımızla sadece yarış yapmaz, aynı zamanda
                  geleceğin sürdürülebilir ve yenilikçi araçlarını
                  deneyimlersiniz.
                </p>
                <p className={`${inter.className}`}>
                  Sessiz motorları ve güçlü performanslarıyla fark yaratan
                  araçlarımız, her yaş grubuna uygun ve güvenlidir.
                </p>
                <p className={`${inter.className}`}>
                  Bizimle pistte adrenalin dolu anlar yaşarken, çevreci
                  teknoloji ile geleceğe de yatırım yapmış olursunuz.
                </p>
                <p className={`${inter.className}`}>
                  Eski Garage ailesi olarak, heyecan dolu sürüşler için sürekli
                  çalışıyor ve gelişiyoruz.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            variants={fadeInLeft}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='flex h-full justify-center'
          >
            <Card className='max-w-md w-full flex flex-col bg-gradient-to-br from-yellow-600 to-yellow-800 text-white rounded-xl shadow-lg p-6 transition duration-300 hover:scale-[1.02]'>
              <CardHeader className='border-b border-white/10 pb-3 mb-3'>
                <CardTitle as='h2'>
                  <h3 className={`${inter.className} font-bold text-lg`}>
                    Eski Garage, elektrikli go kart sektöründe öncü bir firma
                    olmayı hedeflemektedir.
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className='text-sm space-y-2'>
                <p className={`${inter.className}`}>
                  Elektrikli motor teknolojisinin avantajlarını kullanarak,
                  yüksek performanslı ve çevreci araçlar geliştiriyoruz.
                </p>
                <p className={`${inter.className}`}>
                  Ürün portföyümüzde çocuklar ve yetişkinler için farklı model
                  seçenekleri bulunmaktadır.
                </p>
                <p className={`${inter.className}`}>
                  Her araç, sıkı kalite kontrol süreçlerinden geçmekte ve
                  düzenli bakımlarla güvenlik en üst seviyede tutulmaktadır.
                </p>
                <p className={`${inter.className}`}>
                  Müşteri odaklı yaklaşımımızla, elektrikli go kart deneyimini
                  daha erişilebilir ve keyifli hale getirmek için çalışıyoruz.
                </p>
                <p className={`${inter.className}`}>
                  Eski Garage, yenilikçi çözümler ve uzman kadrosuyla sektörün
                  nabzını tutuyor.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className='flex h-full justify-center'
          >
            <Card className='max-w-md w-full flex flex-col bg-neutral-900 border border-white/10 text-white rounded-xl shadow-lg p-6 transition duration-300 hover:scale-[1.02]'>
              <CardHeader className='border-b border-white/10 pb-3 mb-3'>
                <CardTitle>
                  <h3 className={`${inter.className} font-bold text-lg`}>
                    Çocuklar İçin Güvenli ve Özenle Tasarlandı
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className='text-sm space-y-2'>
                <p className={`${inter.className}`}>
                  Eski Garage elektrikli go kartları, çocukların güvenliği ve
                  konforu ön planda tutularak özel olarak tasarlanmıştır.
                </p>
                <p className={`${inter.className}`}>
                  Araçlarımızın hızı, çocukların kontrol edebileceği seviyelerde
                  sınırlanmış;
                </p>
                <p className={`${inter.className}`}>
                  sağlam şasi ve yumuşak koltuk yapısı ile maksimum rahatlık
                  sağlanmıştır.
                </p>
                <p className={`${inter.className}`}>
                  Modern fren sistemleri ve elektrik motorlarının anlık
                  kontrollü torku sayesinde, çocuklar güvenle pistte hızın
                  keyfini çıkarabilir.
                </p>
                <p className={`${inter.className}`}>
                  Ayrıca, düzenli bakım ve kalite kontrollerimizle her aracın
                  güvenlik standartlarına uygun olduğundan emin oluyoruz.
                </p>
                <p className={`${inter.className}`}>
                  Çocukların güvenliği bizim için sadece bir taahhüt değil,
                  tutkumuzdur.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto w-full p-5 md:p-10'>
          <Card className='bg-neutral-900 border border-white/10 text-white rounded-lg p-6'>
            <CardHeader>
              <CardTitle>
                <h3 className={`${inter.className} font-bold`}>Vizyonumuz</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`${inter.className} text-sm`}>
                Elektrikli go kart dünyasında sürdürülebilir ve heyecan verici
                deneyimler sunan lider marka olmak.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-neutral-900 border border-white/10 text-white rounded-lg p-6'>
            <CardHeader>
              <CardTitle>
                <h3 className={`${inter.className} font-bold`}>Misyonumuz</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`${inter.className} text-sm`}>
                Yüksek teknolojiyle donatılmış, güvenli ve çevre dostu
                elektrikli go kartlar üreterek pistte her yaştan sürücüye
                unutulmaz anlar yaşatmak.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutClientPage;

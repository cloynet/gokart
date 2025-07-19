import React from "react";
import ContactClientPage from "./ContactClient";
import ContactForm from "./ContactForm";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function ContactPage() {
  return (
    <div className='flex flex-col items-center px-4'>
      <h2
        className={`${bebas.className} text-red-500 text-6xl text-center animate-pulse my-8`}
      >
        İletİşİm
      </h2>

      <ContactClientPage />

      <div className='flex justify-center w-full mt-10'>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;

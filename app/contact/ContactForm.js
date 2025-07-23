"use client";

import React, { useState } from "react";

import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");

    const rest = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (rest.ok) {
      setStatus("Mesaj Gönderildi");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Gönderme başarısız");
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <h2
        className={`text-red-600 text-4xl md:text-8xl ${bebas.className} text-center`}
      >
        Bİzİmle İletİşİme Geçİn
      </h2>
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 w-full max-w-md text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center ${inter.className} `}
      >
        <input
          type='text'
          name='name'
          placeholder='Adınız'
          value={formData.name}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded'
          required
        />
        <input
          type='email'
          name='email'
          placeholder='E-posta adresi'
          value={formData.email}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded'
          required
        />
        <textarea
          name='message'
          placeholder='mesajınız'
          value={formData.message}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded h-32'
        />
        <button
          type='submit'
          className='w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'
        >
          Gönder
        </button>
        {status && <p className='mt-2 text-sm'> {status} </p>}
      </form>
    </div>
  );
}

export default ContactForm;
 

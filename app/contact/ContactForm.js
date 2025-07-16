"use client";

import React, { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className='space-y-4 max-w-lg mx-auto mt-10 text-white'
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
        className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'
      >
        Gönder
        {status && <p className='mt-2- text-sm'> {status} </p>}
      </button>
    </form>
  );
}

export default ContactForm;

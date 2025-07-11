"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

function AnimatedText({ text }) {
  return (
    <motion.span
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default AnimatedText;

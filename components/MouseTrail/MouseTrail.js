"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MouseTrail() {
  const [positions, setPositions] = useState([]);
  const maxTrail = 10;
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPositions((prev) => {
        const newPositions = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: Date.now() },
        ];

        if (newPositions.length > maxTrail) {
          newPositions.shift();
        }
        return newPositions;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <AnimatePresence>
        {positions.map(({ x, y, id }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: y - 5,
              left: x - 5,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: `linear-gradient(90deg, #ff4500, #ffd700)`,
              boxShadow: `0 0 8px 2px rgba(255, 165, 0, ${
                1 - index / maxTrail
              })`,
              pointerEvents: "none",
              zIndex: 9999,
              filter: "blur(1.5px)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

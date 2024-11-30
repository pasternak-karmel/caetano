"use client";
import { HeroSection } from "@/components/hero-section";
import { LoanCalculator } from "@/components/loan-calculator";
import NossaEquipe from "@/components/NossaEquipe";
import Produtos from "@/components/produits";
import QuemSomos from "@/components/QuemSomos";
import Testimonials from "@/components/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{
            y: scrollY * 0.5, // Parallax effect
            scale: 1 + scrollY * 0.0005, // Slight zoom effect
          }}
          className="absolute inset-0"
        >
          <Image
            src="/banner.jpeg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white max-w-3xl px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Realizza alcuni dei tuoi progetti futuri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-6"
            >
             Dai un&apos;occhiata ai tuoi progetti futuri Il valore del prestito è deciso dalla tua possibilità di restituirlo 10
             anni
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition duration-300"
            >
              RICHIESTA DI CREDITO
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section>
        <QuemSomos />
        <NossaEquipe />
        <Produtos />
      </section>
      <section>
        <LoanCalculator />
      </section>
      <Testimonials />
      <HeroSection />
    </div>
  );
}

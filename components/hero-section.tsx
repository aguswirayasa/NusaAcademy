"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

// Varian animasi tetap sama, tidak perlu diubah

export default function HeroSection() {
  return (
    <section id="hero" className="container min-h-[90vh] pt-40 pb-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-h1 font-primary text-text-primary leading-tight">
            Bangun Masa Depan Digital Indonesia, Mulai dari Anda.
          </h1>
          <p className="mt-4 text-subheadline text-text-secondary">
            Platform pelatihan digital untuk mahasiswa, profesional, dan pelaku
            bisnis yang siap meningkatkan keahlian dan bersaing di panggung
            global.
          </p>
          <div className="mt-xl flex flex-col sm:flex-row gap-md justify-center md:justify-start">
            <Button size="lg">Jelajahi Kursus</Button>
            <Button size="lg" variant="secondary">
              Tentang Kami
            </Button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/hero.webp" // Ganti dengan path gambar yang sesuai (bisa tetap gambar UMKM atau gambar yang lebih umum)
              alt="Talenta digital Indonesia sedang belajar dan berkembang"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

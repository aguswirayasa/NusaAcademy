"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section id="hero" className="container min-h-screen pt-40 pb-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center md:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-h1 font-primary text-text-primary"
          >
            Buka Potensi Karir Digital Anda, Hari Ini.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-subheadline text-text-secondary"
          >
            Nusa Academy adalah platform kursus online yang dirancang untuk
            membekali Anda dengan keahlian teknologi paling dicari di industri.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-xl flex flex-col sm:flex-row gap-md justify-center md:justify-start"
          >
            <Button size="lg">Mulai Belajar</Button>
            <Button size="lg" variant="secondary">
              Lihat Kurikulum
            </Button>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-8 md:mt-0">
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/hero.webp" // Ganti dengan path gambar yang sesuai
              alt="Siswa sedang belajar di Nusa Academy"
              width={600}
              height={450}
              className="w-full h-full object-cover animate-zoom-in"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

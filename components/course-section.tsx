"use client";

import { motion } from "framer-motion";

import CourseCard from "@/components/course-card";
import { Button } from "./ui/button";

// ... (PROJECTS_DATA yang sudah ada)

// Data baru untuk section kursus
export const COURSES_DATA = [
  {
    imageUrl: "/course1.webp",
    category: "Pemasaran Digital",
    title: "Strategi Pemasaran Media Sosial untuk Bisnis",
    description:
      "Ideal untuk pemilik bisnis dan marketer yang ingin meningkatkan jangkauan dan penjualan melalui platform sosial.",
  },
  {
    imageUrl: "/course2.png", // Path gambar baru
    category: "Pengembangan Teknologi",
    title: "Dasar-Dasar Pengembangan Web Modern",
    description:
      "Bagi pemula dan calon developer yang ingin memahami fondasi membangun website interaktif dengan HTML, CSS, dan JavaScript.",
  },
  {
    imageUrl: "/course3.webp",
    category: "Kreativitas & Desain",
    title: "Desain Grafis Praktis dengan Canva",
    description:
      "Untuk siapa saja—mahasiswa, staf, atau pebisnis—yang perlu membuat visual profesional dengan cepat dan mudah.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function CourseSection() {
  return (
    <section id="courses" className="py-xxl bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-h2 font-primary text-text-primary">
            Kursus Unggulan Kami
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-subheadline text-text-secondary">
            Pilih jalur yang paling sesuai dengan tujuan karir Anda. Setiap
            kursus dirancang untuk memberikan dampak nyata.
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg">
            Lihat Semua Kursus
          </Button>
        </div>
      </div>
    </section>
  );
}

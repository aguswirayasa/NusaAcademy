"use client";

import { motion } from "framer-motion";

import CourseCard from "@/components/course-card";
import { Button } from "./ui/button";
import Link from "next/link";
import { COURSES_DATA } from "@/lib/data";

// ... (PROJECTS_DATA yang sudah ada)

// Data baru untuk section kursus

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
            Mau upgrade karir? Pilih jalur yang cocok sama goals kamu. Setiap
            kursus langsung applicable dan proven bisa boost performa kerja
            kamu.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="courses">
            <Button variant="secondary" size="lg">
              Lihat Semua Kursus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

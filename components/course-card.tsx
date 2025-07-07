"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, Tag } from "lucide-react"; // Import ikon untuk visual

type CourseCardProps = {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  price: string; // Tambahkan prop harga (misal: "Rp 500.000" atau "Gratis")
  studentsEnrolled: number; // Tambahkan prop jumlah peserta
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" } },
};

export default function CourseCard({
  imageUrl,
  category,
  title,
  description,
  price,
  studentsEnrolled,
}: CourseCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group flex flex-col bg-white rounded-lg shadow-md border border-border overflow-hidden transition-all duration-300 ease-out hover:shadow-lg"
    >
      {/* Gambar Kursus */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Konten Utama Kartu */}
      <div className="p-lg flex flex-col flex-grow">
        <p className="text-sm font-semibold text-primary mb-2">{category}</p>
        <h4 className="text-h4 font-primary text-text-primary flex-grow">
          {title}
        </h4>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>

        {/* Informasi Harga dan Peserta */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center text-primary font-bold font-primary text-lg">
            <Tag className="h-5 w-5 mr-1" />
            {price}
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Users className="h-4 w-4 mr-1" />
            {studentsEnrolled} Bergabung
          </div>
        </div>
      </div>

      {/* Tombol CTA */}
      <div className="p-lg pt-0 mt-auto">
        <a
          href="#" // Tautan ini harus mengarah ke halaman detail kursus atau form pendaftaran
          className="inline-flex items-center font-semibold font-primary text-primary group-hover:text-accent transition-colors"
        >
          Lihat Selengkapnya
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

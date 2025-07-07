"use client";

import { motion } from "framer-motion";
import { BarChart4, BookX, Globe } from "lucide-react"; // Ikon yang lebih relevan

const problems = [
  {
    icon: BarChart4,
    title: "Kesenjangan Keterampilan (Skills Gap)",
    description:
      "Perubahan teknologi yang sangat cepat membuat banyak profesional dan lulusan baru kesulitan memiliki skill yang sesuai dengan kebutuhan industri saat ini.",
  },
  {
    icon: BookX,
    title: "Kurikulum Tidak Relevan",
    description:
      "Banyak program pendidikan yang masih menggunakan pendekatan lama dan tidak mengajarkan keterampilan yang langsung applicable di workplace modern.",
  },
  {
    icon: Globe,
    title: "Akses Pelatihan Terbatas",
    description:
      "Hambatan geografis dan biaya yang tidak terjangkau membuat kesempatan pengembangan skill digital berkualitas menjadi privilege yang tidak semua orang bisa akses.",
  },
];

// Varian animasi tetap sama, tidak perlu diubah

export default function ProblemSection() {
  return (
    <section id="problem-statement" className="py-xxl bg-secondary text-center">
      <div className="container">
        <h2 className="text-h2 font-primary text-text-primary">
          Menjawab Tantangan Era Digital
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-subheadline text-text-secondary">
          Kami menyadari bahwa ada gap besar antara kebutuhan industri dengan
          keterampilan yang tersedia. Kami hadir untuk menjembatani kesenjangan
          ini.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-lg">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-lg rounded-lg shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
            >
              <problem.icon className="h-12 w-12 text-primary mx-auto" />
              <h4 className="mt-md text-h4 font-primary text-text-primary">
                {problem.title}
              </h4>
              <p className="mt-2 text-body">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

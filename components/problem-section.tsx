"use client";

import { motion } from "framer-motion";
import { BarChart4, BookX, Globe } from "lucide-react"; // Ikon yang lebih relevan

const problems = [
  {
    icon: BarChart4,
    title: "Kesenjangan Keterampilan (Skills Gap)",
    description:
      "Lulusan baru dan profesional kesulitan mengejar kecepatan perubahan teknologi yang dibutuhkan industri.",
  },
  {
    icon: BookX,
    title: "Kurikulum Tidak Relevan",
    description:
      "Banyak lembaga pendidikan yang teoritis dan tidak mengajarkan keterampilan praktis yang siap pakai di dunia kerja.",
  },
  {
    icon: Globe,
    title: "Akses Pelatihan Terbatas",
    description:
      "Keterbatasan geografis dan biaya menjadi penghalang untuk mendapatkan pendidikan digital berkualitas.",
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
          Kami memahami rintangan yang Anda hadapi. Itulah mengapa kami ada
          untuk memberikan solusi nyata.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="bg-white p-lg rounded-lg shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
            >
              <problem.icon className="h-12 w-12 text-primary mx-auto" />
              <h4 className="mt-md text-h4 font-primary text-text-primary">
                {problem.title}
              </h4>
              <p className="mt-2 text-body">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

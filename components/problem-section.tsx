"use client";
import { motion } from "framer-motion";
import { Briefcase, Clock, Zap } from "lucide-react";
const problems = [
  {
    icon: Briefcase,
    title: "Kurikulum Tidak Relevan",
    description:
      "Materi pembelajaran yang usang dan tidak sesuai dengan kebutuhan industri digital saat ini.",
  },
  {
    icon: Clock,
    title: "Jadwal Tidak Fleksibel",
    description:
      "Kesulitan menyeimbangkan antara pekerjaan, kehidupan pribadi, dan waktu untuk belajar hal baru.",
  },
  {
    icon: Zap,
    title: "Keterampilan Stagnan",
    description:
      "Merasa tertinggal karena teknologi berkembang pesat sementara keahlian Anda tidak.",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};
export default function ProblemSection() {
  return (
    <section id="problem-statement" className="py-xxl bg-secondary text-center">
      <div className="container">
        <h2 className="text-h2 font-primary text-text-primary">
          Tantangan Karir di Era Digital
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-subheadline text-text-secondary">
          Banyak profesional berbakat merasa kesulitan untuk tetap relevan.
          Apakah ini terdengar familiar?
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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

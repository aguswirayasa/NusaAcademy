"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    tagline: "Kurikulum Terdepan",
    title: "Belajar Langsung dari Praktisi Ahli",
    description:
      "Setiap kursus dirancang dan diajarkan oleh para profesional yang aktif bekerja di bidangnya, memastikan Anda mendapatkan pengetahuan yang paling relevan dan terapan.",
    imageUrl: "/section1.webp",
    imageSide: "right",
  },
  {
    tagline: "Pembelajaran Fleksibel",
    title: "Atur Sendiri Ritme Belajar Anda",
    description:
      "Akses materi kapan saja dan di mana saja. Sistem kami dirancang untuk mendukung gaya hidup sibuk Anda, bukan sebaliknya.",
    imageUrl: "/section2.webp",
    imageSide: "left",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution-showcase" className="py-xxl">
      <div className="container">
        {features.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center not-last:mb-20"
          >
            <motion.div
              className={
                feature.imageSide === "left" ? "md:order-2" : "md:order-1"
              }
              initial={{
                opacity: 0,
                x: feature.imageSide === "left" ? 100 : -100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="font-bold text-accent">{feature.tagline}</p>
              <h3 className="mt-2 text-h3 font-primary text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-4 text-body">{feature.description}</p>
            </motion.div>

            <motion.div
              className={
                feature.imageSide === "left" ? "md:order-1" : "md:order-2"
              }
              initial={{
                opacity: 0,
                x: feature.imageSide === "left" ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

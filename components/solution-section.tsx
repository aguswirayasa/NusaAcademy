"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2 } from "lucide-react";

// --- Data Structures ---
const mentors = [
  {
    name: "Aria Wijaya",
    jobTitle: "Digital Marketing Expert",
    mentoringClass: "Kelas Strategi Pemasaran Media Sosial",
    imageUrl: "/section1.webp",
  },
  {
    name: "Budi Santoso",
    jobTitle: "Senior Frontend Engineer",
    mentoringClass: "Kelas Pengembangan Web Modern",
    imageUrl: "/images/placeholder-mentor-2.webp",
  },
  {
    name: "Siti Nurhaliza",
    jobTitle: "Creative Designer",
    mentoringClass: "Kelas Desain Grafis dengan Canva",
    imageUrl: "/images/placeholder-mentor-3.webp",
  },
];

const flexibleFeatures = [
  "Akses materi kapan saja dan di mana saja, tanpa batasan.",
  "Pilih waktu belajar yang paling sesuai dengan ritme hidup Kamu.",
  "Sistem kami dirancang untuk mendukung cara belajar kamu, bukan sebaliknya.",
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SolutionSection() {
  return (
    <section id="solution-showcase" className="py-xxl overflow-hidden">
      <div className="container flex flex-col gap-28 md:gap-40">
        {/* === FEATURE 1: PRAKTISI AHLI === */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Text Content */}
          <div className="md:order-1">
            <p className="font-bold text-accent">Kurikulum Terdepan</p>
            <h3 className="mt-2 text-h3 font-primary text-text-primary">
              Belajar Langsung dari Praktisi Ahli
            </h3>
            <p className="mt-4 text-body text-text-secondary">
              Setiap kursus dirancang dan diajarkan oleh para profesional yang
              aktif bekerja di bidangnya, memastikan kamu mendapatkan
              pengetahuan yang paling relevan dan terapan.
            </p>
          </div>

          {/* Carousel */}
          <div className="md:order-2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {mentors.map((mentor, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={mentor.imageUrl}
                        alt={`Foto ${mentor.name}`}
                        width={576}
                        height={576}
                        className="w-full relative  object-cover "
                      />
                      <div className="p-6 bg-accent w-full opacity-70 absolute bottom-0">
                        <h4 className="font-primary text-h4 text-text-primary">
                          {mentor.name}
                        </h4>
                        <p className="text-sm text-text-secondary mt-1">
                          {mentor.jobTitle}
                        </p>
                        <p className="text-sm font-semibold text-primary mt-2">
                          Mentor {mentor.mentoringClass}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:inline-flex" />
              <CarouselNext className="hidden sm:inline-flex" />
            </Carousel>
          </div>
        </motion.div>

        {/* === FEATURE 2: RITME BELAJAR === */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Text Content */}
          <div className="md:order-2">
            <p className="font-bold text-accent">Pembelajaran Fleksibel</p>
            <h3 className="mt-2 text-h3 font-primary text-text-primary">
              Atur Sendiri Ritme Belajar Kamu
            </h3>
            <ul className="mt-6 space-y-4">
              {flexibleFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-6 w-6 text-accent flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span className="text-body text-text-secondary">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="md:order-1">
            <Image
              src="/section2.webp"
              alt="Atur sendiri ritme belajar Anda"
              width={576}
              height={576}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

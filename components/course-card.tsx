"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CourseCardProps = {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
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
}: CourseCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group flex flex-col bg-white rounded-lg shadow-md border border-border overflow-hidden transition-all duration-300 ease-out hover:shadow-lg"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-lg flex flex-col flex-grow">
        <p className="text-sm font-semibold text-primary mb-2">{category}</p>
        <h4 className="text-h4 font-primary text-text-primary flex-grow">
          {title}
        </h4>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      </div>
      <div className="p-lg pt-0 mt-auto">
        <a
          href="#"
          className="inline-flex items-center font-semibold font-primary text-primary group-hover:text-accent transition-colors"
        >
          Pelajari Lebih Lanjut
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

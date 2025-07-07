"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Aria Wijaya",
    title: "Software Engineer, Tech Startup",
    quote:
      "Materi di Nusa Academy benar-benar mengubah cara saya memandang pengembangan produk. Sangat relevan dan langsung bisa diterapkan di pekerjaan.",
    avatar: "/testimonial1.webp",
  },
  {
    name: "Siti Nurhaliza",
    title: "UI/UX Designer, E-commerce",
    quote:
      "Fleksibilitas waktu belajar adalah kunci bagi saya. Saya bisa meningkatkan skill tanpa harus mengorbankan pekerjaan utama saya. Luar biasa!",
    avatar: "/testimonial2.webp",
  },
  {
    name: "Budi Santoso",
    title: "Product Manager",
    quote:
      "Dari tidak tahu apa-apa tentang AI, sekarang saya bisa memimpin tim teknis dengan lebih percaya diri. Terima kasih Nusa Academy!",
    avatar: "/testimonial3.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-xxl bg-primary text-white">
      <div className="container">
        <h2 className="text-h2 font-primary text-center">
          Pengalaman Para Peserta Kami
        </h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          // Meningkatkan max-width agar carousel terlihat lebih besar
          className="w-full max-w-5xl mx-auto mt-12 relative"
        >
          <CarouselContent className="-ml-6">
            {" "}
            {/* Menyesuaikan margin untuk item */}
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full md:basis-1/2"
              >
                {" "}
                {/* Padding item dan lebar responsif */}
                <div className="p-1 h-full">
                  {" "}
                  {/* Padding kecil untuk border radius visual */}
                  <div className="bg-white/10 p-lg rounded-lg h-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 shadow-md">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={96} // Ukuran avatar sedikit lebih besar
                        height={96}
                        className="rounded-full border-4 border-accent object-cover h-24 w-24"
                      />
                    </div>
                    <div className="flex-1">
                      {/* Ukuran kutipan lebih besar dan warna putih penuh */}
                      <blockquote className="text-xl italic text-white leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="mt-4 block font-bold not-italic">
                        {testimonial.name}
                      </cite>
                      {/* Warna text title slightly lighter */}
                      <p className="text-sm text-white/80">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Tombol navigasi lebih kontras dan menonjol */}
          <CarouselPrevious className="left-[-20px] md:left-[-50px] bg-white text-primary hover:bg-gray-100 border-none shadow-md" />
          <CarouselNext className="right-[-20px] md:right-[-50px] bg-white text-primary hover:bg-gray-100 border-none shadow-md" />
        </Carousel>
      </div>
    </section>
  );
}

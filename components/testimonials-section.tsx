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
          Apa Kata Alumni Kami
        </h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="bg-white/10 p-lg rounded-lg h-full flex flex-row items-center text-left gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-accent"
                      />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg italic text-slate-200">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="mt-4 block font-bold not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm text-slate-300">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px] bg-white/20 text-white hover:bg-white/30 border-none" />
          <CarouselNext className="right-[-50px] bg-white/20 text-white hover:bg-white/30 border-none" />
        </Carousel>
      </div>
    </section>
  );
}

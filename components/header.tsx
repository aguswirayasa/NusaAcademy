"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

const navLinks = [
  { href: "#problem-statement", label: "Masalah" },
  { href: "#solution-showcase", label: "Solusi" },
  { href: "#courses", label: "Kursus" },
  { href: "#testimonials", label: "Testimoni" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled && "bg-white/85 backdrop-blur-lg shadow-sm"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="flex justify-center items-center">
            <Image
              src={"/logo.png"}
              alt="nusa academy"
              width={50}
              height={50}
            />

            <h1 className="text-2xl font-bold font-primary text-primary">
              NusaAcademy
            </h1>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-800 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="secondary">Masuk</Button>
          <Button variant="primary">Daftar Gratis</Button>
        </div>
      </div>
    </header>
  );
}

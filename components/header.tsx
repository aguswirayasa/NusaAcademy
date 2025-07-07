"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Hook baru untuk deteksi halaman
import { cn } from "@/lib/utils";
import { Button } from "./ui/button"; // Path diperbaiki

const navLinks = [
  { href: "/#problem-statement", label: "Masalah" },
  { href: "/#solution-showcase", label: "Solusi" },
  { href: "/#courses", label: "Kursus" },
  { href: "/#testimonials", label: "Testimoni" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Mendeteksi path saat ini, e.g., "/", "/login"
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk menangani klik pada link navigasi
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isHomePage) {
      e.preventDefault();
      const targetId = href.substring(2); // Menghapus "/#"
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset 80px untuk tinggi header
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled && "bg-white/85 backdrop-blur-lg shadow-sm"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="nusa academy"
            width={40} // Ukuran sedikit disesuaikan agar lebih proporsional
            height={40}
          />
          <span className="text-2xl font-bold font-primary text-primary hidden sm:inline">
            NusaAcademy
          </span>
        </Link>

        {/* Hanya tampilkan Navigasi jika di Halaman Utama */}
        {isHomePage && (
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-800 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="hidden md:flex items-center gap-2">
          {/* Tombol Masuk sekarang mengarah ke /login */}
          <Link href="/login">
            <Button variant="secondary">Masuk</Button>
          </Link>
          {/* Tombol Daftar sekarang mengarah ke /register */}
          <Link href="/register">
            <Button variant="primary">Daftar Gratis</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

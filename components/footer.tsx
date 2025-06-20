import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  produk: [
    { href: "#", label: "Semua Kursus" },
    { href: "#", label: "Alur Belajar" },
    { href: "#", label: "Untuk Bisnis" },
  ],
  perusahaan: [
    { href: "#", label: "Tentang Kami" },
    { href: "#", label: "Karir" },
    { href: "#", label: "Blog" },
  ],
  dukungan: [
    { href: "#", label: "Pusat Bantuan" },
    { href: "#", label: "Hubungi Kami" },
    { href: "#", label: "FAQ" },
  ],
};

const socialLinks = [
  { href: "#", icon: Twitter },
  { href: "#", icon: Github },
  { href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-xl text-center md:text-left">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold font-primary text-primary">
              NusaAcademy
            </h4>
            <p className="mt-2 text-sm text-text-secondary max-w-xs mx-auto md:mx-0">
              Platform untuk meningkatkan keahlian digital dan mencapai potensi
              karir tertinggi.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">Social Media</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Produk */}
          <div>
            <h5 className="font-semibold font-primary text-text-primary mb-4">
              Produk
            </h5>
            <ul className="space-y-3">
              {footerLinks.produk.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Perusahaan */}
          <div>
            <h5 className="font-semibold font-primary text-text-primary mb-4">
              Perusahaan
            </h5>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dukungan */}
          <div>
            <h5 className="font-semibold font-primary text-text-primary mb-4">
              Dukungan
            </h5>
            <ul className="space-y-3">
              {footerLinks.dukungan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-lg border-t border-border">
          <p className="text-center text-sm text-text-secondary">
            © {new Date().getFullYear()} Nusa Academy. Seluruh hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

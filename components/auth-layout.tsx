import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Kolom Form */}
      <div className="flex items-center justify-center p-8 lg:p-12">
        {children}
      </div>

      {/* Kolom Branding (Tersembunyi di mobile) */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-primary text-white p-12">
        <Link href="/">
          <Image
            src="/logo.png" // Anda perlu membuat logo versi putih
            alt="Nusa Academy Logo"
            width={80}
            height={80}
          />
        </Link>
        <blockquote className="mt-12 text-center">
          <p className="text-3xl font-primary font-semibold">
            "Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk
            mengubah dunia."
          </p>
          <footer className="mt-4 text-lg text-slate-300">
            - Nelson Mandela
          </footer>
        </blockquote>
      </div>
    </main>
  );
}

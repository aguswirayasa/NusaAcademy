import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

export default function DashboardLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Header Dalam Aplikasi */}
      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Nusa Academy Logo"
                width={32}
                height={32}
              />
            </Link>
            <h1 className="text-xl font-semibold text-text-primary hidden md:block">
              {pageTitle}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="primary" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifikasi</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profil</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="container py-8 lg:py-12">{children}</main>
    </div>
  );
}

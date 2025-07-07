import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-primary",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Nusa Academy",
  description: "Platform belajar online untuk masa depan.",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={cn(
          "bg-background font-secondary text-foreground antialiased overflow-x-hidden",
          plusJakartaSans.variable,
          inter.variable
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

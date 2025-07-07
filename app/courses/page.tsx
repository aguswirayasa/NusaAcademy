import Link from "next/link";
import { COURSES_DATA } from "@/lib/data";
import CourseCard from "@/components/course-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CoursesPage() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <header className="bg-secondary py-12">
          <div className="container text-center">
            <h1 className="text-h1 font-primary text-text-primary">
              Katalog Kursus
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-subheadline text-text-secondary">
              Temukan kursus yang tepat untuk meningkatkan keahlianmu.
            </p>
            <div className="mt-8 max-w-lg mx-auto relative">
              <Input
                type="search"
                placeholder="Cari kursus, misalnya 'Pemasaran'..."
                className="h-14 pl-12 text-base bg-white"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-text-secondary/70" />
            </div>
          </div>
        </header>

        <main className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {COURSES_DATA.map((course) => (
              // CourseCard sekarang harus dibungkus Link
              <Link key={course.slug} href={`/courses/${course.slug}`}>
                <CourseCard {...course} />
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

import { getCourseBySlug, Course } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, BarChart3, Award, PlayCircle } from "lucide-react";

// Fungsi untuk menangani metadata halaman dinamis
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);
  if (!course) {
    return { title: "Kursus Tidak Ditemukan" };
  }
  return {
    title: `${course.title} | Nusa Academy`,
    description: course.description,
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);

  // Jika kursus tidak ditemukan, tampilkan halaman 404
  if (!course) {
    notFound();
  }

  return (
    <div className="bg-secondary">
      {/* Course Hero */}
      <header className="py-12 lg:py-20 text-text-primary">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="font-semibold text-primary">{course.category}</p>
            <h1 className="mt-2 text-h1 font-primary">{course.title}</h1>
            <p className="mt-4 text-subheadline text-text-secondary">
              {course.description}
            </p>
            <p className="mt-4 text-sm">
              Dibuat oleh{" "}
              <span className="font-semibold text-primary">
                {course.instructor.name}
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Kolom Kiri: Detail Kurikulum */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-border">
            <h2 className="text-h3 font-primary">Kurikulum Kursus</h2>
            <Accordion type="single" collapsible className="w-full mt-4">
              {course.modules.map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pl-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lessonIndex}
                          className="flex items-center gap-3"
                        >
                          <PlayCircle className="h-5 w-5 text-text-secondary" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Kolom Kanan: Info & CTA (Sticky) */}
          <aside className="lg:sticky top-24 h-fit">
            <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={720}
                height={405}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 space-y-4">
                <p className="text-3xl text-center font-bold font-primary text-text-primary">
                  Rp199.000{" "}
                </p>
                <Button size="lg" className="w-full h-12 text-lg">
                  Daftar
                </Button>
                <ul className="space-y-3 pt-4 text-sm">
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />{" "}
                    <span>Durasi: {course.duration}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />{" "}
                    <span>Level: {course.level}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />{" "}
                    <span>Sertifikat Kelulusan</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

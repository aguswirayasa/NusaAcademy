import { getCourseBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DashboardLayout from "@/components/dashboard-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CoursePlayerPage({
  params,
}: {
  params: { courseSlug: string; lessonId: string };
}) {
  const course = getCourseBySlug(params.courseSlug);

  if (!course) notFound();

  // Mem-parsing lessonId (e.g., "1-2" -> module 1, lesson 2)
  const [currentModuleIndex, currentLessonIndex] = params.lessonId
    .split("-")
    .map(Number);
  const currentModule = course.modules[currentModuleIndex];
  const currentLesson = currentModule?.lessons[currentLessonIndex];

  if (!currentLesson) notFound();

  // Kalkulasi untuk navigasi
  const totalLessonsInModule = currentModule.lessons.length;
  const isFirstLesson = currentModuleIndex === 0 && currentLessonIndex === 0;
  const isLastLesson =
    currentModuleIndex === course.modules.length - 1 &&
    currentLessonIndex === totalLessonsInModule - 1;

  let prevLessonLink = `/learn/${params.courseSlug}/${currentModuleIndex}-${
    currentLessonIndex - 1
  }`;
  if (currentLessonIndex === 0 && currentModuleIndex > 0) {
    const prevModule = course.modules[currentModuleIndex - 1];
    prevLessonLink = `/learn/${params.courseSlug}/${currentModuleIndex - 1}-${
      prevModule.lessons.length - 1
    }`;
  }

  let nextLessonLink = `/learn/${params.courseSlug}/${currentModuleIndex}-${
    currentLessonIndex + 1
  }`;
  if (
    currentLessonIndex === totalLessonsInModule - 1 &&
    currentModuleIndex < course.modules.length - 1
  ) {
    nextLessonLink = `/learn/${params.courseSlug}/${currentModuleIndex + 1}-0`;
  }

  return (
    <DashboardLayout pageTitle={course.title}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Konten Utama */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-border p-6">
          <h2 className="text-h3 font-primary">{currentLesson}</h2>

          {/* Placeholder Video */}
          <div className="aspect-video bg-slate-900 rounded-md mt-4 flex items-center justify-center">
            <Image
              src="/video-placeholder.jpg" // Gambar pengganti video
              alt="Video Placeholder"
              width={1280}
              height={720}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <p className="mt-6 text-body">
            Ini adalah deskripsi untuk pelajaran "{currentLesson}". Di sini akan
            dijelaskan secara rinci mengenai materi yang sedang dibahas dalam
            video, termasuk poin-poin penting, contoh kode, atau tautan ke
            sumber daya eksternal.
          </p>

          {/* Navigasi Bawah */}
          <div className="flex justify-between mt-8 border-t pt-4">
            <Button variant="outline" disabled={isFirstLesson}>
              <Link href={prevLessonLink} className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-2" /> Pelajaran Sebelumnya
              </Link>
            </Button>
            <Button disabled={isLastLesson}>
              <Link href={nextLessonLink} className="flex items-center">
                Pelajaran Berikutnya <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Sidebar Navigasi Kursus */}
        <aside className="lg:col-span-1 h-fit lg:sticky top-24">
          <div className="bg-white rounded-lg shadow-sm border border-border p-4">
            <h3 className="text-lg font-bold font-primary mb-2">
              Daftar Materi
            </h3>
            <Accordion
              type="multiple"
              defaultValue={[`item-${currentModuleIndex}`]}
              className="w-full"
            >
              {course.modules.map((module, moduleIndex) => (
                <AccordionItem key={moduleIndex} value={`item-${moduleIndex}`}>
                  <AccordionTrigger>{module.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const isActive =
                          moduleIndex === currentModuleIndex &&
                          lessonIndex === currentLessonIndex;
                        return (
                          <li key={lessonIndex}>
                            <Link
                              href={`/learn/${course.slug}/${moduleIndex}-${lessonIndex}`}
                              className={cn(
                                "flex items-center gap-3 p-2 rounded-md transition-colors w-full text-left",
                                isActive
                                  ? "bg-primary/10 text-primary font-semibold"
                                  : "hover:bg-slate-100"
                              )}
                            >
                              {isActive ? (
                                <CheckCircle className="h-5 w-5" />
                              ) : (
                                <PlayCircle className="h-5 w-5 text-slate-500" />
                              )}
                              <span>{lesson}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}

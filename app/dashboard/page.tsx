import Link from "next/link";
import Image from "next/image";
import { COURSES_DATA } from "@/lib/data";
import DashboardLayout from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/progress-bar";

// Data mock untuk dasbor
const enrolledCourses = [
  { courseSlug: "dasar-pengembangan-web-modern", progress: 65 },
  { courseSlug: "strategi-pemasaran-media-sosial", progress: 20 },
];

const EnrolledCourseCard = ({
  courseSlug,
  progress,
}: {
  courseSlug: string;
  progress: number;
}) => {
  const course = COURSES_DATA.find((c) => c.slug === courseSlug);
  if (!course) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden flex flex-col md:flex-row gap-6 p-4">
      <Image
        src={course.imageUrl}
        alt={course.title}
        width={320}
        height={180}
        className="rounded-md object-cover md:w-1/4"
      />
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">
            {course.category}
          </p>
          <h3 className="text-xl font-bold font-primary mt-1">
            {course.title}
          </h3>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar value={progress} />
        </div>
        <div className="mt-4">
          <Link href={`/learn/${course.slug}/0-0`}>
            {" "}
            {/* Link ke pelajaran pertama */}
            <Button>Lanjutkan Belajar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Dasbor Saya">
      <div className="space-y-8">
        <div>
          <h2 className="text-h2 font-primary text-text-primary">
            Selamat Datang, Aria!
          </h2>
          <p className="mt-2 text-subheadline text-text-secondary">
            Siap untuk melanjutkan pembelajaranmu hari ini?
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold font-primary">Kursus Saya</h3>
          {enrolledCourses.map((enrolled) => (
            <EnrolledCourseCard key={enrolled.courseSlug} {...enrolled} />
          ))}
        </section>
      </div>
    </DashboardLayout>
  );
}

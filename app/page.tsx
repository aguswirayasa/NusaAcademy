import CourseSection from "@/components/course-section";
import FinalCtaSection from "@/components/final-cta-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CourseSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </>
  );
}

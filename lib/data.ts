export type Course = {
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  studentsEnrolled: number;
  price: string;
  level: "Pemula" | "Menengah" | "Semua Level";
  duration: string;
  instructor: {
    name: string;
    title: string;
  };
  modules: {
    title: string;
    lessons: string[];
  }[];
};

export const COURSES_DATA: Course[] = [
  {
    slug: "strategi-pemasaran-media-sosial",
    imageUrl: "/course1.webp",
    category: "Pemasaran Digital",
    title: "Strategi Pemasaran Media Sosial untuk Bisnis",
    description:
      "Cocok banget buat kamu yang punya bisnis atau kerja di marketing dan pengen boost engagement serta penjualan lewat media sosial. Dijamin lebih paham cara bikin konten yang viral!",
    level: "Pemula",
    duration: "6 Jam Video",
    studentsEnrolled: 566,
    price: "Rp.199.000",
    instructor: {
      name: "Aria Wijaya",
      title: "Digital Marketing Expert",
    },
    modules: [
      {
        title: "Modul 1: Fondasi Pemasaran Digital",
        lessons: [
          "Memahami Ekosistem Digital",
          "Cara Jitu Tentukan Target Audiens",
        ],
      },
      {
        title: "Modul 2: Strategi Konten Instagram & Facebook",
        lessons: [
          "Rahasia Bikin Konten yang Engaging",
          "Timing Posting yang Tepat",
        ],
      },
    ],
  },
  {
    slug: "dasar-pengembangan-web-modern",
    imageUrl: "/course2.png",
    category: "Pengembangan Teknologi",
    title: "Dasar-Dasar Pengembangan Web Modern",
    description:
      "Mau jadi web developer tapi bingung mulai dari mana? Kelas ini perfect buat kamu yang pengen belajar bikin website keren dari nol pakai HTML, CSS, dan JavaScript.",
    level: "Pemula",
    duration: "10 Jam Video",
    studentsEnrolled: 900,
    price: "Rp.299.000",
    instructor: {
      name: "Budi Santoso",
      title: "Senior Frontend Engineer",
    },
    modules: [
      {
        title: "Modul 1: Pengenalan HTML5",
        lessons: [
          "Membangun Struktur Web yang Solid",
          "Mengenal Elemen Semantik Modern",
        ],
      },
      {
        title: "Modul 2: Styling dengan CSS3",
        lessons: [
          "Master Flexbox & Grid Layout",
          "Bikin Website Responsif yang Kece",
        ],
      },
      {
        title: "Modul 3: Interaktivitas dengan JavaScript",
        lessons: [
          "Dasar-Dasar JavaScript yang Wajib Tahu",
          "Cara Manipulasi Elemen Web",
        ],
      },
    ],
  },
  {
    slug: "desain-grafis-praktis-dengan-canva",
    imageUrl: "/course3.webp",
    category: "Kreativitas & Desain",
    title: "Desain Grafis Praktis dengan Canva",
    description:
      "Gak perlu jago Photoshop! Belajar bikin desain profesional pakai Canva aja. Cocok buat mahasiswa, pekerja kantoran, atau siapa aja yang butuh bikin visual menarik dengan cepat.",
    level: "Semua Level",
    duration: "4 Jam Video",
    studentsEnrolled: 1069,
    price: "Rp.99.000",
    instructor: {
      name: "Siti Nurhaliza",
      title: "Creative Designer",
    },
    modules: [
      {
        title: "Modul 1: Mengenal Antarmuka Canva",
        lessons: ["Keliling Fitur-Fitur Canva", "Tips Kelola Aset Desain"],
      },
      {
        title: "Modul 2: Membuat Desain untuk Media Sosial",
        lessons: [
          "Bikin Post Instagram yang Eye-Catching",
          "Design Facebook Cover yang Wow",
        ],
      },
    ],
  },
];

// Data untuk Carousel Mentor
export const mentors = [
  {
    name: "Dr. Budi Santoso",
    jobTitle: "Lead Data Scientist, TechCorp",
    mentoringClass: "Kelas Machine Learning",
    imageUrl: "/section1.webp", // Menggunakan gambar yang ada
  },
  {
    name: "Rina Hartono",
    jobTitle: "Principal UX Designer, KreatifHub",
    mentoringClass: "Kelas Desain Produk Digital",
    imageUrl: "/images/mentor2.jpg", // Placeholder untuk mentor kedua
  },
  {
    name: "Agung Wicaksono",
    jobTitle: "Senior DevOps Engineer, CloudNest",
    mentoringClass: "Kelas Automasi Cloud",
    imageUrl: "/images/mentor3.jpg", // Placeholder untuk mentor ketiga
  },
];

// Data untuk poin-poin fitur fleksibel
export const flexibleFeatures = [
  "Akses materi kapan saja dan di mana saja, tanpa batasan.",
  "Pilih waktu belajar yang paling sesuai dengan ritme hidup Anda.",
  "Sistem kami dirancang untuk mendukung gaya hidup sibuk, bukan sebaliknya.",
];

// Utility function untuk mengambil data kursus berdasarkan slug
export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES_DATA.find((course) => course.slug === slug);
}

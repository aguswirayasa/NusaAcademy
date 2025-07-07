"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-xxl text-center">
      <div className="container">
        <div>
          <h2 className="text-h2 font-primary text-text-primary">
            Siap Mengambil Langkah Berikutnya?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-subheadline text-text-secondary">
            Bergabunglah dengan ribuan profesional lainnya yang telah mengubah
            karir mereka bersama kami. Pendaftaran gratis dan hanya butuh 2
            menit.
          </p>
          <div className="mt-xl">
            <div>
              <Button size="lg" variant="primary">
                Daftar Sekarang, Gratis!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

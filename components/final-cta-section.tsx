"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-xxl text-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-primary text-text-primary">
            Siap Mengambil Langkah Berikutnya?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-subheadline text-text-secondary">
            Bergabunglah dengan ribuan profesional lainnya yang telah mengubah
            karir mereka bersama kami. Pendaftaran gratis dan hanya butuh 2
            menit.
          </p>
          <div className="mt-xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button size="lg" variant="primary">
                Daftar Sekarang, Gratis!
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

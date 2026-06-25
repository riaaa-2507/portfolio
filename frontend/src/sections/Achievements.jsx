import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/content";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-36 overflow-hidden" data-testid="achievements-section">
      <div className="blob w-[480px] h-[480px] bg-[#FFD6A5]/45 -left-20 top-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <div className="section-label mb-4">05 — Milestones</div>
          <h2 className="font-display font-black tracking-tighter leading-[0.95] text-[#1F1B16] text-5xl md:text-6xl">
            Achievements & <span className="font-serif-italic font-normal text-gradient-warm">Experiences</span>
          </h2>
          <p className="mt-5 text-[#5C5247] text-base md:text-lg font-light">
            Numbers don&apos;t tell the whole story — but they hint at the rhythm of showing up, again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 md:p-6 group hover:border-[#F76C5E]/30 transition-colors"
              data-testid={`achievement-${i}`}
            >
              <div className="font-display font-black text-4xl md:text-5xl text-gradient-warm leading-none mb-2 tracking-tight">
                {a.number}
              </div>
              <div className="text-xs md:text-sm text-[#5C5247] leading-tight font-medium">
                {a.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

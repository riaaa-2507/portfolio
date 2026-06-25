import React from "react";
import { motion } from "framer-motion";
import { VISION } from "@/content";

export default function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-40 overflow-hidden" data-testid="vision-section">
      <div className="blob w-[500px] h-[500px] bg-[#C44569]/25 top-10 -left-20" />
      <div className="blob w-[420px] h-[420px] bg-[#F4A261]/20 bottom-0 right-0" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="section-label mb-5"
        >
          01 — The Why
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display font-black tracking-tighter leading-[0.95] text-white text-5xl md:text-6xl lg:text-7xl"
        >
          {VISION.title.split(" ")[0]}{" "}
          <span className="font-serif-italic font-normal">{VISION.title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-2xl md:text-3xl font-display font-light text-white/85 leading-snug max-w-4xl"
        >
          {VISION.lead}
        </motion.p>

        <div className="mt-14 grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6">
            {VISION.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-base md:text-lg text-white/65 leading-relaxed font-light"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {VISION.pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 hover:border-[#FF6B6B]/40 transition-colors group cursor-default"
                data-testid={`vision-pillar-${p.label.toLowerCase()}`}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#F4A261] font-semibold mb-2">
                  Pillar
                </div>
                <div className="font-display font-bold text-xl text-white mb-1.5 group-hover:text-gradient-warm transition-colors">
                  {p.label}
                </div>
                <div className="text-sm text-white/55 leading-relaxed">{p.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

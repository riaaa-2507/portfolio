import React from "react";
import { motion } from "framer-motion";
import { VISION } from "@/content";

export default function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-40 overflow-hidden" data-testid="vision-section">
      <div className="blob w-[500px] h-[500px] bg-[#FFD6A5]/50 top-10 -left-20" />
      <div className="blob w-[420px] h-[420px] bg-[#CDEAC0]/45 bottom-0 right-0" />

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
          className="font-display font-black tracking-tighter leading-[0.95] text-[#1F1B16] text-5xl md:text-6xl lg:text-7xl"
        >
          {VISION.title.split(" ")[0]}{" "}
          <span className="font-serif-italic font-normal text-gradient-warm">
            {VISION.title.split(" ").slice(1).join(" ")}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-2xl md:text-3xl font-display font-light text-[#2A2520] leading-snug max-w-4xl"
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
                className="text-base md:text-lg text-[#5C5247] leading-relaxed font-light"
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
                className="glass rounded-2xl p-5 hover:border-[#F76C5E]/40 transition-colors group cursor-default"
                data-testid={`vision-pillar-${p.label.toLowerCase()}`}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#E8A53A] font-semibold mb-2">
                  Pillar
                </div>
                <div className="font-display font-bold text-xl text-[#1F1B16] mb-1.5 group-hover:text-gradient-warm transition-colors">
                  {p.label}
                </div>
                <div className="text-sm text-[#6B6357] leading-relaxed">{p.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Code2, BarChart3, Cpu, Heart } from "lucide-react";
import { SKILLS } from "@/content";

const META = {
  Programming: { icon: Code2, accent: "from-[#FF6B6B] to-[#C44569]" },
  Data: { icon: BarChart3, accent: "from-[#F4A261] to-[#FF6B6B]" },
  Technology: { icon: Cpu, accent: "from-[#7D3C98] to-[#C44569]" },
  "Soft Skills": { icon: Heart, accent: "from-[#2A9D8F] to-[#7D3C98]" },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40 overflow-hidden" data-testid="skills-section">
      <div className="blob w-[500px] h-[500px] bg-[#7D3C98]/20 top-1/4 -right-40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <div className="section-label mb-4">03 — The Toolkit</div>
          <h2 className="font-display font-black tracking-tighter leading-[0.95] text-white text-5xl md:text-6xl">
            Skills & <span className="font-serif-italic font-normal text-gradient-warm">Strengths</span>
          </h2>
          <p className="mt-5 text-white/55 text-base md:text-lg font-light">
            A growing toolkit — equal parts technical fluency and human craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(SKILLS).map(([cat, items], idx) => {
            const Icon = META[cat].icon;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.07 }}
                whileHover={{ y: -6 }}
                className="relative glass rounded-3xl p-6 overflow-hidden group transition-all hover:border-white/20"
                data-testid={`skill-card-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Accent gradient on hover */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${META[cat].accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div className={`inline-flex w-11 h-11 rounded-xl items-center justify-center bg-gradient-to-br ${META[cat].accent} shadow-lg mb-5`}>
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-1">{cat}</h3>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold mb-5">
                  {items.length} focus areas
                </div>

                <ul className="space-y-2.5">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2.5 text-sm text-white/75 group-hover:text-white transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#F4A261]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

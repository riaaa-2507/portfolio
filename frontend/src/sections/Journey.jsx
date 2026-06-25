import React from "react";
import { motion } from "framer-motion";
import { JOURNEY, SITE } from "@/content";

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 md:py-40 overflow-hidden" data-testid="journey-section">
      <div className="blob w-[420px] h-[420px] bg-[#BFE0F2]/40 top-1/4 -right-32" />
      <div className="blob w-[380px] h-[380px] bg-[#F6C6EA]/40 bottom-1/4 -left-20" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="section-label mb-4">02 — The Story</div>
            <h2 className="font-display font-black tracking-tighter leading-[0.95] text-[#1F1B16] text-5xl md:text-6xl">
              My <span className="font-serif-italic font-normal text-gradient-warm">Journey</span>
            </h2>
          </div>
          <p className="max-w-md text-[#5C5247] text-base md:text-lg font-light">
            From a single line of code to a clearer sense of purpose — every step shaped the next.
          </p>
        </div>

        {/* Campus visual — sets the academic, sunlit scene */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 md:mb-24 rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-[#1F1B16]/8 shadow-[0_24px_60px_-24px_rgba(247,108,94,0.25)] aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-[#FFD6A5]/30"
          data-testid="journey-campus-photo"
        >
          <img
            src={SITE.campusPhoto}
            alt="Riya on campus at Motilal Nehru College, University of Delhi"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "saturate(1.05) brightness(1.02)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass-strong rounded-2xl px-4 py-3 max-w-[88%] sm:max-w-sm">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[#E8A53A] font-semibold mb-1">
              On Campus
            </div>
            <div className="text-sm md:text-base font-display font-semibold text-[#1F1B16] leading-snug">
              Motilal Nehru College · University of Delhi
            </div>
            <div className="text-xs text-[#5C5247] mt-0.5 font-light">
              Where the next chapters are being written.
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F76C5E]/40 to-transparent" />

          <div className="space-y-12 md:space-y-20">
            {JOURNEY.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                  data-testid={`journey-item-${i}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#F76C5E] shadow-[0_0_20px_4px_rgba(247,108,94,0.35)] ring-4 ring-[#FBF7EF]" />
                  </div>

                  <div className={`${isLeft ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="font-display font-black text-5xl md:text-6xl text-gradient-warm leading-none">
                      {item.year}
                    </div>
                  </div>

                  <div className={`${isLeft ? "md:pl-10" : "md:pr-10 md:text-right"} mt-2 md:mt-0`}>
                    <div className="glass rounded-2xl p-6 hover:border-[#F76C5E]/30 transition-colors">
                      <h3 className="font-display font-bold text-xl md:text-2xl text-[#1F1B16] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#5C5247] leading-relaxed text-sm md:text-base font-light">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

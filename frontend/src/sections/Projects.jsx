import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/content";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="section-label mb-4">04 — Selected Work</div>
            <h2 className="font-display font-black tracking-tighter leading-[0.95] text-white text-5xl md:text-6xl">
              Featured <span className="font-serif-italic font-normal text-gradient-warm">Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-white/55 text-base md:text-lg font-light">
            Small things, made with care. Each one taught me something I now carry forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/10 flex flex-col transition-all hover:border-[#FF6B6B]/30"
              data-testid={`project-card-${i}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07050A] via-[#07050A]/40 to-transparent" />
                <div className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/85 font-semibold">
                  Project · 0{i + 1}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl text-white mb-2 flex items-start justify-between gap-3">
                  {p.title}
                  <ArrowUpRight size={18} className="text-white/40 group-hover:text-[#FF6B6B] group-hover:rotate-12 transition-all flex-shrink-0" />
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-light mb-4 flex-1">
                  {p.blurb}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.14em] text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-4 mb-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#F4A261] font-semibold mb-1.5">
                    Key Learning
                  </div>
                  <p className="text-sm text-white/70 italic leading-relaxed">&ldquo;{p.learnings}&rdquo;</p>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
                    data-testid={`project-${i}-github`}
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-xs text-[#FF6B6B] hover:text-[#F4A261] transition-colors font-semibold"
                    data-testid={`project-${i}-demo`}
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

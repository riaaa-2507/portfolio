import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, FileText, Instagram, Link as LinkIcon } from "lucide-react";
import { PROJECTS } from "@/content";

function linkMeta(url) {
  if (!url || url === "#" || url === "none") return null;
  if (url.includes("github.com")) return { label: "GitHub", Icon: Github };
  if (url.includes("docs.google.com")) return { label: "Document", Icon: FileText };
  if (url.includes("instagram.com")) return { label: "Published", Icon: Instagram };
  return { label: "Live Demo", Icon: ExternalLink };
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="section-label mb-4">04 — Selected Work</div>
            <h2 className="font-display font-black tracking-tighter leading-[0.95] text-[#1F1B16] text-5xl md:text-6xl">
              Featured <span className="font-serif-italic font-normal text-gradient-warm">Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-[#5C5247] text-base md:text-lg font-light">
            Small things, made with care. Each one taught me something I now carry forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden glass flex flex-col transition-all hover:border-[#F76C5E]/40 hover:shadow-[0_24px_50px_-20px_rgba(247,108,94,0.25)]"
              data-testid={`project-card-${i}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FFD6A5]/30">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: "saturate(1.05) brightness(1.02)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#1F1B16] font-semibold">
                  Project · 0{i + 1}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl text-[#1F1B16] mb-2 flex items-start justify-between gap-3">
                  {p.title}
                  <ArrowUpRight size={18} className="text-[#8A8276] group-hover:text-[#F76C5E] group-hover:rotate-12 transition-all flex-shrink-0" />
                </h3>
                <p className="text-sm text-[#5C5247] leading-relaxed font-light mb-4 flex-1">
                  {p.blurb}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.14em] text-[#3D3530] bg-[#1F1B16]/5 border border-[#1F1B16]/8 rounded-full px-2.5 py-1 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="border-t border-[#1F1B16]/8 pt-4 mb-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#E8A53A] font-semibold mb-1.5">
                    Key Learning
                  </div>
                  <p className="text-sm text-[#3D3530] italic leading-relaxed">&ldquo;{p.learnings}&rdquo;</p>
                </div>

                {(() => {
                  const a = linkMeta(p.github);
                  const b = linkMeta(p.demo);
                  if (!a && !b) {
                    return (
                      <div className="flex items-center gap-2 mt-auto" data-testid={`project-${i}-no-links`}>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8276] font-semibold flex items-center gap-1.5">
                          <LinkIcon size={12} /> Links coming soon
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div className="flex items-center gap-3 mt-auto flex-wrap">
                      {a && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center gap-1.5 text-xs text-[#3D3530] hover:text-[#1F1B16] transition-colors"
                          data-testid={`project-${i}-github`}
                        >
                          <a.Icon size={14} /> {a.label}
                        </a>
                      )}
                      {a && b && <span className="w-1 h-1 rounded-full bg-[#1F1B16]/20" />}
                      {b && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center gap-1.5 text-xs text-[#F76C5E] hover:text-[#E8A53A] transition-colors font-semibold"
                          data-testid={`project-${i}-demo`}
                        >
                          {b.label} <b.Icon size={12} />
                        </a>
                      )}
                    </div>
                  );
                })()}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

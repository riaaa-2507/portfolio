import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { CERTIFICATES, CERT_CATEGORIES } from "@/content";

export default function Certificates() {
  const [filter, setFilter] = React.useState("All");
  const [open, setOpen] = React.useState(null);

  const filtered = filter === "All" ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === filter);

  // Vary heights to create masonry feel via column-count
  return (
    <section id="certificates" className="relative py-28 md:py-40" data-testid="certificates-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="section-label mb-4">06 — Achievement Museum</div>
            <h2 className="font-display font-black tracking-tighter leading-[0.95] text-white text-5xl md:text-6xl">
              Certificate <span className="font-serif-italic font-normal text-gradient-warm">Gallery</span>
            </h2>
            <p className="mt-5 text-white/55 text-base md:text-lg font-light max-w-xl">
              A curated archive of learning — each one a small commitment kept.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" data-testid="cert-filters">
            {CERT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-testid={`cert-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-xs uppercase tracking-[0.18em] font-semibold rounded-full px-4 py-2 transition-all ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#FF6B6B] to-[#F4A261] text-[#07050A] shadow-lg shadow-[#FF6B6B]/30"
                    : "glass text-white/70 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:break-inside-avoid [&>*]:mb-5"
        >
          <AnimatePresence>
            {filtered.map((c, i) => (
              <motion.button
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                onClick={() => setOpen(c)}
                data-testid={`cert-card-${i}`}
                className="group w-full text-left glass rounded-2xl p-5 hover:border-[#FF6B6B]/40 transition-colors block"
                style={{
                  paddingBottom: ["1.5rem", "2.5rem", "1.75rem"][i % 3],
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B6B]/25 to-[#7D3C98]/25 border border-white/10 flex items-center justify-center">
                    <Award size={18} className="text-[#F4A261]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-semibold">
                    {c.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-gradient-warm transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed font-light">{c.org}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-white/50 font-medium">{c.date}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF6B6B] font-semibold group-hover:underline">
                    Preview →
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
            data-testid="cert-modal"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70"
                data-testid="cert-modal-close"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#F4A261] flex items-center justify-center mb-5 shadow-lg">
                <Award size={26} className="text-white" />
              </div>

              <div className="text-[10px] uppercase tracking-[0.22em] text-[#F4A261] font-semibold mb-2">
                {open.category}
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight mb-2">
                {open.title}
              </h3>
              <p className="text-white/65 leading-relaxed mb-5">{open.org}</p>

              <div className="flex items-center justify-between glass rounded-xl px-4 py-3 mb-5">
                <span className="text-xs uppercase tracking-[0.18em] text-white/50 font-semibold">
                  Completed
                </span>
                <span className="font-display font-semibold text-white">{open.date}</span>
              </div>

              <a
                href={open.verify}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary w-full justify-center"
                data-testid="cert-verify-link"
              >
                Verify Certificate <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

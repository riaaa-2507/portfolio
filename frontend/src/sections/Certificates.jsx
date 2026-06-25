import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { CERTIFICATES, CERT_CATEGORIES } from "@/content";

export default function Certificates() {
  const [filter, setFilter] = React.useState("All");
  const [open, setOpen] = React.useState(null);

  const filtered = filter === "All" ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === filter);

  return (
    <section id="certificates" className="relative py-28 md:py-40" data-testid="certificates-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="section-label mb-4">07 — Achievement Museum</div>
            <h2 className="font-display font-black tracking-tighter leading-[0.95] text-[#1F1B16] text-5xl md:text-6xl">
              Certificate <span className="font-serif-italic font-normal text-gradient-warm">Gallery</span>
            </h2>
            <p className="mt-5 text-[#5C5247] text-base md:text-lg font-light max-w-xl">
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
                    ? "bg-gradient-to-r from-[#F76C5E] to-[#E8A53A] text-white shadow-md shadow-[#F76C5E]/25"
                    : "glass text-[#5C5247] hover:text-[#1F1B16] hover:border-[#F76C5E]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="cert-empty-state">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
                style={{ borderStyle: "dashed", borderColor: "rgba(31,27,22,0.15)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#1F1B16]/5 border border-[#1F1B16]/8 flex items-center justify-center mb-4">
                  <Award size={18} className="text-[#8A8276]" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#A89E90] font-semibold mb-2">
                  Coming soon
                </div>
                <div className="font-display font-semibold text-[#5C5247] leading-snug">
                  A new chapter, waiting to be earned.
                </div>
                <p className="text-xs text-[#8A8276] mt-2 leading-relaxed">
                  Certificates will appear here as I complete them — each one a small commitment kept.
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
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
                  className="group w-full text-left glass rounded-2xl p-5 hover:border-[#F76C5E]/40 transition-colors block"
                  style={{
                    paddingBottom: ["1.5rem", "2.5rem", "1.75rem"][i % 3],
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD6A5] to-[#F6C6EA] border border-[#1F1B16]/5 flex items-center justify-center">
                      <Award size={18} className="text-[#E8A53A]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A8276] font-semibold">
                      {c.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#1F1B16] mb-1 group-hover:text-gradient-warm transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#6B6357] leading-relaxed font-light">{c.org}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1F1B16]/8">
                    <span className="text-xs text-[#7C7468] font-medium">{c.date}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#F76C5E] font-semibold group-hover:underline">
                      Preview →
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-[#1F1B16]/40 backdrop-blur-md flex items-center justify-center p-6"
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1F1B16]/5 hover:bg-[#1F1B16]/10 flex items-center justify-center text-[#5C5247]"
                data-testid="cert-modal-close"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F76C5E] to-[#E8A53A] flex items-center justify-center mb-5 shadow-lg">
                <Award size={26} className="text-white" />
              </div>

              <div className="text-[10px] uppercase tracking-[0.22em] text-[#E8A53A] font-semibold mb-2">
                {open.category}
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-[#1F1B16] tracking-tight mb-2">
                {open.title}
              </h3>
              <p className="text-[#5C5247] leading-relaxed mb-5">{open.org}</p>

              <div className="flex items-center justify-between glass rounded-xl px-4 py-3 mb-5">
                <span className="text-xs uppercase tracking-[0.18em] text-[#8A8276] font-semibold">
                  Completed
                </span>
                <span className="font-display font-semibold text-[#1F1B16]">{open.date}</span>
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

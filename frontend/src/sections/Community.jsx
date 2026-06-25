import React from "react";
import { motion } from "framer-motion";
import { Instagram, ShieldCheck, ImageOff, Sparkles } from "lucide-react";
import { COMMUNITY } from "@/content";

export default function Community() {
  const hasInstagram = COMMUNITY.instagramUrl && COMMUNITY.instagramUrl !== "#";

  return (
    <section
      id="community"
      className="relative py-28 md:py-40 overflow-hidden"
      data-testid="community-section"
    >
      <div className="blob w-[500px] h-[500px] bg-[#CDEAC0]/45 top-1/4 -left-32" />
      <div className="blob w-[420px] h-[420px] bg-[#FFD6A5]/40 bottom-10 -right-20" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-14 lg:mb-20 items-start">
          {/* Header */}
          <div className="lg:col-span-7">
            <div className="section-label mb-4">06 — In Community</div>
            <h2 className="font-display font-black tracking-tighter leading-[0.95] text-[#1F1B16] text-5xl md:text-6xl">
              Community Engagement &{" "}
              <span className="font-serif-italic font-normal text-gradient-warm">
                Social Impact
              </span>
            </h2>
            <p className="mt-7 text-base md:text-lg text-[#5C5247] font-light leading-relaxed max-w-2xl">
              {COMMUNITY.description}
            </p>

            <a
              href={COMMUNITY.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={`mt-8 inline-flex items-center gap-2.5 glass rounded-full pl-3 pr-5 py-2.5 transition-all group ${
                hasInstagram
                  ? "hover:border-[#F76C5E]/40 hover:-translate-y-0.5"
                  : "opacity-70 cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (!hasInstagram) e.preventDefault();
              }}
              data-testid="community-verify-link"
              aria-label={
                hasInstagram
                  ? "Verified through event documentation — view Instagram post"
                  : "Verification link coming soon"
              }
            >
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF8E72] via-[#F76C5E] to-[#E8A53A] flex items-center justify-center shadow-sm">
                <ShieldCheck size={14} className="text-white" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#3D3530] font-semibold">
                {hasInstagram ? "Verified through event documentation" : "Verification link · coming soon"}
              </span>
              {hasInstagram && (
                <Instagram
                  size={14}
                  className="text-[#F76C5E] group-hover:rotate-12 transition-transform"
                />
              )}
            </a>
          </div>

          {/* Values */}
          <div className="lg:col-span-5">
            <div className="glass rounded-3xl p-6 md:p-7">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={14} className="text-[#E8A53A]" />
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A8276] font-semibold">
                  What I carried home
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {COMMUNITY.values.map((v) => (
                  <div
                    key={v.label}
                    className="border-l-2 border-[#F76C5E]/30 pl-3"
                    data-testid={`community-value-${v.label.toLowerCase()}`}
                  >
                    <div className="font-display font-bold text-base text-[#1F1B16]">
                      {v.label}
                    </div>
                    <div className="text-xs text-[#6B6357] mt-0.5 leading-relaxed">
                      {v.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Story gallery */}
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-[#1F1B16] tracking-tight">
            Moments &{" "}
            <span className="font-serif-italic font-normal text-gradient-warm">Experiences</span>
          </h3>
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A8276] font-semibold">
            A small story, told in four frames
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMMUNITY.gallery.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-3 flex flex-col transition-colors hover:border-[#F76C5E]/30"
              data-testid={`community-photo-${i}`}
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-[#FFD6A5]/40 via-[#F6C6EA]/30 to-[#CDEAC0]/40">
                {g.url ? (
                  <img
                    src={g.url}
                    alt={g.caption}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    style={{ filter: "saturate(1.05) brightness(1.02)" }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#A89E90]">
                    <ImageOff size={26} strokeWidth={1.5} />
                    <span className="text-[10px] uppercase tracking-[0.22em] mt-2 font-semibold">
                      Photo coming soon
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/85 backdrop-blur rounded-full px-2.5 py-0.5 text-[10px] font-display font-bold text-[#1F1B16]">
                  0{i + 1}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <figcaption className="mt-4 px-1.5 pb-1.5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#E8A53A] font-semibold mb-1.5">
                  {g.step}
                </div>
                <div className="text-sm font-display font-semibold text-[#1F1B16] leading-snug">
                  {g.caption}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

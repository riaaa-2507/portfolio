import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { SITE } from "@/content";

export default function Hero() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SITE.carousel.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen pt-32 pb-16 overflow-hidden grain" data-testid="hero-section">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="blob w-[520px] h-[520px] bg-[#FF6B6B]/25 -top-32 -left-24 animate-float-slow" />
        <div className="blob w-[600px] h-[600px] bg-[#7D3C98]/30 top-1/3 -right-40 animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="blob w-[420px] h-[420px] bg-[#F4A261]/20 bottom-0 left-1/3 animate-float-slow" style={{ animationDelay: "6s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left — Mission */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          >
            <Sparkles size={14} className="text-[#F4A261]" />
            <span className="text-xs tracking-[0.18em] uppercase text-white/70 font-medium">
              Personal Mission · 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black leading-[0.95] tracking-tighter text-white text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.2rem]"
            data-testid="hero-mission"
          >
            Building at the intersection of{" "}
            <span className="text-gradient-warm">Artificial Intelligence</span>,{" "}
            <span className="font-serif-italic font-normal text-white/95">Computing</span>, and{" "}
            <span className="text-gradient-plum">Human Impact</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed font-light"
          >
            {SITE.missionSub}
          </motion.p>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-3 flex-wrap"
            data-testid="hero-carousel"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-white/40 font-semibold">
              Exploring
            </span>
            <div className="h-7 overflow-hidden relative w-[260px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute font-display font-semibold text-lg text-gradient-warm"
                >
                  {SITE.carousel[idx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#vision" className="btn-primary" data-testid="explore-journey-btn">
              Explore My Journey <ArrowDown size={18} />
            </a>
            <a href="#projects" className="btn-ghost" data-testid="see-projects-btn">
              See Projects
            </a>
          </motion.div>

          {/* Name + university below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-14 flex items-center gap-4 text-white/55"
          >
            <div className="h-px w-12 bg-white/20" />
            <div>
              <div className="text-sm font-display font-medium text-white/85" data-testid="hero-name">
                {SITE.name}
              </div>
              <div className="text-xs text-white/50 mt-0.5" data-testid="hero-university">
                {SITE.university} · {SITE.tagline}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/5]">
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#FF6B6B]/40 via-[#C44569]/30 to-[#7D3C98]/40 blur-2xl opacity-70" />
            {/* Frame */}
            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden border border-white/10 glass-strong">
              <img
                src={SITE.heroPhoto}
                alt="[Profile portrait placeholder]"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="hero-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#07050A]/70 via-transparent to-transparent" />
              {/* Floating chip */}
              <div className="absolute bottom-5 left-5 right-5 glass-strong rounded-2xl px-4 py-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#F4A261] font-semibold">
                    Currently
                  </div>
                  <div className="text-sm font-display font-semibold text-white">
                    Studying · Learning · Building
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
              </div>
            </div>
            {/* Corner notch */}
            <div className="absolute -top-3 -right-3 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#F4A261]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">
                est. 2025
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 text-[10px] tracking-[0.28em] uppercase font-semibold"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

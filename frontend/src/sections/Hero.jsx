import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";
import { SITE } from "@/content";

const EXPLORING = [
  "Artificial Intelligence",
  "Data Analytics",
  "Computing",
  "Research",
  "Human-Centered Technology",
];

// Three-word focus in the heading — each styled distinctly.
function Underlined({ children, color }) {
  return (
    <span className="relative inline-block">
      <span className={color}>{children}</span>
      <svg
        className="absolute left-0 -bottom-1 w-full"
        height="6"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="3"
          x2="100"
          y2="3"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.35"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 pb-16 overflow-hidden grain"
      data-testid="hero-section"
    >
      {/* Soft sunny blobs */}
      <div className="absolute inset-0">
        <div className="blob w-[520px] h-[520px] bg-[#FFD6A5]/60 -top-32 -left-24 animate-float-slow" />
        <div
          className="blob w-[600px] h-[600px] bg-[#F6C6EA]/45 top-1/3 -right-40 animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="blob w-[420px] h-[420px] bg-[#CDEAC0]/55 bottom-0 left-1/3 animate-float-slow"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="blob w-[380px] h-[380px] bg-[#BFE0F2]/50 top-1/2 left-0 animate-float-slow"
          style={{ animationDelay: "8s" }}
        />
      </div>

      {/* Notebook-style page marker */}
      <div className="hidden md:block absolute top-28 left-10 lg:left-14 text-[10px] tracking-[0.32em] text-[#A89E90] font-mono z-10 -rotate-90 origin-left">
        p. 001 — the opening page
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
            <Sparkles size={14} className="text-[#E8A53A]" />
            <span className="text-xs tracking-[0.22em] uppercase text-[#5C5247] font-semibold">
              Learning Journey · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-display font-black leading-[0.98] tracking-tighter text-[#1F1B16] text-[2.4rem] sm:text-5xl md:text-[3.5rem] lg:text-[4rem]"
            data-testid="hero-mission"
          >
            Building My Journey Through{" "}
            <Underlined color="text-gradient-warm">Code</Underlined>,{" "}
            <span className="font-serif-italic font-normal text-[#1F1B16]">
              <Underlined color="">Curiosity</Underlined>
            </span>
            , and{" "}
            <Underlined color="text-gradient-plum">Community</Underlined>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="mt-7 text-base md:text-lg text-[#5C5247] max-w-2xl leading-relaxed font-light"
          >
            I am a B.Sc. Physical Science with Computer Science student at the
            University of Delhi, exploring artificial intelligence, data
            analytics, computing, research, and meaningful leadership. I enjoy
            reading fiction and knowledge-driven articles, asking thoughtful
            questions, and continuously learning across disciplines. My goal is
            to use technology to create positive human impact while growing
            alongside the communities I serve.
          </motion.p>

          {/* Exploring — static list, learning-path style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex items-center flex-wrap gap-x-3 gap-y-2 max-w-2xl"
            data-testid="hero-carousel"
            aria-label="Areas I am currently exploring"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#E8A53A] font-bold flex items-center gap-1.5">
              <BookOpen size={12} />
              Exploring
            </span>
            {EXPLORING.map((item, i) => (
              <React.Fragment key={item}>
                <span className="text-[#C8BFB1]" aria-hidden="true">
                  •
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                  className="text-xs md:text-sm font-display font-semibold text-[#1F1B16]"
                >
                  {item}
                </motion.span>
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#journey"
              className="btn-primary"
              data-testid="explore-journey-btn"
            >
              See What I&apos;m Building <ArrowDown size={18} />
            </a>
            <a
              href="#projects"
              className="btn-ghost"
              data-testid="see-projects-btn"
            >
              View Projects
            </a>
          </motion.div>

          {/* Handwritten-style margin note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-14 flex items-start gap-4 text-[#5C5247]"
          >
            <div className="h-px w-12 bg-[#1F1B16]/15 mt-3" />
            <div>
              <div className="text-sm font-display font-medium text-[#1F1B16]" data-testid="hero-name">
                {SITE.name}
              </div>
              <div className="text-xs text-[#7C7468] mt-0.5" data-testid="hero-university">
                {SITE.university}
              </div>
              <div className="font-serif-italic text-[13px] text-[#8A8276] mt-1.5">
                ↳ still writing this page, one chapter at a time.
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
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#FFB088]/60 via-[#FFD6A5]/50 to-[#F6C6EA]/50 blur-2xl opacity-90" />
            <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden border border-white shadow-[0_20px_60px_-20px_rgba(247,108,94,0.35)] bg-white">
              <img
                src={SITE.heroPhoto}
                alt="Riya Singh on the Motilal Nehru College campus, University of Delhi"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: "saturate(1.05) brightness(1.02)",
                  objectPosition: "center 35%",
                }}
                data-testid="hero-photo"
              />
              {/* Floating chip */}
              <div className="absolute bottom-5 left-5 right-5 glass-strong rounded-2xl px-4 py-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#E8A53A] font-semibold">
                    Currently
                  </div>
                  <div className="text-sm font-display font-semibold text-[#1F1B16]">
                    Studying · Learning · Building
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#F76C5E] animate-pulse" />
              </div>
            </div>
            {/* Notebook-style page corner */}
            <div className="absolute -top-3 -right-3 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <BookOpen size={12} className="text-[#E8A53A]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#3D3530] font-semibold">
                Year 01
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#8A8276] text-[10px] tracking-[0.28em] uppercase font-semibold"
      >
        Keep reading
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-8 bg-gradient-to-b from-[#1F1B16]/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}

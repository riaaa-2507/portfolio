import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  ExternalLink,
  HandHeart,
  Users,
  HeartHandshake,
  Sprout,
} from "lucide-react";
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

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy + CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              06 — In Community
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="font-display font-black tracking-tighter leading-[0.95] text-[#1F1B16] text-5xl md:text-6xl"
            >
              Community{" "}
              <span className="font-serif-italic font-normal text-gradient-warm">
                Engagement
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 text-base md:text-lg text-[#5C5247] font-light leading-relaxed max-w-2xl"
            >
              {COMMUNITY.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {hasInstagram ? (
                <a
                  href={COMMUNITY.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View the event post on Instagram — opens in a new tab"
                  className="btn-primary"
                  data-testid="community-event-link"
                >
                  <Instagram size={18} aria-hidden="true" />
                  View Event Post
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="btn-ghost cursor-default opacity-80"
                  data-testid="community-event-link-pending"
                  aria-label="Event post link coming soon"
                >
                  <Instagram size={16} aria-hidden="true" />
                  Event post · link coming soon
                </span>
              )}
              <span className="text-xs text-[#8A8276] tracking-[0.18em] uppercase font-semibold">
                {COMMUNITY.contextTag}
              </span>
            </motion.div>
          </div>

          {/* Right: subtle volunteering visual (no photos) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
            aria-hidden="true"
          >
            <div className="relative glass rounded-3xl p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-[#FFD6A5]/60 to-[#F6C6EA]/50 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#CDEAC0]/60 to-[#BFE0F2]/40 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#8A8276] font-semibold mb-7">
                  <Sprout size={12} className="text-[#8FB48F]" />
                  Service · Together · Forward
                </div>

                <div className="flex items-end gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF8E72] via-[#F76C5E] to-[#E8A53A] flex items-center justify-center shadow-md">
                    <HandHeart size={28} className="text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8FB48F] to-[#9FC1D9] flex items-center justify-center shadow-sm mb-1">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B57BBA] to-[#F6C6EA] flex items-center justify-center shadow-sm mb-2">
                    <HeartHandshake size={16} className="text-white" />
                  </div>
                </div>

                <p className="font-serif-italic text-xl md:text-2xl text-[#1F1B16] leading-snug">
                  Small acts, in good company, become a kind of language all
                  their own.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

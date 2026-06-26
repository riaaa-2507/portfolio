import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Sparkles, Calendar, Tag } from "lucide-react";
import { COLLEGE_MEMORIES, MEMORY_CATEGORIES } from "@/content";

export default function CollegeMemories() {
  const [activeCat, setActiveCat] = React.useState("All");
  const [lightbox, setLightbox] = React.useState(null); // { yearIdx, photoIdx }

  // Filter helper
  const filterPhotos = (photos) =>
    activeCat === "All" ? photos : photos.filter((p) => p.category === activeCat);

  // Flattened list for keyboard nav within a year row
  const currentRow = lightbox ? filterPhotos(COLLEGE_MEMORIES[lightbox.yearIdx].photos) : [];
  const currentPhoto = lightbox ? currentRow[lightbox.photoIdx] : null;

  const openLightbox = (yearIdx, photoIdx) => setLightbox({ yearIdx, photoIdx });
  const closeLightbox = () => setLightbox(null);
  const next = React.useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const row = filterPhotos(COLLEGE_MEMORIES[lb.yearIdx].photos);
      if (!row.length) return lb;
      return { ...lb, photoIdx: (lb.photoIdx + 1) % row.length };
    });
  }, [activeCat]);
  const prev = React.useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const row = filterPhotos(COLLEGE_MEMORIES[lb.yearIdx].photos);
      if (!row.length) return lb;
      return { ...lb, photoIdx: (lb.photoIdx - 1 + row.length) % row.length };
    });
  }, [activeCat]);

  // Keyboard support
  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, next, prev]);

  // Per-year horizontal scroll arrows
  const scrollRefs = React.useRef({});
  const scrollBy = (yearIdx, dir) => {
    const el = scrollRefs.current[yearIdx];
    if (!el) return;
    const amt = el.clientWidth * 0.75 * dir;
    el.scrollBy({ left: amt, behavior: "smooth" });
  };

  return (
    <section
      id="memories"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="memories-section"
    >
      <div className="blob w-[420px] h-[420px] bg-[#FFD6A5]/35 top-10 -left-20 animate-float-slow" />
      <div
        className="blob w-[360px] h-[360px] bg-[#F6C6EA]/30 bottom-20 -right-20 animate-float-slow"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="section-label mb-5">04 — Moments &amp; Memories</div>
          <h2 className="font-display font-black tracking-tighter leading-[0.94] text-[#1F1B16] text-4xl md:text-5xl lg:text-6xl">
            College <span className="font-serif-italic font-normal text-gradient-warm">Memories</span>{" "}
            &amp; Experiences
          </h2>
          <p className="mt-6 text-lg text-[#5C5247] font-light leading-relaxed">
            Building memories, learning continuously, and documenting a journey that is still unfolding.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#A89E90] font-semibold">
            Placeholder photographs · to be replaced with real moments over time
          </p>
        </div>

        {/* Category filter pills */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          data-testid="memories-filter"
          role="tablist"
          aria-label="Memory categories"
        >
          {MEMORY_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              role="tab"
              aria-selected={activeCat === c}
              data-testid={`memories-cat-${c.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCat === c
                  ? "bg-gradient-to-r from-[#FF8E72] to-[#F76C5E] text-white shadow-md"
                  : "glass text-[#3D3530] hover:text-[#F76C5E] hover:border-[#F76C5E]/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Year rows */}
        <div className="mt-14 space-y-16">
          {COLLEGE_MEMORIES.map((year, yearIdx) => {
            const visible = filterPhotos(year.photos);
            return (
              <motion.div
                key={year.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                data-testid={`memories-year-${yearIdx + 1}`}
              >
                {/* Year header */}
                <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-display font-black text-2xl md:text-3xl text-[#1F1B16] tracking-tight">
                        {year.label}
                      </span>
                      {year.status === "current" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F76C5E]/12 text-[#C44569] text-[10px] font-semibold uppercase tracking-[0.18em]">
                          <Sparkles size={11} /> Current
                        </span>
                      )}
                      {year.status === "future" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#1F1B16]/12 text-[#8A8276] text-[10px] font-semibold uppercase tracking-[0.18em]">
                          Yet to unfold
                        </span>
                      )}
                    </div>
                    <div className="text-xs uppercase tracking-[0.22em] text-[#8A8276] font-semibold">
                      {year.period}
                    </div>
                    <p className="mt-2 text-sm text-[#5C5247] font-light italic">{year.note}</p>
                  </div>

                  {visible.length > 0 && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => scrollBy(yearIdx, -1)}
                        aria-label={`Scroll ${year.label} memories left`}
                        data-testid={`memories-scroll-left-${yearIdx + 1}`}
                        className="w-9 h-9 rounded-full glass flex items-center justify-center text-[#5C5247] hover:text-[#F76C5E] hover:border-[#F76C5E]/40 transition"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => scrollBy(yearIdx, 1)}
                        aria-label={`Scroll ${year.label} memories right`}
                        data-testid={`memories-scroll-right-${yearIdx + 1}`}
                        className="w-9 h-9 rounded-full glass flex items-center justify-center text-[#5C5247] hover:text-[#F76C5E] hover:border-[#F76C5E]/40 transition"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Photos strip OR empty state */}
                {visible.length === 0 ? (
                  <div
                    className="glass rounded-2xl p-10 md:p-14 text-center"
                    data-testid={`memories-empty-${yearIdx + 1}`}
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-[#FFE8DF] to-[#F4D9C5] flex items-center justify-center mb-4">
                      <Sparkles size={18} className="text-[#F76C5E]" />
                    </div>
                    <p className="font-serif-italic text-xl md:text-2xl text-[#2A2520] max-w-md mx-auto leading-snug">
                      {year.status === "future"
                        ? "The story is still being written."
                        : "No memories in this category yet."}
                    </p>
                    {year.status === "future" && (
                      <p className="mt-3 text-sm text-[#8A8276] max-w-md mx-auto">
                        Future memories will live here — chapters yet to be lived, learned, and remembered.
                      </p>
                    )}
                  </div>
                ) : (
                  <div
                    ref={(el) => (scrollRefs.current[yearIdx] = el)}
                    className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: "thin" }}
                  >
                    {visible.map((photo, photoIdx) => (
                      <motion.button
                        key={`${yearIdx}-${photoIdx}-${photo.src}`}
                        onClick={() => openLightbox(yearIdx, photoIdx)}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: photoIdx * 0.04 }}
                        whileHover={{ y: -4 }}
                        aria-label={`Open photo: ${photo.caption}`}
                        data-testid={`memory-card-${yearIdx + 1}-${photoIdx + 1}`}
                        className="snap-start group relative flex-shrink-0 w-[260px] md:w-[300px] h-[340px] md:h-[380px] rounded-2xl overflow-hidden glass-strong text-left transition-shadow hover:shadow-xl"
                      >
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src={photo.src}
                            alt={photo.caption}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/85 via-[#1F1B16]/20 to-transparent" />
                        </div>

                        <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3D3530]">
                          <Tag size={10} /> {photo.category}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold text-white/80 mb-1">
                            <Calendar size={11} /> {photo.date}
                          </div>
                          <div className="font-display font-semibold text-base md:text-lg leading-snug line-clamp-2">
                            {photo.caption}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={currentPhoto.caption}
            data-testid="memory-lightbox"
          >
            <div
              className="absolute inset-0 bg-[#1F1B16]/80 backdrop-blur-md"
              onClick={closeLightbox}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative w-full max-w-5xl glass-strong rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={closeLightbox}
                aria-label="Close"
                data-testid="memory-lightbox-close"
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/85 hover:bg-white flex items-center justify-center text-[#1F1B16] transition"
              >
                <X size={18} />
              </button>

              {currentRow.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous photo"
                    data-testid="memory-lightbox-prev"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/85 hover:bg-white flex items-center justify-center text-[#1F1B16] transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next photo"
                    data-testid="memory-lightbox-next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/85 hover:bg-white flex items-center justify-center text-[#1F1B16] transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <div className="bg-[#1F1B16] flex items-center justify-center">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.caption}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="p-6 md:p-7 bg-white/95">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F76C5E]/12 text-[#C44569] text-[10px] font-semibold uppercase tracking-[0.18em]">
                    <Tag size={11} /> {currentPhoto.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#8A8276] font-semibold uppercase tracking-[0.18em]">
                    <Calendar size={11} /> {currentPhoto.date}
                  </span>
                  <span className="text-xs text-[#A89E90]">
                    · {COLLEGE_MEMORIES[lightbox.yearIdx].label}
                  </span>
                </div>
                <div className="font-display font-semibold text-lg md:text-xl text-[#1F1B16]">
                  {currentPhoto.caption}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

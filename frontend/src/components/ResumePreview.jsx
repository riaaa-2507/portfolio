import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ExternalLink, Download, FileText } from "lucide-react";
import { SITE } from "@/content";

export default function ResumePreview({ open, onClose }) {
  const [zoom, setZoom] = React.useState(100);

  // Reset zoom when reopened
  React.useEffect(() => {
    if (open) setZoom(100);
  }, [open]);

  // Keyboard support: Esc closes, +/- zoom
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 10, 200));
      if (e.key === "-" || e.key === "_") setZoom((z) => Math.max(z - 10, 50));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10"
          data-testid="resume-preview-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1F1B16]/55 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full max-w-5xl h-[90vh] glass-strong rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            data-testid="resume-preview-modal"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-[#1F1B16]/10 bg-white/70">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF8E72] via-[#F76C5E] to-[#E8A53A] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <FileText size={18} />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#8A8276] font-semibold">
                    Resume Preview
                  </div>
                  <div className="font-display font-semibold text-[#1F1B16] truncate">
                    {SITE.name}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 md:gap-2">
                {/* Zoom controls */}
                <div className="hidden sm:flex items-center gap-1 bg-white/70 border border-[#1F1B16]/10 rounded-full px-1.5 py-1">
                  <button
                    onClick={() => setZoom((z) => Math.max(z - 10, 50))}
                    aria-label="Zoom out"
                    data-testid="resume-zoom-out"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#5C5247] hover:text-[#F76C5E] hover:bg-[#FFE8DF]/60 transition"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-xs font-semibold text-[#3D3530] w-10 text-center tabular-nums">
                    {zoom}%
                  </span>
                  <button
                    onClick={() => setZoom((z) => Math.min(z + 10, 200))}
                    aria-label="Zoom in"
                    data-testid="resume-zoom-in"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#5C5247] hover:text-[#F76C5E] hover:bg-[#FFE8DF]/60 transition"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open in new tab"
                  data-testid="resume-open-new-tab"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#5C5247] hover:text-[#F76C5E] hover:bg-[#FFE8DF]/60 transition"
                  title="Open in new tab"
                >
                  <ExternalLink size={16} />
                </a>

                <a
                  href={SITE.resumeUrl}
                  download
                  aria-label="Download PDF"
                  data-testid="resume-download"
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FF8E72] to-[#F76C5E] hover:shadow-md transition"
                  title="Download PDF"
                >
                  <Download size={14} /> Download
                </a>

                <button
                  onClick={onClose}
                  aria-label="Close preview"
                  data-testid="resume-close"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#5C5247] hover:text-[#1F1B16] hover:bg-[#1F1B16]/5 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 overflow-auto bg-[#F4ECDD]">
              <div
                style={{
                  width: `${zoom}%`,
                  minWidth: "100%",
                  height: "100%",
                  margin: "0 auto",
                  transition: "width 0.2s ease",
                }}
                className="h-full"
              >
                <iframe
                  title="Resume PDF"
                  src={`${SITE.resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
                  className="w-full h-full border-0 block"
                  data-testid="resume-pdf-iframe"
                />
              </div>
            </div>

            {/* Mobile footer (zoom + download) */}
            <div className="sm:hidden flex items-center justify-between gap-3 px-4 py-3 border-t border-[#1F1B16]/10 bg-white/80">
              <div className="flex items-center gap-1 bg-white/70 border border-[#1F1B16]/10 rounded-full px-1.5 py-1">
                <button
                  onClick={() => setZoom((z) => Math.max(z - 10, 50))}
                  aria-label="Zoom out"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#5C5247]"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-xs font-semibold text-[#3D3530] w-10 text-center tabular-nums">
                  {zoom}%
                </span>
                <button
                  onClick={() => setZoom((z) => Math.min(z + 10, 200))}
                  aria-label="Zoom in"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#5C5247]"
                >
                  <ZoomIn size={14} />
                </button>
              </div>
              <a
                href={SITE.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FF8E72] to-[#F76C5E]"
              >
                <Download size={14} /> Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

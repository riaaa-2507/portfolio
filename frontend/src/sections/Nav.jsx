import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE } from "@/content";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Connect", href: "#connect" },
];

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const padY = useTransform(scrollY, [0, 80], [18, 10]);

  return (
    <motion.header
      style={{ paddingTop: padY, paddingBottom: padY }}
      className="fixed top-0 left-0 right-0 z-50"
      data-testid="site-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="glass rounded-full px-5 md:px-7 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group" data-testid="nav-logo">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF8E72] via-[#F76C5E] to-[#E8A53A] flex items-center justify-center text-[11px] font-bold font-display text-white shadow-sm">
              {SITE.initials}
            </span>
            <span className="hidden sm:inline font-display font-semibold tracking-tight text-[#1F1B16]">
              {SITE.shortName}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="text-sm text-[#5C5247] hover:text-[#1F1B16] transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={SITE.resumeUrl}
            download
            data-testid="nav-resume-btn"
            className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-[#1F1B16]"
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-5 flex flex-col gap-3"
            data-testid="nav-mobile-menu"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#3D3530] hover:text-[#1F1B16] text-sm py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.resumeUrl}
              download
              className="btn-primary justify-center mt-2 text-sm"
              data-testid="nav-resume-btn-mobile"
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

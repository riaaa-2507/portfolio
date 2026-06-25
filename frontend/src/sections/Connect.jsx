import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import { SITE } from "@/content";

export default function Connect() {
  const links = [
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, testId: "connect-email" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: SITE.linkedin, testId: "connect-linkedin" },
    { icon: Github, label: "GitHub", value: "Explore my code", href: SITE.github, testId: "connect-github" },
  ];

  return (
    <section id="connect" className="relative py-28 md:py-40 overflow-hidden" data-testid="connect-section">
      <div className="blob w-[600px] h-[600px] bg-[#FFD6A5]/55 -top-20 -right-32 animate-float-slow" />
      <div className="blob w-[500px] h-[500px] bg-[#F6C6EA]/45 bottom-0 -left-20 animate-float-slow" style={{ animationDelay: "4s" }} />
      <div className="blob w-[400px] h-[400px] bg-[#CDEAC0]/40 top-1/3 left-1/4 animate-float-slow" style={{ animationDelay: "6s" }} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="section-label mb-5">07 — Let&apos;s Talk</div>
        <h2 className="font-display font-black tracking-tighter leading-[0.92] text-[#1F1B16] text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s build <span className="font-serif-italic font-normal text-gradient-warm">something</span><br />
          that matters.
        </h2>
        <p className="mt-7 text-lg md:text-xl text-[#5C5247] max-w-2xl mx-auto font-light leading-relaxed">
          Always curious to meet other students, researchers, mentors, and builders. Reach out — even just to say hello.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {links.map(({ icon: Icon, label, value, href, testId }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              data-testid={testId}
              className="group glass rounded-2xl p-5 text-left hover:border-[#F76C5E]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon size={20} className="text-[#E8A53A]" />
                <ArrowUpRight size={16} className="text-[#8A8276] group-hover:text-[#F76C5E] group-hover:rotate-12 transition-all" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#8A8276] font-semibold mb-1">
                {label}
              </div>
              <div className="font-display font-semibold text-[#1F1B16] truncate">{value}</div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="btn-primary"
            data-testid="connect-send-email-btn"
          >
            <Mail size={18} /> Send a Message
          </a>
          <a
            href={SITE.resumeUrl}
            download
            className="btn-ghost"
            data-testid="connect-resume-btn"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="mt-24 pt-12 border-t border-[#1F1B16]/10">
          <p className="font-serif-italic text-2xl md:text-3xl text-[#2A2520] max-w-3xl mx-auto leading-snug">
            &ldquo;Technology becomes meaningful when it improves human lives.&rdquo;
          </p>
          <div className="mt-10 text-xs uppercase tracking-[0.3em] text-[#8A8276] font-semibold">
            {SITE.name}
          </div>
          <div className="mt-2 text-xs text-[#A89E90]">
            © {new Date().getFullYear()} · Made with curiosity, coffee & quiet determination.
          </div>
        </div>
      </div>
    </section>
  );
}

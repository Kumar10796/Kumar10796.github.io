import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-white/[0.04] blur-[120px]" />

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            01 — Coimbatore, IN
          </span>
          <span className="h-px w-16 bg-border" />
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif-display text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.9] tracking-tight"
        >
          <span className="text-gradient">Sri</span>{" "}
          <span className="text-gradient italic">Kumaran</span>
          <span className="text-muted-foreground/50">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl"
        >
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              A <span className="font-serif-display italic text-foreground">Java Full Stack Developer</span> building
              scalable backend systems and cloud-native applications with
              Spring Boot, Microservices and AWS.
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground space-y-2">
            <div>
              <span className="text-foreground/40">Focus / </span>Backend
            </div>
            <div>
              <span className="text-foreground/40">Stack / </span>Java · Spring · AWS
            </div>
            <div>
              <span className="text-foreground/40">Email / </span>
              <a href="mailto:srikumaran@gmail.com" className="hover:text-foreground transition-colors normal-case tracking-normal">srikumaran@gmail.com</a>
            </div>
            <div>
              <span className="text-foreground/40">Phone / </span>
              <a href="tel:+919999999999" className="hover:text-foreground transition-colors">+91 99999 99999</a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
        Scroll ↓
      </div>
    </section>
  );
}

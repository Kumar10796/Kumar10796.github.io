import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-16 pt-32 pb-10 border-t border-border overflow-hidden">
      <div className="absolute inset-0 noise opacity-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-display text-[14vw] md:text-[10vw] leading-[0.9] tracking-tight text-gradient"
        >
          Let's <span className="italic">build.</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8 pb-16 border-b border-border">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Based in
            </p>
            <p className="font-serif-display text-2xl">Coimbatore, India</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Currently
            </p>
            <p className="font-serif-display text-2xl italic">Open to work</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Reach me
            </p>
            <p className="text-base">
              <a href="mailto:srikumaran@gmail.com" className="hover:text-foreground/80 transition-colors block">srikumaran@gmail.com</a>
              <a href="tel:+919999999999" className="hover:text-foreground/80 transition-colors block mt-1 font-mono text-sm">+91 99999 99999</a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Sri Kumaran V</p>
          <p>Crafted with care · v1.0</p>
        </div>
      </div>
    </footer>
  );
}

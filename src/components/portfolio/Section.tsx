import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-baseline gap-6 border-b border-border pb-6"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {label}
          </span>
          <h2 className="font-serif-display text-5xl md:text-7xl tracking-tight text-gradient">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

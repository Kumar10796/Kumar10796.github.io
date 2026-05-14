import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { value: "4+", label: "Years" },
  { value: "3", label: "Projects" },
  { value: "10+", label: "AWS Services" },
];

export function About() {
  return (
    <Section id="about" label="01 / About" title={<><span>Engineering</span> <span className="italic">at scale.</span></>}>
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          <p>
            I architect and ship enterprise-grade backend systems —
            distributed microservices on Spring Boot, event-driven pipelines
            on AWS, and APIs designed to scale gracefully under load.
          </p>
          <p>
            My work lives at the intersection of{" "}
            <span className="font-serif-display italic text-foreground">clean architecture</span>,{" "}
            <span className="font-serif-display italic text-foreground">observability</span>, and the
            small details that separate good software from great software.
          </p>
        </div>
        <div className="md:col-span-5 md:pl-8 md:border-l border-border space-y-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-baseline justify-between"
            >
              <span className="font-serif-display text-5xl md:text-6xl text-gradient">
                {s.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "CI / CD", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "DynamoDB"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Material UI"],
  },
];

export function Skills() {
  return (
    <Section id="skills" label="02 / Skills" title={<><span>Tools of the </span><span className="italic">trade.</span></>}>
      <div className="divide-y divide-border border-y border-border">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="grid md:grid-cols-12 gap-6 py-8 group hover:bg-white/[0.015] transition-colors px-2"
          >
            <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-1">
              0{gi + 1}
            </div>
            <div className="md:col-span-3">
              <h3 className="font-serif-display text-3xl md:text-4xl">
                {g.title}
              </h3>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-3 items-center">
              {g.skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="text-base md:text-lg text-foreground/80 hover:text-foreground transition-colors"
                >
                  {s}
                  {i < g.skills.length - 1 && (
                    <span className="ml-6 text-muted-foreground/40">·</span>
                  )}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

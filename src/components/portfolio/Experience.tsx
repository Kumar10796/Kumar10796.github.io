import { motion } from "framer-motion";
import { Section } from "./Section";

const experience = [
  {
    company: "Yectra Technologies",
    role: "Software Engineer",
    duration: "2022 — Present",
    points: [
      "Developed scalable backend applications using Java, Spring Boot, and Microservices architecture.",
      "Built secure REST APIs and integrated AWS services such as S3, SQS, and DynamoDB.",
      "Designed and optimized PostgreSQL database schemas for enterprise applications.",
      "Worked on event-driven file processing systems and cloud-based application deployments.",
      "Collaborated with cross-functional teams to implement new features, bug fixes, and performance improvements.",
    ],
  },
  {
    company: "Spiro Prime Tech Solutions",
    role: "Java Backend Developer",
    duration: "2020 — 2022",
    points: [
      "Developed and maintained web applications using Java, Spring Boot, and REST APIs.",
      "Built backend modules for student project management and training platforms.",
      "Designed and integrated PostgreSQL databases for handling project and user data.",
      "Collaborated with teams to deliver scalable and reliable educational web solutions.",
      "Worked on deployment, bug fixing, and performance optimization of applications.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" label="03 / Experience" title={<><span>The </span><span className="italic">journey.</span></>}>
      <div className="space-y-px bg-border">
        {experience.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="bg-background grid md:grid-cols-12 gap-6 py-10 px-2 group hover:bg-white/[0.02] transition-colors"
          >
            <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {e.duration}
            </div>
            <div className="md:col-span-4">
              <h3 className="font-serif-display text-3xl md:text-4xl leading-tight">
                {e.role}
              </h3>
              <p className="text-muted-foreground mt-2">{e.company}</p>
            </div>
            <ul className="md:col-span-5 space-y-3 text-sm md:text-base text-muted-foreground">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed">
                  <span className="text-foreground/40 shrink-0">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

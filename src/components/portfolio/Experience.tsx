import { motion } from "framer-motion";
import { Section } from "./Section";

const experience = [
  {
    company: "Tech Solutions Pvt Ltd",
    role: "Senior Java Developer",
    duration: "2023 — Present",
    points: [
      "Led migration of monolith to microservices on AWS, cutting deploy time 70%.",
      "Architected event-driven file processing pipeline (S3, SQS, DynamoDB) handling 5M+ events/day.",
      "Mentored a team of 4 engineers, established code review and CI/CD standards.",
    ],
  },
  {
    company: "CloudWorks Systems",
    role: "Java Backend Developer",
    duration: "2021 — 2023",
    points: [
      "Built secure REST APIs with Spring Boot & Spring Security for fintech clients.",
      "Designed PostgreSQL schemas and JPA layers for high-throughput transaction systems.",
      "Containerized services with Docker and orchestrated on EKS.",
    ],
  },
  {
    company: "Infomatrix Labs",
    role: "Software Engineer",
    duration: "2019 — 2021",
    points: [
      "Developed core modules of an enterprise document management platform.",
      "Integrated AWS S3, Lambda, and CloudFront for global document delivery.",
      "Reduced page load times by 45% with backend caching strategies.",
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

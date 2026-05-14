import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "001",
    title: "Aukura Search",
    points: [
      "Developed an event-driven document processing system using Spring Boot, AWS S3, SQS, Lambda, DynamoDB, and OpenSearch.",
      "Implemented asynchronous file ingestion pipelines for scalable document upload, metadata storage, and search indexing.",
      "Built REST APIs for file management, processing status tracking, and OpenSearch-based document retrieval.",
      "Collaborated with cross-functional teams on cloud deployment, debugging, and backend performance optimization.",
    ],
    stack: ["Spring Boot", "AWS S3", "SQS", "DynamoDB", "Lambda", "OpenSearch"],
    year: "2025-2026",
  },
  {
    n: "002",
    title: "Envestnet Financial Platform",
    points: [
      "Developed and maintained enterprise-level financial service applications using Core Java and Spring Framework.",
      "Implemented backend business logic and RESTful APIs for secure financial operations and transaction workflows.",
      "Designed and managed MySQL database operations, queries, and integrations for efficient data handling.",
      "Worked closely with cross-functional teams to deliver scalable and reliable business solutions.",
      "Participated in debugging, performance optimization, and production issue resolution.",
      "Developed reusable backend modules and improved existing services for better maintainability.",
      "Collaborated in Agile development cycles, code reviews, testing, and deployment activities.",
    ], 
    stack: ["Core Java", "Spring", "MySQL", "REST APIs", "Hibernate"],
    year: "2023-2024",
  },
];

export function Projects() {
  return (
    <Section id="projects" label="04 / Selected Work" title={<><span>Recent </span><span className="italic">projects.</span></>}>
      <div className="divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group py-10 px-2 grid md:grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors cursor-pointer">
            <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
              {p.n}
            </div>
            <div className="md:col-span-4">
              <h3 className="font-serif-display text-3xl md:text-4xl leading-tight group-hover:italic transition-all">
                {p.title}
              </h3>
              <span className="font-mono text-xs text-muted-foreground mt-2 inline-block">
                {p.year}
              </span>
            </div>
            <p className="md:col-span-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              {p.description}
              <span className="block mt-3 font-mono text-xs uppercase tracking-wider text-foreground/60">
                {p.stack.join(" / ")}
              </span>
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

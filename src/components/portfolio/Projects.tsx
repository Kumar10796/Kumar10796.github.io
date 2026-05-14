import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "001",
    title: "File Processing System",
    description:
      "Event-driven file ingestion pipeline processing millions of documents through S3, SQS, and Lambda — metadata persisted to DynamoDB.",
    stack: ["Spring Boot", "AWS S3", "SQS", "DynamoDB", "Lambda"],
    year: "2024",
  },
  {
    n: "002",
    title: "E-commerce Microservices",
    description:
      "Distributed commerce platform with independent services for catalog, cart, orders, and payments — orchestrated on Kubernetes.",
    stack: ["Spring Cloud", "Kafka", "PostgreSQL", "Kubernetes", "Redis"],
    year: "2023",
  },
  {
    n: "003",
    title: "Document Management",
    description:
      "Secure cloud-native document vault with versioning, role-based access, and global CDN delivery via CloudFront.",
    stack: ["Spring Boot", "AWS S3", "CloudFront", "Cognito", "MongoDB"],
    year: "2023",
  },
  {
    n: "004",
    title: "Real-time Notifications",
    description:
      "Low-latency notification fan-out system supporting WebSocket, push, and email channels with at-least-once delivery.",
    stack: ["Spring WebFlux", "Kafka", "Redis", "WebSocket", "AWS SNS"],
    year: "2022",
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
            className="group py-10 px-2 grid md:grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors cursor-pointer"
          >
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
            <div className="md:col-span-2 flex md:justify-end items-start">
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

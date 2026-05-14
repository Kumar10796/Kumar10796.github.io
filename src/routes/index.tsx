import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sri Kumaran V — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sri Kumaran V — Java Full Stack Developer specializing in Spring Boot, Microservices, and AWS Cloud. Based in Coimbatore.",
      },
      { property: "og:title", content: "Sri Kumaran V — Java Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Building scalable backend systems and cloud-native applications with Spring Boot, Microservices, and AWS.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}

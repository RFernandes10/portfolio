import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import type { Project, Skills as SkillsType } from "./types";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const skills: SkillsType = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Context API",
    ],
    backend: ["Node.js", "Express", "Prisma", "RESTful APIs"],
    database: ["SQL", "NoSQL", "PostgreSQL", "MongoDB"],
    tools: ["Git/GitHub", "Docker", "Jest", "Deploy", "CI/CD"],
  };

  const projects: Project[] = [
    {
      title: "Sistema de Gerenciamento",
      description:
        "Aplicação full stack com autenticação, CRUD completo e dashboard interativo.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      github: "https://github.com/RFernandes10",
      demo: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de vendas online com carrinho de compras, integração de pagamento e painel admin.",
      tech: ["React", "Redux", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/RFernandes10",
      demo: "#",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard responsivo com visualização de dados em tempo real e gráficos interativos.",
      tech: ["React", "TypeScript", "Chart.js", "REST API"],
      github: "https://github.com/RFernandes10",
      demo: "#",
    },
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <SkillsSection skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}
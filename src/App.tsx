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
      title: "Escola Gestão - IA",
      description:
        "Sistema completo de gestão escolar com IA (Google Gemini) para relatórios executivos e análise de RH.",
      tech: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Google Vertex AI"],
      github: "https://github.com/RFernandes10/escola-gestao",
      demo: "#",
    },
    {
      title: "Project Management Platform",
      description:
        "Plataforma full-stack de gerenciamento de projetos com metodologia Kanban e colaboração em tempo real.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Context API"],
      github: "https://github.com/RFernandes10/project-management-platform",
      demo: "#",
    },
    {
      title: "Card Apresentação React",
      description:
        "Cartão de perfil pessoal interativo e responsivo com animações suaves e design moderno.",
      tech: ["React", "TypeScript", "Tailwind CSS", "CSS Animations"],
      github: "https://github.com/RFernandes10/card-apresentacao-react",
      demo: "https://rfernandes10.github.io/card-apresentacao-react/",
    },
    {
      title: "GitHub Profile Explorer",
      description:
        "Visualizador moderno de perfis do GitHub com informações completas via GitHub API em tempo real.",
      tech: ["React", "TypeScript", "GitHub API", "CSS Modules"],
      github: "https://github.com/RFernandes10/GitHub_Profile_Explorer",
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
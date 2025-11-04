import React from "react";
import { Github, Linkedin, Mail } from "./Icons";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <img
              src="./minha-foto.jpg"
              alt="Roberto Fernandes"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Roberto Fernandes
          </h2>
          <p className="text-2xl sm:text-3xl text-slate-300 mb-6">
            Desenvolvedor Full Stack Júnior
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Transformando ideias em aplicações web modernas e escaláveis com
            React, Node.js e TypeScript
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/RFernandes10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/roberto-wolowitz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <button
              onClick={() => scrollToSection("contato")}
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg transition"
            >
              <Mail size={20} />
              Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Code2, ExternalLink, Github } from "./Icons";
import type { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">
          Projetos em Destaque
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden hover:border-cyan-400 transition group"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Code2
                  size={64}
                  className="text-white opacity-50 group-hover:opacity-100 transition"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">
                  {project.title}
                </h4>
                <p className="text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 px-2 py-1 rounded text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-cyan-400 transition"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm hover:text-cyan-400 transition"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/RFernandes10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition"
          >
            <Github size={20} />
            Ver todos os projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

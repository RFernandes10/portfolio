import React from "react";
import { Code2, Database, Globe } from "./Icons";
import type { Skills } from "../types";

interface SkillsProps {
  skills: Skills;
}

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">
          Habilidades Técnicas
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition">
            <Globe className="text-cyan-400 mb-4" size={32} />
            <h4 className="text-xl font-semibold mb-4">Front-end</h4>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-green-400 transition">
            <Code2 className="text-green-400 mb-4" size={32} />
            <h4 className="text-xl font-semibold mb-4">Back-end</h4>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition">
            <Database className="text-blue-400 mb-4" size={32} />
            <h4 className="text-xl font-semibold mb-4">Banco de Dados</h4>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-purple-400 transition">
            <Code2 className="text-purple-400 mb-4" size={32} />
            <h4 className="text-xl font-semibold mb-4">Ferramentas</h4>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

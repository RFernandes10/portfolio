import React from "react";
import { Github, Linkedin, Mail, Phone } from "./Icons";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">Vamos Conversar?</h3>
        <p className="text-xl text-slate-400 mb-12">
          Estou disponível para novas oportunidades e projetos desafiadores
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:robertofernandes144@gmail.com"
            className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg transition group"
          >
            <Mail
              className="mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition"
              size={32}
            />
            <p className="text-sm text-slate-400">Email</p>
            <p className="text-xs mt-1 break-all">
              robertofernandes144@gmail.com
            </p>
          </a>
          <a
            href="tel:+5521972657221"
            className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg transition group"
          >
            <Phone
              className="mx-auto mb-3 text-green-400 group-hover:scale-110 transition"
              size={32}
            />
            <p className="text-sm text-slate-400">Telefone</p>
            <p className="text-xs mt-1">(21) 97265-7221</p>
          </a>
          <a
            href="https://www.linkedin.com/in/roberto-wolowitz/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg transition group"
          >
            <Linkedin
              className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition"
              size={32}
            />
            <p className="text-sm text-slate-400">LinkedIn</p>
            <p className="text-xs mt-1">roberto-wolowitz</p>
          </a>
          <a
            href="https://github.com/RFernandes10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg transition group"
          >
            <Github
              className="mx-auto mb-3 text-purple-400 group-hover:scale-110 transition"
              size={32}
            />
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="text-xs mt-1">RFernandes10</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

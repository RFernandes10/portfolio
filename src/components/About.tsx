import React from "react";
import { Code2, Globe, MapPin } from "./Icons";

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">Sobre Mim</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia, formado em{" "}
              <strong>Engenharia de Software</strong>
              pela Anhanguera Ampli e certificado pelo programa{" "}
              <strong>DevQuest Full-Stack</strong>.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Minha jornada no desenvolvimento web começou com a curiosidade
              de entender como as aplicações funcionam por baixo dos panos.
              Hoje, domino o desenvolvimento tanto no front-end quanto no
              back-end, criando soluções completas e eficientes.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Busco constantemente aprimorar minhas habilidades através de
              projetos práticos, estudo de novas tecnologias e participação
              ativa na comunidade de desenvolvedores.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="text-cyan-400" />
                Formação
              </h4>
              <p className="text-slate-300">
                Bacharel em Engenharia de Software
              </p>
              <p className="text-slate-400 text-sm">Anhanguera Ampli</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code2 className="text-cyan-400" />
                Certificação
              </h4>
              <p className="text-slate-300">DevQuest Full-Stack</p>
              <p className="text-slate-400 text-sm">Dev em Dobro - 2024</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-cyan-400" />
                Localização
              </h4>
              <p className="text-slate-300">Rio de Janeiro, RJ</p>
              <p className="text-slate-400 text-sm">Realengo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

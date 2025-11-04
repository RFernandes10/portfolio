import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center text-slate-400">
        <p className="mb-2">
          © 2024 Roberto Fernandes. Todos os direitos reservados.
        </p>
        <p className="text-sm">Desenvolvido com React e Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;

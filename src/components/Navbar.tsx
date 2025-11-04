import React from "react";
import { Menu, X } from "./Icons";

interface NavbarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, menuOpen, setMenuOpen, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            RF.dev
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["home", "sobre", "habilidades", "projetos", "contato"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition ${
                    activeSection === section ? "text-cyan-400" : ""
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {["home", "sobre", "habilidades", "projetos", "contato"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize hover:bg-slate-800 transition ${
                    activeSection === section
                      ? "bg-slate-800 text-cyan-400"
                      : ""
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

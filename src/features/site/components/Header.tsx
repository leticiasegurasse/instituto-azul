import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[var(--branco)] shadow-[var(--sombra-suave)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[var(--azul-principal)] font-titulo">
                iAzul
              </span>
              <span className="text-xs text-[var(--azul-principal)] font-medium">
                INSTITUTO AZUL
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors font-medium">
              Inicio
            </a>
            <a href="#sobre" className="text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors font-medium">
              Sobre
            </a>
            <a href="#servicos" className="text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors font-medium">
              Serviços
            </a>
            <a href="#cursos" className="text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors font-medium">
              Cursos
            </a>
            <a href="#blog" className="text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors font-medium">
              Blog
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[var(--azul-principal)] text-[var(--branco)] px-6 py-2 rounded-lg hover:bg-[var(--azul-medio)] transition-colors font-medium">
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--azul-principal)] hover:text-[var(--azul-medio)] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--branco)] border-t border-[var(--cinza-claro)]">
              <a href="#inicio" className="block px-3 py-2 text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors">
                Inicio
              </a>
              <a href="#sobre" className="block px-3 py-2 text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="block px-3 py-2 text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors">
                Serviços
              </a>
              <a href="#cursos" className="block px-3 py-2 text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors">
                Cursos
              </a>
              <a href="#blog" className="block px-3 py-2 text-[var(--azul-principal)] hover:text-[var(--azul-medio)] transition-colors">
                Blog
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-[var(--azul-principal)] text-[var(--branco)] px-4 py-2 rounded-lg hover:bg-[var(--azul-medio)] transition-colors font-medium">
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

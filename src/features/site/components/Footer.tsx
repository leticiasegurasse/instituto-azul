import React from 'react';
import { ArrowDown } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--azul-principal)] text-[var(--branco)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and description */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-titulo">
                iAzul
              </span>
              <span className="text-sm">
                INSTITUTO AZUL
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Consultoria e treinamento especializado em ABA para famílias e profissionais 
              que trabalham com autismo, unindo evidência científica ao cuidado humano.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">Siga-nos:</p>
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 bg-[var(--azul-medio)] rounded-full flex items-center justify-center">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-[var(--azul-claro)] transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-[var(--azul-claro)] transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-[var(--azul-claro)] transition-colors">Serviços</a></li>
              <li><a href="#cursos" className="hover:text-[var(--azul-claro)] transition-colors">Cursos</a></li>
              <li><a href="#blog" className="hover:text-[var(--azul-claro)] transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-[var(--azul-claro)] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[var(--azul-claro)] transition-colors">Consultoria</a></li>
              <li><a href="#" className="hover:text-[var(--azul-claro)] transition-colors">Supervisão</a></li>
              <li><a href="#" className="hover:text-[var(--azul-claro)] transition-colors">Treinamentos</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">(11) 9 9999-9999</p>
                <p className="text-[var(--azul-claro)]">Seg a Sex, 8h às 18h</p>
              </div>
              <div>
                <p className="font-medium">contato@institutoazul.com.br</p>
                <p className="text-[var(--azul-claro)]">Resposta em até 24h</p>
              </div>
              <div>
                <p className="font-medium">Rua das Flores, 123</p>
                <p>Vila Madalena - São Paulo/SP</p>
                <p>CEP: 01234-567</p>
              </div>
              <button className="bg-[var(--azul-medio)] text-[var(--branco)] px-4 py-2 rounded-lg hover:bg-[var(--azul-claro)] transition-colors text-sm font-medium">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="border-t border-[var(--azul-medio)] pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-bold">Receba nossas novidades</h3>
            <p className="text-[var(--azul-claro)]">
              Conteúdos exclusivos sobre ABA e autismo direto no seu e-mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 rounded-lg text-[var(--azul-principal)] placeholder-[var(--cinza-medio)] focus:outline-none focus:ring-2 focus:ring-[var(--azul-claro)]"
              />
              <button className="bg-[var(--azul-medio)] text-[var(--branco)] px-6 py-2 rounded-lg hover:bg-[var(--azul-claro)] transition-colors font-medium">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-[var(--azul-medio)] pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <a href="#" className="hover:text-[var(--azul-claro)] transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--azul-claro)] transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--azul-claro)] transition-colors">Cookies</a>
          </div>
          <p className="text-[var(--azul-claro)]">
            © 2024 Instituto Azul. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

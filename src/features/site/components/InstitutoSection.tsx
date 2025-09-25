import React from 'react';

const InstitutoSection: React.FC = () => {
  return (
    <section id="inicio" className="py-16 bg-[var(--branco)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and subtitle */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--azul-principal)] font-titulo">
                Instituto Azul
              </h2>
              <p className="text-xl text-[var(--cinza-escuro)] mt-4">
                Análise do Comportamento Aplicada ao Autismo
              </p>
            </div>
          </div>

          {/* Right side - Description and buttons */}
          <div className="space-y-8">
            <p className="text-lg text-[var(--cinza-escuro)] leading-relaxed">
              Consultoria e treinamento especializado em ABA para famílias e profissionais 
              que trabalham com autismo, unindo evidência científica ao cuidado humano.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--azul-principal)] text-[var(--branco)] px-8 py-3 rounded-lg hover:bg-[var(--azul-medio)] transition-colors font-medium text-center">
                Fale Conosco
              </button>
              <button className="border-2 border-[var(--azul-principal)] text-[var(--azul-principal)] px-8 py-3 rounded-lg hover:bg-[var(--azul-principal)] hover:text-[var(--branco)] transition-colors font-medium text-center">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Separator with arrow */}
      <div className="flex justify-center mt-16">
        <div className="flex flex-col items-center">
          <div className="w-full h-px bg-[var(--cinza-claro)] max-w-4xl"></div>
          <div className="mt-4">
            <svg className="w-6 h-6 text-[var(--cinza-medio)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutoSection;

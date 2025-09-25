import React from 'react';

const ServicosSection: React.FC = () => {
  const servicos = [
    "Consultoria em ABA para Famílias",
    "Supervisão de Profissionais", 
    "Treinamentos e Capacitações"
  ];

  return (
    <section id="servicos" className="py-16 bg-[var(--branco)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--azul-principal)] font-titulo">
              Alguns de nossos
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--azul-principal)] font-titulo mt-2">
              Serviços
            </h2>
          </div>

          {/* Right side - Services list */}
          <div className="space-y-4">
            {servicos.map((servico, index) => (
              <div 
                key={index}
                className="bg-[var(--branco)] border-2 border-[var(--cinza-claro)] rounded-lg p-6 hover:border-[var(--azul-principal)] hover:shadow-[var(--sombra-suave)] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-[var(--azul-principal)]">
                    {servico}
                  </span>
                  <svg className="w-5 h-5 text-[var(--azul-principal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;

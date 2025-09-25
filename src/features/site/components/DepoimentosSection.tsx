import React from 'react';

const DepoimentosSection: React.FC = () => {
  return (
    <section className="py-16 bg-[var(--azul-principal)] relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-[var(--branco)] space-y-8">
          <h2 className="text-4xl font-bold font-titulo">
            Compartilhe a sua história
          </h2>
          
          <p className="text-xl leading-relaxed">
            Sua experiência pode <span className="font-bold">inspirar</span> outras famílias na jornada!
          </p>
          
          <div className="pt-4">
            <button className="bg-[var(--branco)] text-[var(--azul-principal)] px-8 py-3 rounded-lg hover:bg-[var(--cinza-claro)] transition-colors font-medium border-2 border-[var(--branco)] hover:border-[var(--cinza-claro)]">
              Enviar depoimento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;

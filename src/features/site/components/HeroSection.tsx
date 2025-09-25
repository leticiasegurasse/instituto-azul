import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--azul-principal)] bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="space-y-4">
            {/* Small text */}
            <div className="text-[var(--branco)] text-lg">
              <span>Transformando</span>
            </div>
            <div className="text-[var(--branco)] text-lg">
              <span>vidas com</span>
            </div>
            
            {/* Large text with colored backgrounds */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-[var(--branco)] rounded-lg px-4 py-2">
                <span className="text-[var(--azul-claro)] text-3xl font-bold font-titulo">
                  Ciência e
                </span>
              </div>
              <div className="bg-[var(--branco)] rounded-lg px-4 py-2">
                <span className="text-[var(--autismo-vermelho)] text-3xl font-bold font-titulo">
                  Coração
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-[var(--branco)]">
          <span className="text-sm mb-2">Role para baixo</span>
          <div className="w-6 h-10 border-2 border-[var(--branco)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--branco)] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

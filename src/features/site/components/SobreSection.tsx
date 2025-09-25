import React from 'react';

const SobreSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-[var(--azul-principal)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[var(--azul-claro)] rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[var(--azul-suave)] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[var(--azul-medio)] rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-[var(--azul-claro)] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="bg-[var(--branco)] rounded-lg p-8 shadow-[var(--sombra-forte)]">
            <div className="aspect-video bg-[var(--cinza-claro)] rounded-lg flex items-center justify-center">
              <div className="text-center text-[var(--cinza-medio)]">
                <div className="w-16 h-16 bg-[var(--cinza-claro)] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Imagem ou vídeo</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-[var(--branco)] space-y-6">
            <h2 className="text-4xl font-bold font-titulo">
              Sobre o Instituto
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                O Instituto Azul nasceu em 2018, fruto do desejo de um Professor, Fonoaudiólogo 
                e Analista do Comportamento movido por uma paixão em comum: levar a Análise do 
                Comportamento Aplicada (ABA) para além da sala de aula e transformá-la em 
                ferramenta de impacto real na vida das pessoas.
              </p>
              
              <p>
                Mais do que um espaço de ensino, o Instituto Azul é uma comunidade de aprendizado 
                e acolhimento. Nosso compromisso é caminhar ao lado de pais, profissionais e 
                cuidadores, oferecendo atendimento, cursos, mentorias e apoio contínuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;

import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';

const HeroLanding: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--azul-pastel)] via-[var(--branco)] to-[var(--azul-suave)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--azul-claro)] rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--autismo-verde)] rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[var(--autismo-amarelo)] rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--azul-principal)] text-[var(--branco)] px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Curso Certificado</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--azul-principal)] font-titulo leading-tight">
                Aprenda a aplicar
                <span className="block text-[var(--autismo-verde)]">ABA na Fonoaudiologia</span>
                e transforme seus atendimentos
              </h1>
              <p className="text-xl text-[var(--cinza-escuro)] leading-relaxed">
                Curso prático e objetivo que ensina a aplicar os princípios da Análise do 
                Comportamento Aplicada (ABA) no atendimento fonoaudiológico, trazendo 
                estratégias para desenvolver a comunicação funcional.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--azul-principal)]">30h</div>
                <div className="text-sm text-[var(--cinza-medio)]">Carga Horária</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--azul-principal)]">100%</div>
                <div className="text-sm text-[var(--cinza-medio)]">Online</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--azul-principal)]">Certificado</div>
                <div className="text-sm text-[var(--cinza-medio)]">Incluso</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--azul-principal)] text-[var(--branco)] px-8 py-4 rounded-xl hover:bg-[var(--azul-medio)] transition-all duration-300 font-bold text-lg shadow-[var(--sombra-media)] hover:shadow-[var(--sombra-forte)] transform hover:-translate-y-1">
                🚀 Quero garantir minha vaga!
              </button>
              <button className="border-2 border-[var(--azul-principal)] text-[var(--azul-principal)] px-8 py-4 rounded-xl hover:bg-[var(--azul-principal)] hover:text-[var(--branco)] transition-all duration-300 font-bold text-lg">
                💬 Receber informações no WhatsApp
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-[var(--cinza-medio)]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>+500 profissionais formados</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certificação válida</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--azul-claro)] to-[var(--autismo-verde)] rounded-2xl p-8 shadow-[var(--sombra-forte)]">
                <div className="aspect-video bg-[var(--branco)] rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[var(--azul-principal)] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Play className="w-8 h-8 text-[var(--branco)] ml-1" />
                    </div>
                    <p className="text-[var(--azul-principal)] font-bold">Preview do Curso</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-[var(--autismo-amarelo)] text-[var(--branco)] px-4 py-2 rounded-full text-sm font-bold shadow-[var(--sombra-media)]">
                🔥 Vagas Limitadas
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--autismo-verde)] text-[var(--branco)] px-4 py-2 rounded-full text-sm font-bold shadow-[var(--sombra-media)]">
                ⭐ 4.9/5 Avaliação
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-[var(--azul-principal)]">
          <span className="text-sm mb-2">Descubra mais sobre o curso</span>
          <div className="w-6 h-10 border-2 border-[var(--azul-principal)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--azul-principal)] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;

import React from 'react';
import { AlertTriangle, Target, Users, BookOpen } from 'lucide-react';

const ProblemaSolucao: React.FC = () => {
  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-[var(--autismo-vermelho)]" />,
      title: "Dificuldade em aplicar técnicas comportamentais",
      description: "Muitos fonoaudiólogos têm dificuldade em estruturar intervenções comportamentais de forma eficaz."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[var(--autismo-vermelho)]" />,
      title: "Falta de integração entre ABA e Fonoaudiologia",
      description: "Poucos cursos conectam efetivamente os princípios da ABA com as práticas fonoaudiológicas."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[var(--autismo-vermelho)]" />,
      title: "Necessidade de ferramentas práticas",
      description: "Profissionais precisam de estratégias concretas para melhorar a comunicação de pacientes com TEA."
    }
  ];

  const publicoAlvo = [
    { icon: <Users className="w-5 h-5" />, text: "Fonoaudiólogos clínicos" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Estudantes de fonoaudiologia" },
    { icon: <Target className="w-5 h-5" />, text: "Profissionais da saúde que trabalham com TEA" }
  ];

  return (
    <section className="py-20 bg-[var(--branco)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problemas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--azul-principal)] font-titulo mb-4">
              Você se identifica com esses desafios?
            </h2>
            <p className="text-xl text-[var(--cinza-escuro)] max-w-3xl mx-auto">
              Muitos profissionais enfrentam dificuldades comuns no atendimento de pacientes com TEA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemas.map((problema, index) => (
              <div key={index} className="bg-[var(--cinza-claro)] rounded-xl p-6 hover:shadow-[var(--sombra-media)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {problema.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--azul-principal)] mb-2">
                      {problema.title}
                    </h3>
                    <p className="text-[var(--cinza-escuro)] leading-relaxed">
                      {problema.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solução */}
        <div className="bg-gradient-to-r from-[var(--azul-principal)] to-[var(--azul-medio)] rounded-2xl p-12 text-[var(--branco)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-titulo mb-6">
                A solução que você precisa
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                Um curso prático e objetivo que ensina a aplicar os princípios da Análise do 
                Comportamento Aplicada (ABA) no atendimento fonoaudiológico, trazendo estratégias 
                para desenvolver a comunicação funcional e aumentar os resultados terapêuticos.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[var(--autismo-verde)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--branco)] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg">Conteúdo 100% prático e aplicável</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[var(--autismo-verde)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--branco)] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg">Estratégias testadas e comprovadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[var(--autismo-verde)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--branco)] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg">Resultados imediatos no consultório</span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--branco)] rounded-xl p-8 text-[var(--azul-principal)]">
              <h3 className="text-2xl font-bold mb-6 text-center">Público-Alvo</h3>
              <div className="space-y-4">
                {publicoAlvo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-[var(--autismo-verde)]">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemaSolucao;

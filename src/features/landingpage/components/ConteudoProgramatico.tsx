import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Target, Users, FileText, Brain, MessageSquare } from 'lucide-react';

const ConteudoProgramatico: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modulos = [
    {
      numero: 1,
      titulo: "Fundamentos da ABA aplicados à Fonoaudiologia",
      icon: <Brain className="w-6 h-6" />,
      duracao: "4 horas",
      conteudo: [
        "Princípios básicos da Análise do Comportamento",
        "Como integrar ABA com práticas fonoaudiológicas",
        "Análise funcional do comportamento na comunicação",
        "Ética e responsabilidade profissional"
      ]
    },
    {
      numero: 2,
      titulo: "Desenvolvimento da linguagem e atrasos de fala",
      icon: <BookOpen className="w-6 h-6" />,
      duracao: "5 horas",
      conteudo: [
        "Marcos do desenvolvimento típico",
        "Identificação de atrasos e desvios",
        "Avaliação comportamental da comunicação",
        "Estabelecimento de objetivos terapêuticos"
      ]
    },
    {
      numero: 3,
      titulo: "Estratégias práticas: prompting, fading e reforço",
      icon: <Target className="w-6 h-6" />,
      duracao: "6 horas",
      conteudo: [
        "Técnicas de prompting e fading",
        "Sistemas de reforço positivo",
        "Extinção e punição positiva",
        "Generalização e manutenção de comportamentos"
      ]
    },
    {
      numero: 4,
      titulo: "Treino de ecoicos, mandos e tatos",
      icon: <MessageSquare className="w-6 h-6" />,
      duracao: "5 horas",
      conteudo: [
        "Desenvolvimento de ecoicos",
        "Ensino de mandos (pedidos)",
        "Desenvolvimento de tatos (nomeação)",
        "Sequência de ensino e hierarquia de habilidades"
      ]
    },
    {
      numero: 5,
      titulo: "Uso de PECS e alternativas de comunicação",
      icon: <FileText className="w-6 h-6" />,
      duracao: "4 horas",
      conteudo: [
        "Sistema de Comunicação por Troca de Figuras (PECS)",
        "Tecnologia assistiva na comunicação",
        "Adaptação de materiais para diferentes idades",
        "Treinamento de familiares e cuidadores"
      ]
    },
    {
      numero: 6,
      titulo: "Planos terapêuticos individualizados",
      icon: <Users className="w-6 h-6" />,
      duracao: "6 horas",
      conteudo: [
        "Elaboração de planos de intervenção",
        "Coleta e análise de dados",
        "Ajustes baseados em evidências",
        "Trabalho em equipe multidisciplinar"
      ]
    }
  ];

  const toggleModule = (numero: number) => {
    setExpandedModule(expandedModule === numero ? null : numero);
  };

  return (
    <section className="py-20 bg-[var(--cinza-claro)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--azul-principal)] font-titulo mb-4">
            Conteúdo Programático
          </h2>
          <p className="text-xl text-[var(--cinza-escuro)] max-w-3xl mx-auto">
            Um curso completo com 30 horas de conteúdo prático e aplicável, 
            dividido em 6 módulos estratégicos
          </p>
        </div>

        <div className="space-y-6">
          {modulos.map((modulo) => (
            <div 
              key={modulo.numero}
              className="bg-[var(--branco)] rounded-xl shadow-[var(--sombra-suave)] hover:shadow-[var(--sombra-media)] transition-all duration-300 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleModule(modulo.numero)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--azul-principal)] rounded-full flex items-center justify-center text-[var(--branco)] font-bold text-lg">
                      {modulo.numero}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-[var(--azul-principal)]">
                        {modulo.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--azul-principal)]">
                          {modulo.titulo}
                        </h3>
                        <p className="text-[var(--cinza-medio)]">
                          Duração: {modulo.duracao}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-[var(--azul-principal)]">
                    {expandedModule === modulo.numero ? 
                      <ChevronUp className="w-6 h-6" /> : 
                      <ChevronDown className="w-6 h-6" />
                    }
                  </div>
                </div>
              </div>

              {expandedModule === modulo.numero && (
                <div className="px-6 pb-6 border-t border-[var(--cinza-claro)]">
                  <div className="pt-6">
                    <h4 className="text-lg font-bold text-[var(--azul-principal)] mb-4">
                      O que você vai aprender:
                    </h4>
                    <ul className="space-y-3">
                      {modulo.conteudo.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[var(--autismo-verde)] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[var(--cinza-escuro)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Total hours summary */}
        <div className="mt-12 bg-gradient-to-r from-[var(--azul-principal)] to-[var(--azul-medio)] rounded-xl p-8 text-[var(--branco)] text-center">
          <h3 className="text-2xl font-bold mb-4">Resumo do Curso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold">30h</div>
              <div className="text-[var(--azul-claro)]">Carga Horária Total</div>
            </div>
            <div>
              <div className="text-3xl font-bold">6</div>
              <div className="text-[var(--azul-claro)]">Módulos Práticos</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-[var(--azul-claro)]">Aplicável no Consultório</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConteudoProgramatico;

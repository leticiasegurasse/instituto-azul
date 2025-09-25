import React from 'react';
import { Heart, GraduationCap, Users, TrendingUp } from 'lucide-react';

const DiferenciaisSection: React.FC = () => {
  const diferenciais = [
    {
      icon: <Heart className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Afeto e Acolhimento",
      description: "Mais do que ciência, oferecemos cuidado humano. O afeto está presente em cada atendimento, criando vínculos que favorecem o aprendizado e o desenvolvimento."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Profissionais Especializados",
      description: "Nossa equipe é formada por especialistas em Análise do Comportamento Aplicada (ABA), com sólida formação acadêmica e prática clínica."
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Foco no Inclusão",
      description: "Atuamos para promover inclusão e autonomia, fortalecendo vínculos familiares, sociais e escolares de cada pessoa."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Resultados Comprovados",
      description: "Nossas práticas são fundamentadas em evidências científicas, garantindo resultados consistentes e mensuráveis."
    }
  ];

  return (
    <section id="diferenciais" className="py-16 bg-[var(--cinza-claro)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--azul-principal)] font-titulo">
            Diferenciais
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((diferencial, index) => (
            <div 
              key={index}
              className="bg-[var(--branco)] rounded-lg p-6 shadow-[var(--sombra-suave)] hover:shadow-[var(--sombra-media)] transition-shadow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex justify-center">
                  {diferencial.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--azul-principal)] font-titulo">
                  {diferencial.title}
                </h3>
                <p className="text-[var(--cinza-escuro)] leading-relaxed">
                  {diferencial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;

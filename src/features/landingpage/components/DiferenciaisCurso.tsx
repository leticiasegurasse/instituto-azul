import React from 'react';
import { Target, Award, Users, Clock, FileText, Shield } from 'lucide-react';

const DiferenciaisCurso: React.FC = () => {
  const diferenciais = [
    {
      icon: <Target className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Curso voltado especificamente para fonoaudiólogos",
      description: "Conteúdo desenvolvido exclusivamente para profissionais da fonoaudiologia, com linguagem e exemplos específicos da área."
    },
    {
      icon: <Award className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Conteúdo prático + aplicabilidade imediata",
      description: "Não é só teoria! Você sai do curso com ferramentas prontas para usar no seu consultório no dia seguinte."
    },
    {
      icon: <Shield className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Certificação válida como extensão",
      description: "Certificado reconhecido que pode ser usado para progressão na carreira e comprovação de especialização."
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Exemplos reais e casos práticos",
      description: "Aprenda com casos reais de pacientes, situações que você enfrenta no dia a dia do consultório."
    },
    {
      icon: <FileText className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Material complementar exclusivo",
      description: "Protocolos, guias práticos, formulários e materiais que você pode usar diretamente com seus pacientes."
    },
    {
      icon: <Clock className="w-8 h-8 text-[var(--azul-principal)]" />,
      title: "Flexibilidade total de horários",
      description: "Aulas ao vivo com gravações disponíveis, permitindo que você estude no seu ritmo e horário."
    }
  ];

  return (
    <section className="py-20 bg-[var(--branco)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--azul-principal)] font-titulo mb-4">
            Por que escolher nosso curso?
          </h2>
          <p className="text-xl text-[var(--cinza-escuro)] max-w-3xl mx-auto">
            Diferenciais que fazem a diferença na sua formação profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((diferencial, index) => (
            <div 
              key={index}
              className="bg-[var(--branco)] border-2 border-[var(--cinza-claro)] rounded-xl p-8 hover:border-[var(--azul-principal)] hover:shadow-[var(--sombra-media)] transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[var(--azul-pastel)] rounded-full flex items-center justify-center group-hover:bg-[var(--azul-principal)] transition-colors duration-300">
                  <div className="group-hover:text-[var(--branco)] transition-colors duration-300">
                    {diferencial.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--azul-principal)] group-hover:text-[var(--azul-medio)] transition-colors duration-300">
                  {diferencial.title}
                </h3>
                <p className="text-[var(--cinza-escuro)] leading-relaxed">
                  {diferencial.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[var(--autismo-verde)] to-[var(--autismo-azul)] rounded-2xl p-8 text-[var(--branco)]">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar sua prática profissional?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a centenas de fonoaudiólogos que já transformaram seus atendimentos
            </p>
            <button className="bg-[var(--branco)] text-[var(--azul-principal)] px-8 py-4 rounded-xl hover:bg-[var(--cinza-claro)] transition-colors font-bold text-lg shadow-[var(--sombra-media)] hover:shadow-[var(--sombra-forte)] transform hover:-translate-y-1">
              🚀 Garantir minha vaga agora!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisCurso;

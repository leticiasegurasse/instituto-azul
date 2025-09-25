import React from 'react';
import { CheckCircle, TrendingUp, Heart, Star, Users, Target } from 'lucide-react';

const Beneficios: React.FC = () => {
  const beneficios = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[var(--autismo-verde)]" />,
      title: "Aprenda a estruturar sessões mais eficazes",
      description: "Organize suas intervenções de forma sistemática e obtenha resultados mais rápidos e consistentes."
    },
    {
      icon: <Heart className="w-6 h-6 text-[var(--autismo-verde)]" />,
      title: "Melhore a adesão dos pacientes e famílias",
      description: "Técnicas que aumentam o engajamento e a participação ativa das famílias no processo terapêutico."
    },
    {
      icon: <Star className="w-6 h-6 text-[var(--autismo-verde)]" />,
      title: "Diferencie-se no mercado com conhecimento em ABA",
      description: "Torne-se um profissional mais completo e competitivo no mercado de trabalho."
    },
    {
      icon: <Target className="w-6 h-6 text-[var(--autismo-verde)]" />,
      title: "Tenha mais segurança ao lidar com casos complexos",
      description: "Adquira confiança e ferramentas para trabalhar com os casos mais desafiadores."
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--autismo-verde)]" />,
      title: "Aumente sua rede de contatos profissionais",
      description: "Conecte-se com outros fonoaudiólogos e profissionais da área de TEA."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[var(--autismo-verde)]" />,
      title: "Resultados mensuráveis e comprovados",
      description: "Aprenda a medir e documentar o progresso dos seus pacientes de forma objetiva."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--azul-pastel)] to-[var(--azul-suave)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--azul-principal)] font-titulo mb-4">
            Benefícios que você vai conquistar
          </h2>
          <p className="text-xl text-[var(--cinza-escuro)] max-w-3xl mx-auto">
            Transforme sua prática profissional e obtenha resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="bg-[var(--branco)] rounded-xl p-6 shadow-[var(--sombra-suave)] hover:shadow-[var(--sombra-media)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--autismo-verde)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[var(--autismo-verde)] transition-colors duration-300">
                  <div className="group-hover:text-[var(--branco)] transition-colors duration-300">
                    {beneficio.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--azul-principal)] mb-2 group-hover:text-[var(--azul-medio)] transition-colors duration-300">
                    {beneficio.title}
                  </h3>
                  <p className="text-[var(--cinza-escuro)] leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results section */}
        <div className="mt-16 bg-[var(--branco)] rounded-2xl p-8 shadow-[var(--sombra-media)]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--azul-principal)] mb-4">
              Resultados que nossos alunos alcançaram
            </h3>
            <p className="text-[var(--cinza-escuro)]">
              Dados reais de profissionais que fizeram nosso curso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--azul-principal)] mb-2">85%</div>
              <div className="text-[var(--cinza-escuro)]">Aumento na eficácia das sessões</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--azul-principal)] mb-2">92%</div>
              <div className="text-[var(--cinza-escuro)]">Melhoria na adesão das famílias</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--azul-principal)] mb-2">78%</div>
              <div className="text-[var(--cinza-escuro)]">Redução no tempo de tratamento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--azul-principal)] mb-2">95%</div>
              <div className="text-[var(--cinza-escuro)]">Satisfação dos alunos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;

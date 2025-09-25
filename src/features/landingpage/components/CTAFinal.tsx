import React, { useState, useEffect } from 'react';
import { Clock, Users, Award, CheckCircle } from 'lucide-react';

const CTAFinal: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const garantias = [
    "Garantia de 7 dias para experimentar",
    "Suporte completo durante o curso",
    "Material de apoio incluso",
    "Certificação reconhecida"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--azul-principal)] via-[var(--azul-medio)] to-[var(--autismo-azul)] text-[var(--branco)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--azul-claro)] rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--autismo-verde)] rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[var(--autismo-amarelo)] rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-titulo mb-6">
            Não perca esta oportunidade única!
          </h2>
          <p className="text-xl text-[var(--azul-claro)] max-w-3xl mx-auto mb-8">
            Vagas limitadas para garantir atenção personalizada e qualidade excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Urgency */}
          <div className="space-y-8">
            {/* Countdown timer */}
            <div className="bg-[var(--branco)] bg-opacity-10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Oferta termina em:</h3>
              <div className="flex justify-center gap-4 mb-4">
                <div className="bg-[var(--branco)] text-[var(--azul-principal)] rounded-xl p-4 min-w-[80px]">
                  <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm">Horas</div>
                </div>
                <div className="bg-[var(--branco)] text-[var(--azul-principal)] rounded-xl p-4 min-w-[80px]">
                  <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm">Min</div>
                </div>
                <div className="bg-[var(--branco)] text-[var(--azul-principal)] rounded-xl p-4 min-w-[80px]">
                  <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-sm">Seg</div>
                </div>
              </div>
              <p className="text-[var(--azul-claro)] text-sm">
                Após esse período, o preço volta ao valor normal
              </p>
            </div>

            {/* Price comparison */}
            <div className="bg-[var(--branco)] bg-opacity-10 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">R$ 497</div>
                <div className="text-[var(--azul-claro)] line-through text-xl mb-4">De R$ 997</div>
                <div className="bg-[var(--autismo-verde)] text-[var(--branco)] px-4 py-2 rounded-full text-sm font-bold inline-block">
                  Economia de R$ 500
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-3">
              {garantias.map((garantia, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--autismo-verde)]" />
                  <span>{garantia}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="bg-[var(--branco)] rounded-2xl p-8 text-[var(--azul-principal)]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Garanta sua vaga agora!
              </h3>
              <p className="text-[var(--cinza-escuro)]">
                Últimas vagas disponíveis para a próxima turma
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[var(--autismo-verde)]" />
                <span>Máximo 30 alunos por turma</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--autismo-verde)]" />
                <span>30 horas de conteúdo prático</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[var(--autismo-verde)]" />
                <span>Certificação inclusa</span>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-[var(--azul-principal)] text-[var(--branco)] py-4 rounded-xl hover:bg-[var(--azul-medio)] transition-colors font-bold text-lg shadow-[var(--sombra-media)] hover:shadow-[var(--sombra-forte)] transform hover:-translate-y-1">
                🚀 Quero garantir minha vaga!
              </button>
              
              <button className="w-full border-2 border-[var(--azul-principal)] text-[var(--azul-principal)] py-4 rounded-xl hover:bg-[var(--azul-principal)] hover:text-[var(--branco)] transition-colors font-bold text-lg">
                💬 Falar no WhatsApp
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-[var(--cinza-medio)]">
              <p>Pagamento 100% seguro</p>
              <p>Cartão de crédito, débito ou PIX</p>
            </div>
          </div>
        </div>

        {/* Final message */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--branco)] bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Sua jornada de transformação profissional começa aqui
            </h3>
            <p className="text-lg text-[var(--azul-claro)]">
              Junte-se a centenas de fonoaudiólogos que já transformaram sua prática 
              e estão obtendo resultados excepcionais com seus pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;

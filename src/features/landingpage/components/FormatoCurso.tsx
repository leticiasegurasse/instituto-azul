import React from 'react';
import { Clock, Video, FileText, Award, Users, Calendar } from 'lucide-react';

const FormatoCurso: React.FC = () => {
  const formatos = [
    {
      icon: <Clock className="w-6 h-6 text-[var(--azul-principal)]" />,
      title: "Carga horária: 30 horas",
      description: "Conteúdo completo distribuído em 6 módulos práticos"
    },
    {
      icon: <Video className="w-6 h-6 text-[var(--azul-principal)]" />,
      title: "Online e ao vivo",
      description: "Aulas interativas com possibilidade de perguntas em tempo real"
    },
    {
      icon: <FileText className="w-6 h-6 text-[var(--azul-principal)]" />,
      title: "Acesso às gravações",
      description: "Assista quantas vezes quiser por tempo determinado"
    },
    {
      icon: <FileText className="w-6 h-6 text-[var(--azul-principal)]" />,
      title: "Material de apoio",
      description: "PDFs, protocolos e guias práticos para download"
    },
    {
      icon: <Award className="w-6 h-6 text-[var(--azul-principal)]" />,
      title: "Certificação inclusa",
      description: "Certificado válido como extensão universitária"
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--azul-principal)]" />,
      title: "Turma limitada",
      description: "Máximo de 30 alunos para garantir atenção personalizada"
    }
  ];

  const cronograma = [
    { dia: "Segunda", horario: "19h às 21h", modulo: "Módulo 1: Fundamentos da ABA" },
    { dia: "Quarta", horario: "19h às 21h", modulo: "Módulo 2: Desenvolvimento da linguagem" },
    { dia: "Sexta", horario: "19h às 21h", modulo: "Módulo 3: Estratégias práticas" },
    { dia: "Segunda", horario: "19h às 21h", modulo: "Módulo 4: Treino de ecoicos, mandos e tatos" },
    { dia: "Quarta", horario: "19h às 21h", modulo: "Módulo 5: PECS e alternativas" },
    { dia: "Sexta", horario: "19h às 21h", modulo: "Módulo 6: Planos terapêuticos" }
  ];

  return (
    <section className="py-20 bg-[var(--branco)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--azul-principal)] font-titulo mb-4">
            Formato do Curso
          </h2>
          <p className="text-xl text-[var(--cinza-escuro)] max-w-3xl mx-auto">
            Tudo que você precisa saber sobre como funciona o curso
          </p>
        </div>

        {/* Format details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formatos.map((formato, index) => (
            <div 
              key={index}
              className="bg-[var(--cinza-claro)] rounded-xl p-6 hover:shadow-[var(--sombra-suave)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {formato.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--azul-principal)] mb-2">
                    {formato.title}
                  </h3>
                  <p className="text-[var(--cinza-escuro)]">
                    {formato.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-gradient-to-r from-[var(--azul-principal)] to-[var(--azul-medio)] rounded-2xl p-8 text-[var(--branco)]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Cronograma das Aulas</h3>
            <p className="text-[var(--azul-claro)]">
              Aulas de 2 horas, 3 vezes por semana, durante 2 semanas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cronograma.map((aula, index) => (
              <div key={index} className="bg-[var(--branco)] bg-opacity-10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-[var(--azul-claro)]" />
                  <span className="font-bold">{aula.dia}</span>
                </div>
                <div className="text-[var(--azul-claro)] text-sm mb-2">
                  {aula.horario}
                </div>
                <div className="text-sm">
                  {aula.modulo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--branco)] border-2 border-[var(--azul-principal)] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--azul-principal)] mb-4">
              Investimento
            </h3>
            <div className="mb-6">
              <div className="text-4xl font-bold text-[var(--azul-principal)] mb-2">
                R$ 497
              </div>
              <div className="text-[var(--cinza-medio)] line-through">
                De R$ 997
              </div>
              <div className="text-[var(--autismo-verde)] font-bold">
                Economia de R$ 500
              </div>
            </div>
            <div className="space-y-2 text-[var(--cinza-escuro)] mb-6">
              <div className="flex items-center justify-center gap-2">
                <span>✓</span>
                <span>30 horas de conteúdo</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✓</span>
                <span>Material complementar</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✓</span>
                <span>Certificação inclusa</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✓</span>
                <span>Acesso às gravações</span>
              </div>
            </div>
            <button className="bg-[var(--azul-principal)] text-[var(--branco)] px-8 py-4 rounded-xl hover:bg-[var(--azul-medio)] transition-colors font-bold text-lg w-full">
              🚀 Quero garantir minha vaga!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatoCurso;

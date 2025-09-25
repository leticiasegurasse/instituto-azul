import React from 'react';
import { Star, Quote } from 'lucide-react';

const DepoimentosCurso: React.FC = () => {
  const depoimentos = [
    {
      nome: "Dra. Maria Silva",
      profissao: "Fonoaudióloga - São Paulo/SP",
      foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      texto: "O curso transformou completamente minha prática. Agora consigo estruturar melhor minhas sessões e os resultados são muito mais rápidos. Recomendo para todos os fonoaudiólogos!",
      avaliacao: 5
    },
    {
      nome: "Dr. João Santos",
      profissao: "Fonoaudiólogo - Rio de Janeiro/RJ",
      foto: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      texto: "Finalmente um curso que conecta ABA com fonoaudiologia de forma prática. As estratégias que aprendi já estão sendo aplicadas no meu consultório com excelentes resultados.",
      avaliacao: 5
    },
    {
      nome: "Dra. Ana Costa",
      profissao: "Fonoaudióloga - Belo Horizonte/MG",
      foto: "https://images.unsplash.com/photo-1594824388852-9a5bb1a8b5b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      texto: "Material excelente e professores muito didáticos. O curso me deu a confiança que precisava para trabalhar com casos mais complexos de TEA.",
      avaliacao: 5
    },
    {
      nome: "Dr. Carlos Oliveira",
      profissao: "Fonoaudiólogo - Brasília/DF",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      texto: "Investimento que vale cada centavo! O curso é muito bem estruturado e o suporte é excepcional. Já indico para meus colegas.",
      avaliacao: 5
    },
    {
      nome: "Dra. Fernanda Lima",
      profissao: "Fonoaudióloga - Porto Alegre/RS",
      foto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      texto: "As técnicas que aprendi revolucionaram meu atendimento. Meus pacientes estão evoluindo muito mais rápido e as famílias estão mais engajadas.",
      avaliacao: 5
    },
    {
      nome: "Dr. Pedro Alves",
      profissao: "Fonoaudiólogo - Salvador/BA",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      texto: "Curso excepcional! Conteúdo prático e aplicável desde o primeiro dia. Mudou completamente minha abordagem terapêutica.",
      avaliacao: 5
    }
  ];

  return (
    <section className="py-20 bg-[var(--cinza-claro)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--azul-principal)] font-titulo mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-[var(--cinza-escuro)] max-w-3xl mx-auto">
            Depoimentos reais de profissionais que transformaram sua prática
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div 
              key={index}
              className="bg-[var(--branco)] rounded-xl p-6 shadow-[var(--sombra-suave)] hover:shadow-[var(--sombra-media)] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(depoimento.avaliacao)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[var(--autismo-amarelo)] fill-current" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-[var(--azul-claro)] absolute -top-2 -left-2" />
                <p className="text-[var(--cinza-escuro)] leading-relaxed pl-6">
                  "{depoimento.texto}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img 
                  src={depoimento.foto} 
                  alt={depoimento.nome}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[var(--azul-principal)]">
                    {depoimento.nome}
                  </div>
                  <div className="text-sm text-[var(--cinza-medio)]">
                    {depoimento.profissao}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-[var(--azul-principal)] to-[var(--azul-medio)] rounded-2xl p-8 text-[var(--branco)]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Resultados que falam por si só
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-[var(--azul-claro)]">Profissionais formados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-[var(--azul-claro)]">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-[var(--azul-claro)]">Taxa de satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-[var(--azul-claro)]">Recomendariam o curso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosCurso;

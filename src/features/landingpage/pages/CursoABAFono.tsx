import React from 'react';
import HeroLanding from '../components/HeroLanding';
import ProblemaSolucao from '../components/ProblemaSolucao';
import ConteudoProgramatico from '../components/ConteudoProgramatico';
import DiferenciaisCurso from '../components/DiferenciaisCurso';
import Beneficios from '../components/Beneficios';
import FormatoCurso from '../components/FormatoCurso';
import DepoimentosCurso from '../components/DepoimentosCurso';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';

const CursoABAFono: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--branco)]">
      <HeroLanding />
      <ProblemaSolucao />
      <ConteudoProgramatico />
      <DiferenciaisCurso />
      <Beneficios />
      <FormatoCurso />
      <DepoimentosCurso />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default CursoABAFono;

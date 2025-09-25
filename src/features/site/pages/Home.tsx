import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import InstitutoSection from '../components/InstitutoSection';
import DiferenciaisSection from '../components/DiferenciaisSection';
import SobreSection from '../components/SobreSection';
import ServicosSection from '../components/ServicosSection';
import DepoimentosSection from '../components/DepoimentosSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--branco)]">
      <Header />
      <HeroSection />
      <InstitutoSection />
      <DiferenciaisSection />
      <SobreSection />
      <ServicosSection />
      <DepoimentosSection />
      <Footer />
    </div>
  );
};

export default Home;

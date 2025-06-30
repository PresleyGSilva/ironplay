import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import MovieGallery from '@/components/MovieGallery';
import VideoSection from '@/components/VideoSection';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import AvailableContent from '@/components/AvailableContent';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>IfinitPlay - O Melhor do Entretenimento em um Só Lugar</title>
        <meta name="description" content="Filmes, séries, esportes e canais ao vivo com qualidade 4K e estabilidade incomparável." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Helmet>
      <Hero />
      <MovieGallery />
      <VideoSection />
      <Benefits />
      <Testimonials />
      <AvailableContent />
      <Pricing />
      <Faq />
    </>
  );
};

export default HomePage;
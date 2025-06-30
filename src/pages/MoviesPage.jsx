import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MovieGallery from '@/components/MovieGallery';

const MoviesPage = () => {
  return (
    <>
      <Helmet>
        <title>Filmes - IfinitPlay</title>
        <meta name="description" content="Explore nosso vasto catálogo de filmes, dos clássicos aos últimos lançamentos." />
      </Helmet>
      <div className="container py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-12"
        >
          Catálogo de Filmes
        </motion.h1>
        <MovieGallery />
      </div>
    </>
  );
};

export default MoviesPage;
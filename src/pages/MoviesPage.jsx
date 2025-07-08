import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MovieGallery from '@/components/MovieGallery'; // Componente para exibir os filmes

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = 'c102aa0db01dee2c30776db9ae79249e'; // Sua chave da API do TMDb

  // Função para buscar filmes populares da API
  const fetchMovies = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`);
      const data = await res.json();
      setMovies(data.results || []);  // Armazenar os filmes populares na state
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  // Chama a função para buscar filmes sempre que a página for carregada
  useEffect(() => {
    fetchMovies();
  }, []);  // O array vazio garante que a busca aconteça apenas uma vez ao carregar

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
        
        {/* Exibir os filmes na tela */}
        <MovieGallery movies={movies} />
      </div>
    </>
  );
};

export default MoviesPage;

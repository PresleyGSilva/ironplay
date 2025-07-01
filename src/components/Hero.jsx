import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  // Função para buscar filmes populares na API do TMDb
  const fetchMovieImage = async () => {
    const API_KEY = 'c102aa0db01dee2c30776db9ae79249e'; // Substitua com sua chave da API
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

      if (randomMovie && randomMovie.backdrop_path) {
        setBackgroundImage(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
      } else {
        setBackgroundImage('https://via.placeholder.com/1920x1080'); // Fallback se não houver imagem
      }
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      setBackgroundImage('https://via.placeholder.com/1920x1080'); // Fallback em caso de erro
    }
  };

  // Chama a função para buscar imagens de filmes ao carregar o componente
  useEffect(() => {
    fetchMovieImage();
    
    // Define um intervalo de tempo para trocar a imagem (por exemplo, a cada 10 segundos)
    const interval = setInterval(fetchMovieImage, 10000);
    
    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
  }, []);

  return (
    <section className="w-full h-[90vh] sm:h-[80vh] lg:h-[75vh] text-center relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Imagem de fundo dinâmica */}
        <img
          className="w-full h-full object-cover"
          alt="Cena de filme"
          src={backgroundImage}
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e07] via-[#060e07]/60 to-transparent z-10" />
      </div>

      <div className="container z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            A experiência definitiva de entretenimento:
            <span className="text-green-500"> exclusiva, estável e incomparável!</span>
          </h1>
          <p className="mt-6 max-w-xl sm:max-w-2xl mx-auto text-lg text-gray-300">
            Filmes, séries, esportes e mais com qualidade superior e suporte dedicado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <a href="#planos">
            <Button size="lg" className="bg-green-500 text-white text-lg font-bold px-8 sm:px-10 py-6 rounded-full hover:bg-green-600 transition">
              ADQUIRA O SEU AGORA
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

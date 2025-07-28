import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const fetchMovieImage = async () => {
    const API_KEY = 'c102aa0db01dee2c30776db9ae79249e';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

      if (randomMovie && randomMovie.backdrop_path) {
        setBackgroundImage(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
      } else {
        setBackgroundImage('https://via.placeholder.com/1920x1080');
      }
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      setBackgroundImage('https://via.placeholder.com/1920x1080');
    }
  };

  useEffect(() => {
    fetchMovieImage();
    const interval = setInterval(fetchMovieImage, 20000); // Atualiza a imagem a cada 20s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[90vh] sm:h-[80vh] lg:h-[75vh] text-center relative flex items-center justify-center overflow-hidden">
      {/* Fundo da seção */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover brightness-[0.6] blur-[1px]"
          alt="Plano de fundo com cena de filme"
          src={backgroundImage}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e07] via-[#060e07]/50 to-transparent z-10" />
      </div>

      {/* Logo com texto centralizado verticalmente */}
   <div className="absolute top-6 left-6 z-30">
  <div className="relative">
    <img
      src="/assets/kingplay-logo.jpg"
      alt="Logo da plataforma KingPlay - streaming de filmes e séries"
      className="h-32 sm:h-40 md:h-48 w-auto transition-all duration-300"
    />

    {/* Nome FireFLick posicionado manualmente */}
 
 

  </div>
</div>



      {/* Conteúdo principal */}
      <div className="container z-20 px-4 mt-32">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white text-center mb-6">
            A experiência definitiva de entretenimento:
            <span className="text-[hsl(var(--primary))]"> exclusiva, estável e incomparável!</span>
          </h1>

          <p className="mt-6 max-w-xl sm:max-w-2xl mx-auto text-lg text-gray-300">
            Filmes, séries, esportes e muito mais com qualidade superior e suporte dedicado.
          </p>

          <p className="mt-4 text-sm text-[hsl(var(--highlight))] animate-pulse">
            Oferta promocional por tempo limitado!
          </p>

          {/* Botão com reflexo animado */}
          <a href="#planos" className="mt-8 relative inline-block">
            <Button
              size="lg"
              className="relative overflow-hidden bg-[hsl(var(--primary))] hover:bg-[hsl(145,100%,42%)] text-black text-lg font-bold px-8 sm:px-10 py-6 rounded-full hover:scale-105 transition-all flex items-center gap-2"
            >
              <Play size={20} /> ADQUIRA O SEU AGORA

              {/* Faixa de reflexo animada */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-[-75%] w-20 h-full bg-white/30
                  transform skew-x-[-20deg]
                  animate-[shine_2.5s_linear_infinite]"
              />
            </Button>

            {/* Estilo da animação */}
            <style>
              {`
                @keyframes shine {
                  0% {
                    left: -75%;
                  }
                  100% {
                    left: 125%;
                  }
                }
              `}
            </style>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

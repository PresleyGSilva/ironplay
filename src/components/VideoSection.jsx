import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const API_KEY = 'c102aa0db01dee2c30776db9ae79249e';

const VideoSection = () => {
  const [trailers, setTrailers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [erroIframe, setErroIframe] = useState(false);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const resMovies = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
        );
        const movieData = await resMovies.json();
        const popularMovies = movieData.results.slice(0, 5); // pegar só 5 filmes

        const trailerKeys = [];

        for (const movie of popularMovies) {
          const resVideos = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=pt-BR`
          );
          const videoData = await resVideos.json();
          const trailer = videoData.results.find(
            (v) => v.type === 'Trailer' && v.site === 'YouTube'
          );
          if (trailer) {
            trailerKeys.push(trailer.key);
          }
        }

        setTrailers(trailerKeys);
      } catch (err) {
        console.error('Erro ao buscar trailers:', err);
      }
    };

    fetchTrailers();
  }, []);

  useEffect(() => {
    if (trailers.length === 0) return;

    const interval = setInterval(() => {
      setErroIframe(false); // resetar erro a cada troca
      setCurrentIndex((prev) => (prev + 1) % trailers.length);
    }, 20000); // troca a cada 20 segundos

    return () => clearInterval(interval);
  }, [trailers]);

  const currentTrailer = trailers[currentIndex];

  return (
    <section className="py-20 md:py-28 text-center">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-black tracking-tighter"
        >
          Assista aos Trailers em Destaque
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
        >
          {currentTrailer && !erroIframe ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentTrailer}?rel=0&autoplay=1&mute=1`}
              title="Trailer do Filme"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setErroIframe(true)}
            />
          ) : currentTrailer ? (
            <div className="flex items-center justify-center w-full h-full bg-black text-white text-lg">
              <a
                href={`https://www.youtube.com/watch?v=${currentTrailer}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Assistir no YouTube
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full text-white text-lg">
              Carregando trailers...
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

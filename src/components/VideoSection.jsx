import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const API_KEY = 'c102aa0db01dee2c30776db9ae79249e';

const VideoSection = () => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [erroIframe, setErroIframe] = useState(false);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const resMovies = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
        );
        const movieData = await resMovies.json();
        const firstMovie = movieData.results?.[0];
        if (!firstMovie) return;

        const resVideos = await fetch(
          `https://api.themoviedb.org/3/movie/${firstMovie.id}/videos?api_key=${API_KEY}&language=pt-BR`
        );
        const videoData = await resVideos.json();
        const trailer = videoData.results.find(
          (v) => v.type === 'Trailer' && v.site === 'YouTube'
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (err) {
        console.error('Erro ao buscar trailer:', err);
      }
    };

    fetchTrailer();
  }, []);

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
          Assista ao Trailer em Destaque
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
        >
          {trailerKey && !erroIframe ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?rel=0`}
              title="Trailer do Filme"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setErroIframe(true)} // fallback se iframe falhar
            />
          ) : trailerKey ? (
            <div className="flex items-center justify-center w-full h-full bg-black text-white text-lg">
              <a
                href={`https://www.youtube.com/watch?v=${trailerKey}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Assista ao trailer no YouTube
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full text-white text-lg">
              Carregando trailer...
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

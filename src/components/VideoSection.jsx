import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const API_KEY = 'c102aa0db01dee2c30776db9ae79249e';

const VideoSection = () => {
  const [trailers, setTrailers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);

  const loadYouTubeAPI = () => {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve(window.YT);
      } else {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
        document.body.appendChild(tag);
      }
    });
  };

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
        );
        const data = await res.json();
        const movies = data.results.slice(0, 10); // você pode aumentar aqui

        const trailerKeys = [];

        for (const movie of movies) {
          const resVideo = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=pt-BR`
          );
          const videoData = await resVideo.json();
          const trailer = videoData.results.find(
            (v) => v.type === 'Trailer' && v.site === 'YouTube'
          );
          if (trailer) trailerKeys.push(trailer.key);
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

    loadYouTubeAPI().then((YT) => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new YT.Player('yt-player', {
        videoId: trailers[currentIndex],
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,        // ⛔ remove controles do usuário
          modestbranding: 1,  // ✅ remove logo do YouTube
          rel: 0,
          fs: 0,              // ⛔ desativa fullscreen
          disablekb: 1,       // ⛔ desativa teclado
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) {
              // Vai para o próximo trailer
              setCurrentIndex((prev) => (prev + 1) % trailers.length);
            }
          },
        },
      });
    });
  }, [trailers, currentIndex]);

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
          <div
            id="yt-player"
            className="w-full h-full pointer-events-none" // ⛔ impede clique no player
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

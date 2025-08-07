import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Para o redirecionamento

const API_KEY = 'c102aa0db01dee2c30776db9ae79249e';

const VideoSection = () => {
  const [trailers, setTrailers] = useState([]);
  const [shownKeys, setShownKeys] = useState(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);
  const [fadeKey, setFadeKey] = useState(0);

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

  const fetchTrailers = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
      );
      const data = await res.json();
      const movies = data.results || [];

      const newTrailers = [];

      for (const movie of movies) {
        const resVideo = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=pt-BR`
        );
        const videoData = await resVideo.json();
        const trailer = videoData.results?.find(
          (v) => v.type === 'Trailer' && v.site === 'YouTube' && !shownKeys.has(v.key)
        );
        if (trailer) {
          newTrailers.push({ key: trailer.key });
        }
      }

      if (newTrailers.length > 0) {
        setTrailers(newTrailers);
        setShownKeys((prev) => {
          const updated = new Set(prev);
          newTrailers.forEach((t) => updated.add(t.key));
          return updated;
        });
        // Embaralhar trailers ou começar com um índice aleatório
        setCurrentIndex(Math.floor(Math.random() * newTrailers.length));
      } else {
        setCurrentIndex(0); // reinicia do começo se não achar novos
      }
    } catch (err) {
      console.error('Erro ao buscar trailers:', err);
    }
  };

  const nextTrailer = () => {
    if (trailers.length === 0) return;

    const nextIndex = (currentIndex + 1) % trailers.length; // Faz o loop
    setCurrentIndex(nextIndex);
    setFadeKey((prev) => prev + 1); // força atualização visual
  };

  useEffect(() => {
    fetchTrailers();
  }, []);

  useEffect(() => {
    if (trailers.length === 0) return;

    loadYouTubeAPI().then((YT) => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new YT.Player(`yt-player-${fadeKey}`, {
        videoId: trailers[currentIndex]?.key,
        playerVars: {
          autoplay: 1,
          mute: isMuted ? 1 : 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          disablekb: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) {
              nextTrailer();
            }
          },
        },
      });
    });

    // cleanup
    return () => {
      if (playerRef.current) playerRef.current.destroy();
    };
  }, [trailers, currentIndex, isMuted, fadeKey]);

  return (
    <section className="py-20 md:py-28 text-center relative">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-black tracking-tighter text-white"
        >
          Assista aos Trailers em Destaque
        </motion.h2>

        <div className="mt-12 max-w-4xl mx-auto relative aspect-video rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={fadeKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <div
                id={`yt-player-${fadeKey}`}
                className="w-full h-full pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>

          {/* Botão de volume */}
          <button
            onClick={() => setIsMuted((prev) => !prev)}
            className="absolute bottom-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full shadow-lg text-sm md:text-base"
          >
            {isMuted ? '🔇 Ativar som' : '🔊 Desativar som'}
          </button>

          {/* Botão "Assista agora" */}
          <a href="#planos">
            <button className="absolute bottom-4 left-4 z-10 bg-primary text-white px-6 py-3 rounded-full shadow-lg text-lg">
              Assista Agora
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

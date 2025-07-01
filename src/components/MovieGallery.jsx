import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const API_KEY = 'c102aa0db01dee2c30776db9ae79249e';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  const handleMovieClick = async (movieId) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (v) => v.type === 'Trailer' && v.site === 'YouTube'
      );
      if (trailer) {
        setSelectedTrailer(trailer.key);
        setShowModal(true);
      } else {
        alert('Trailer não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao carregar trailer:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
    const interval = setInterval(fetchMovies, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/30 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-white font-bold text-center mb-8">
          🎬 Catálogo de Filmes
        </h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Autoplay]}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div
                onClick={() => handleMovieClick(movie.id)}
                className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={
                    movie.poster_path
                      ? `${IMAGE_BASE}${movie.poster_path}`
                      : 'https://via.placeholder.com/300x450?text=Sem+Imagem'
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-center px-2 transition-opacity duration-300">
                  <p className="text-sm font-semibold">{movie.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal do trailer */}
      {showModal && selectedTrailer && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedTrailer}?autoplay=1`}
              title="Trailer do Filme"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedTrailer(null);
              }}
              className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1 text-xs hover:bg-red-500 hover:text-white"
            >
              ✕ Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieGallery;

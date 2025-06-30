import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const API_KEY = 'c102aa0db01dee2c30776db9ae79249e';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const SeriesCard = ({ series, index }) => {
  const { toast } = useToast();
  const title = series.name || series.title;
  const imageUrl = series.poster_path
    ? `${IMAGE_BASE}${series.poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sem+Imagem';

  const handleClick = () => {
    toast({
      title: 'Redirecionamento em breve! 🚧',
      description: `O clique para "${title}" ainda não foi implementado.`,
    });
  };

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
    >
      <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        <img className="w-full h-full object-cover" alt={title} src={imageUrl} loading="lazy" />
      </div>
      <p className="mt-2 text-center font-semibold text-white truncate">{title}</p>
    </motion.div>
  );
};

const SeriesPage = () => {
  const [generos, setGeneros] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Carrega os gêneros disponíveis
    const fetchGeneros = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=pt-BR`);
      const data = await res.json();
      setGeneros(data.genres || []);
    };
    fetchGeneros();
  }, []);

  useEffect(() => {
    // Carrega as séries da categoria selecionada
    const fetchSeries = async () => {
      if (!categoriaSelecionada) return;
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${categoriaSelecionada}&language=pt-BR`
      );
      const data = await res.json();
      setSeries(data.results || []);
    };
    fetchSeries();
  }, [categoriaSelecionada]);

  return (
    <>
      <Helmet>
        <title>Séries - DinoFlick</title>
        <meta name="description" content="Maratone as séries mais populares por categoria." />
      </Helmet>

      <div className="container py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-10"
        >
          Catálogo de Séries
        </motion.h1>

        {/* Botões de categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {generos.map((g) => (
            <button
              key={g.id}
              onClick={() => setCategoriaSelecionada(g.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                categoriaSelecionada === g.id
                  ? 'bg-primary text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        {/* Grid de séries */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {series.map((s, index) => (
            <SeriesCard key={s.id} series={s} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SeriesPage;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Trophy, Tv, Heart, ToyBrick, Ghost } from 'lucide-react';

// Dados para os cards de conteúdo
const content = [
  { icon: <Film className="h-8 w-8 text-primary" />, title: '+40.000 Filmes', description: 'Os maiores clássicos e os últimos lançamentos.', category: 'movies' },
  { icon: <Trophy className="h-8 w-8 text-primary" />, title: 'Canais Esportivos', description: 'Não perca nenhum lance do seu time do coração.', category: 'sports' },
  { icon: <Tv className="h-8 w-8 text-primary" />, title: 'Séries em Alta', description: 'Maratone as séries mais comentadas do momento.', category: 'tv' },
  { icon: <Heart className="h-8 w-8 text-primary" />, title: 'Canais Adultos', description: 'Conteúdo exclusivo com controle de acesso. (Opcional)', category: 'adult' },
  { icon: <ToyBrick className="h-8 w-8 text-primary" />, title: 'Canais Infantis', description: 'Diversão garantida para as crianças com segurança.', category: 'kids' },
  { icon: <Ghost className="h-8 w-8 text-primary" />, title: 'Animes', description: 'Uma vasta coleção dos seus animes favoritos.', category: 'anime' },
];

const ContentCard = ({ icon, title, description, index, bgImage }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative p-6 rounded-lg overflow-hidden bg-card border border-white/10 flex flex-col gap-4"
  >
    {/* Imagem de fundo do card */}
    <div
      className="w-full h-56 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>

    <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between bg-black/60 text-white">
      {/* Icone */}
      <div className="p-3 rounded-lg bg-primary/10">
        {icon}
      </div>

      {/* Título e descrição */}
      <div className="text-center mt-4">
        <span className="text-xl font-bold">{title}</span>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  </motion.div>
);

const AvailableContent = () => {
  const [categoryImages, setCategoryImages] = useState({
    movies: [],
    sports: [],
    tv: [],
    adult: [],
    kids: [],
    anime: [],
  });

  useEffect(() => {
    // Função para buscar imagens da API baseada na categoria
    const fetchCategoryImages = async () => {
      try {
        const categories = {
          movies: 'movie/popular',
          sports: 'tv/popular', // Ajuste se necessário para categorias específicas
          tv: 'tv/popular',
          adult: 'movie/popular', // Ajuste conforme a categoria adulta
          kids: 'movie/popular',
          anime: 'movie/popular', // Ajuste para animes, se houver uma categoria específica
        };

        const fetchedImages = {};

        for (const category in categories) {
          const res = await fetch(`https://api.themoviedb.org/3/${categories[category]}?api_key=c102aa0db01dee2c30776db9ae79249e&language=pt-BR`);
          const data = await res.json();
          const items = data.results.slice(0, 6); // Seleciona os primeiros 6 filmes/séries para cada categoria

          const images = items.map((item) => {
            return item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : 'https://via.placeholder.com/300x450?text=Sem+Imagem';
          });

          fetchedImages[category] = images;
        }

        setCategoryImages(fetchedImages);
      } catch (err) {
        console.error('Erro ao buscar imagens da categoria:', err);
      }
    };

    fetchCategoryImages();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-black/30">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-12"
        >
          Um Universo de Conteúdo
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <ContentCard
              key={index}
              index={index}
              {...item}
              bgImage={categoryImages[item.category]?.[index] || 'https://via.placeholder.com/300x450?text=Sem+Imagem'} // Garantindo que sempre tenha uma imagem
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableContent;

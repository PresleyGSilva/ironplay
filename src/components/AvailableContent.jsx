import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Tv, Heart, ToyBrick, Trophy, Ghost } from 'lucide-react';

// Novo conteúdo baseado no site oficial CineFlick
const content = [
  {
    icon: <Film className="h-8 w-8 text-primary" />,
    title: 'Filmes incríveis 🎥',
    description: 'Assista a clássicos, lançamentos e grandes produções vencedoras de prêmios, tudo em alta definição e com uma seleção que agrada a todos os gostos.',
    category: 'movies',
    image: 'https://oficialcineflick.com/wp-content/uploads/2024/12/FILMES-1.webp',
  },
  {
    icon: <Tv className="h-8 w-8 text-primary" />,
    title: 'Séries imperdíveis 📺',
    description: 'Descubra séries aclamadas e sucessos do momento, com temporadas completas disponíveis para você maratonar sem limites.',
    category: 'tv',
    image: 'https://oficialcineflick.com/wp-content/uploads/2024/12/SERIES-1.webp',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Canais adultos 😈',
    description: 'Toda a lista de canais adultos protegidos com senha para segurança das crianças.',
    category: 'adult',
    image: 'https://oficialcineflick.com/wp-content/uploads/2024/12/ADULTO-1.webp',
  },
  {
    icon: <ToyBrick className="h-8 w-8 text-primary" />,
    title: 'Canais infantis 🎈',
    description: 'Toda a lista para a criançada se divertir, além de Disney Plus e muito mais!',
    category: 'kids',
    image: 'https://oficialcineflick.com/wp-content/uploads/2024/12/INFANTIL-1.webp',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Esportes ao vivo',
    description: 'Prepare-se para ter todos os acessos aos canais de esporte, futebol, artes marciais e muito mais!',
    category: 'sports',
    image: 'https://oficialcineflick.com/wp-content/uploads/2024/12/ESPORTES-1.webp',
  },
  {
    icon: <Ghost className="h-8 w-8 text-primary" />,
    title: 'Animes CrunchRoll',
    description: 'Uma lista enorme com os animes do momento atualizados e em qualidade HD para maratonar.',
    category: 'anime',
    image: 'https://oficialcineflick.com/wp-content/uploads/2024/12/ANIMES-1.webp',
  },
];

// Componente de card com imagem de fundo
const ContentCard = ({ icon, title, description, index, bgImage }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative p-6 rounded-lg overflow-hidden bg-card border border-white/10 flex flex-col gap-4 shadow-lg"
  >
    <div
      className="w-full h-56 bg-cover bg-center rounded-md"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>

    <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between bg-black/60 text-white">
      <div className="p-3 rounded-lg bg-primary/10">
        {icon}
      </div>
      <div className="text-center mt-4">
        <span className="text-xl font-bold">{title}</span>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  </motion.div>
);

const AvailableContent = () => {
  return (
    <section className="py-20 md:py-28 bg-black/30">
      <div className="container text-center px-4 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-black tracking-tight text-white mb-12"
        >
          Confira o que você vai encontrar na KingPlayer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <ContentCard
              key={index}
              index={index}
              {...item}
              bgImage={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableContent;

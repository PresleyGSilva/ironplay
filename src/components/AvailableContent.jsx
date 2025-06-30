import React from 'react';
import { motion } from 'framer-motion';
import { Film, Trophy, Tv, Heart, ToyBrick, Ghost } from 'lucide-react';

const content = [
  { icon: <Film className="h-8 w-8 text-primary" />, title: '+40.000 Filmes', description: 'Os maiores clássicos e os últimos lançamentos.' },
  { icon: <Trophy className="h-8 w-8 text-primary" />, title: 'Canais Esportivos', description: 'Não perca nenhum lance do seu time do coração.' },
  { icon: <Tv className="h-8 w-8 text-primary" />, title: 'Séries em Alta', description: 'Maratone as séries mais comentadas do momento.' },
  { icon: <Heart className="h-8 w-8 text-primary" />, title: 'Canais Adultos', description: 'Conteúdo exclusivo com controle de acesso. (Opcional)' },
  { icon: <ToyBrick className="h-8 w-8 text-primary" />, title: 'Canais Infantis', description: 'Diversão garantida para as crianças com segurança.' },
  { icon: <Ghost className="h-8 w-8 text-primary" />, title: 'Animes', description: 'Uma vasta coleção dos seus animes favoritos.' },
];

const ContentCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-6 rounded-lg bg-card border border-white/10 flex items-center gap-4"
  >
    <div className="p-3 rounded-lg bg-primary/10">
      {icon}
    </div>
    <div>
      <span className="text-xl font-bold">{title}</span>
      <p className="text-secondary">{description}</p>
    </div>
  </motion.div>
);

const AvailableContent = () => {
  return (
    <section className="py-20 md:py-28 bg-black/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black tracking-tighter"
          >
            Um Universo de Conteúdo
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {content.map((item, index) => (
            <ContentCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableContent;
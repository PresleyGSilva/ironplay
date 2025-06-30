import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, Club as Futbol, Tally4, Medal } from 'lucide-react';

const sports = [
  { icon: <Futbol className="h-10 w-10 text-primary" />, title: 'Futebol Ao Vivo', description: 'Todos os campeonatos nacionais e internacionais.' },
  { icon: <Trophy className="h-10 w-10 text-primary" />, title: 'NBA e Basquete', description: 'Jogos da temporada regular, playoffs e finais.' },
  { icon: <Tally4 className="h-10 w-10 text-primary" />, title: 'UFC e Lutas', description: 'As noites de combate mais emocionantes do mundo.' },
  { icon: <Medal className="h-10 w-10 text-primary" />, title: 'Outros Esportes', description: 'Fórmula 1, Tênis, NFL e muito mais para você.' },
];

const SportsPage = () => {
  return (
    <>
      <Helmet>
        <title>Esportes - IfitnitPlay</title>
        <meta name="description" content="Assista aos maiores eventos esportivos ao vivo e sob demanda." />
      </Helmet>
      <div className="container py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-4"
        >
          Esportes Ao Vivo
        </motion.h1>
         <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-secondary text-center mb-16 max-w-2xl mx-auto">
            A emoção do esporte ao seu alcance. Não perca nenhum lance do seu time ou atleta favorito com a nossa cobertura completa.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sports.map((sport, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="p-8 rounded-lg bg-card border border-white/10 flex flex-col items-center text-center gap-4"
                >
                    <div className="p-4 rounded-full bg-primary/10">
                        {sport.icon}
                    </div>
                    <span className="text-2xl font-bold">{sport.title}</span>
                    <p className="text-secondary">{sport.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SportsPage;
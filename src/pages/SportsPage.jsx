import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const canaisEsportivos = [
  {
    nome: 'ESPN',
    descricao: 'Esportes americanos, futebol, NBA, NFL e mais.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg',
  },
  {
    nome: 'SporTV',
    descricao: 'Transmissões ao vivo do Brasileirão, Copa do Brasil e mais.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/SporTV_logo_2021.svg',
  },
  {
    nome: 'Premiere FC',
    descricao: 'Pay-per-view com todos os jogos do Brasileirão e estaduais.',
    logo: 'https://logodownload.org/wp-content/uploads/2017/11/premiere-logo-1.png',
  },
  {
    nome: 'Combate',
    descricao: 'Canal oficial do UFC ao vivo e outros eventos de lutas.',
    logo: 'https://logodownload.org/wp-content/uploads/2020/10/combate-logo.png',
  },
  {
    nome: 'BandSports',
    descricao: 'Fórmula 1, futebol internacional e esportes olímpicos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/BandSports_logo_2011.png',
  },
  {
    nome: 'Fox Sports',
    descricao: 'Campeonatos internacionais e programas esportivos exclusivos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_Sports_logo.svg',
  },
  {
    nome: 'TNT Sports',
    descricao: 'Champions League, Paulistão e torneios internacionais.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/TNT_Sports_logo_2021.svg',
  },
];

const SportsPage = () => {
  return (
    <>
      <Helmet>
        <title>Canais Esportivos - IronPlay</title>
        <meta name="description" content="Confira todos os canais esportivos disponíveis no IPTV IronPlay." />
      </Helmet>

      <div className="container py-12 md:py-20 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6"
        >
          📺 Canais Esportivos ao Vivo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12"
        >
          Aproveite os melhores canais esportivos com transmissão ao vivo dos maiores eventos do mundo. Tudo isso em um só lugar com qualidade e estabilidade!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {canaisEsportivos.map((canal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black/40 p-6 rounded-xl border border-white/10 shadow-lg flex flex-col items-center text-center"
            >
              <img src={canal.logo} alt={canal.nome} className="h-14 mb-4 object-contain" />
              <h3 className="text-xl font-bold mb-2">{canal.nome}</h3>
              <p className="text-sm text-secondary">{canal.descricao}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão para Planos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/planos"
            className="inline-block bg-primary hover:bg-primary/80 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md"
          >
            📲 Quero Assinar Agora
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default SportsPage;

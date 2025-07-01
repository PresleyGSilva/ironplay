import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { title: 'Futebol (Soccer)', sport: 'Soccer' },
  { title: 'UFC / MMA', sport: 'Fighting' },
  { title: 'NBA (Basquete)', leagueId: '4387' },
  { title: 'Fórmula 1', leagueId: '4414' },
];

const SportsPage = () => {
  const [gamesByCategory, setGamesByCategory] = useState({});

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];

    const fetchData = async () => {
      const dataMap = {};

      for (const cat of CATEGORIES) {
        try {
          let url = '';

          if (cat.sport) {
            // Futebol e UFC usam busca por data e esporte
            url = `https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=${today}&s=${cat.sport}`;
          } else if (cat.leagueId) {
            // NBA e F1 usam busca por próximos eventos da liga
            url = `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${cat.leagueId}`;
          }

          const res = await fetch(url);
          const data = await res.json();
          dataMap[cat.title] = data.events?.slice(0, 5) || []; // limitar a 5 eventos
        } catch (err) {
          console.error(`Erro ao buscar eventos para ${cat.title}`, err);
          dataMap[cat.title] = [];
        }
      }

      setGamesByCategory(dataMap);
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Agenda Esportiva - IronPlay</title>
        <meta name="description" content="Confira os próximos jogos e eventos esportivos de hoje: futebol, UFC, NBA, F1 e muito mais!" />
      </Helmet>

      <div className="container py-12 md:py-20 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-12"
        >
          Agenda Esportiva de Hoje 🏆
        </motion.h1>

        {Object.entries(gamesByCategory).map(([category, events], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.length > 0 ? (
                events.map((event) => (
                  <div
                    key={event.idEvent}
                    className="bg-black/40 p-4 rounded-lg border border-white/10"
                  >
                    <h3 className="text-lg font-semibold mb-1">{event.strEvent}</h3>
                    <p className="text-sm text-secondary">{event.strLeague}</p>
                    <p className="text-sm mt-2">⏰ {event.strTime?.slice(0, 5) || 'Sem horário'} - 📍 {event.strVenue || 'Local indefinido'}</p>
                  </div>
                ))
              ) : (
                <p className="text-white col-span-full">Nenhum evento encontrado.</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SportsPage;

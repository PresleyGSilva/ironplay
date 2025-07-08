import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const SportsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = '0916e5ec3d584b7280640c7e32e57dc9'; // Sua chave da NewsAPI

  // Função para buscar notícias de esportes
  const fetchSportsNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${API_KEY}&language=pt`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles || []);  // Atualiza o estado com as notícias
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar notícias de esportes:', error);
      setLoading(false);
    }
  };

  // Chama a função para buscar notícias quando a página carregar
  useEffect(() => {
    fetchSportsNews();
  }, []);

  return (
    <>
      <Helmet>
        <title>Canais Esportivos - IronPlay</title>
        <meta name="description" content="Confira todos os canais esportivos disponíveis no IPTV IronPlay. Assista aos maiores eventos ao vivo em qualidade superior." />
      </Helmet>

      <div className="container py-12 md:py-20 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6"
        >
          📺 **Notícias Esportivas Ao Vivo** para Você
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12"
        >
          **Fique por dentro dos maiores eventos esportivos**, com qualidade superior e sem interrupções. Escolha o seu evento favorito e tenha acesso ilimitado!
        </motion.p>

        {/* Carregar notícias de esportes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            <p>Carregando notícias...</p>
          ) : (
            articles.length > 0 ? (
              articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-black/40 p-6 rounded-xl border border-white/10 shadow-lg flex flex-col items-center text-center"
                >
                  <img src={article.urlToImage} alt={article.title} className="h-40 mb-4 object-cover rounded" />
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-secondary">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
                    Leia mais
                  </a>
                </motion.div>
              ))
            ) : (
              <p className="text-lg text-secondary">Nenhuma notícia de esporte disponível no momento.</p>
            )
          )}
        </div>

        {/* Botão para planos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/planos"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md text-lg"
          >
            📲 **Adquira Agora e Assista a Tudo Ao Vivo!**
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default SportsPage;

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SportsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = '0916e5ec3d584b7280640c7e32e57dc9'; // Substitua pela sua chave válida

  const fetchSportsNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${API_KEY}&language=pt`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles || []);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar notícias de esportes:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSportsNews();
  }, []);

  return (
    <>
      <Helmet>
        <title>Canais Esportivos - FireFlick</title>
        <meta
          name="description"
          content="Confira todos os canais esportivos disponíveis no IPTV FireFlick. Assista aos maiores eventos ao vivo em qualidade superior."
        />
      </Helmet>

      <div className="container py-12 md:py-20 text-white">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-6"
        >
          📺 Brasileirão, Champions, UFC e muito mais...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12"
        >
          Tenha acesso a todos os canais ESPORTIVOS e assista os jogos do seu time do coração no conforto da sua casa. No FireFLick você conta com todos os canais esportivos, podendo assistir também, Basquete, Formula 1, UFC e muito mais…
        </motion.p>

        {/* 🔥 Bloco estilo Elementor com fundo, texto e imagem lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto mb-20 border border-[#512D04]"
          style={{
            backgroundImage: `url('https://fireplaytv.com/wp-content/uploads/2025/06/BGm-FUTEBOL.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#06062E',
            paddingTop: '500px', // ajuste conforme preferir para o espaçamento vertical
            paddingBottom: '290px',
            paddingLeft: '40px',
            paddingRight: '40px',
            borderRadius: '16px',
            minHeight: '400px',
          }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Texto */}
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-4 leading-snug destaque1">
                
              </h3>

            </div>

            {/* Imagem ao lado */}
          
          </div>
        </motion.div>

        {/* 📰 Notícias da API */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            <p>Carregando notícias...</p>
          ) : articles.length > 0 ? (
            articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-black/40 p-6 rounded-xl border border-white/10 shadow-lg flex flex-col items-center text-center"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                      className="h-64 w-full mb-30 object-cover rounded"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-secondary">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Leia mais
                </a>
              </motion.div>
            ))
          ) : (
            <p className="text-lg text-secondary">Nenhuma notícia de esporte disponível no momento.</p>
          )}
        </div>

        {/* 📲 Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/planos"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md text-lg"
          >
            📲 Adquira Agora e Assista a Tudo Ao Vivo!
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default SportsPage;

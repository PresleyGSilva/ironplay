import React from 'react';
import { motion } from 'framer-motion';
import { Server, Clapperboard, Wifi, ShieldOff, Headphones as Headset, HardDrive } from 'lucide-react';

const benefits = [
  { icon: <HardDrive className="h-8 w-8 text-highlight" />, title: 'Servidor Exclusivo', description: 'Infraestrutura robusta para garantir a melhor performance.' },
  { icon: <Clapperboard className="h-8 w-8 text-highlight" />, title: 'Full HD e 4K', description: 'Aproveite a máxima qualidade de imagem disponível.' },
  { icon: <Wifi className="h-8 w-8 text-highlight" />, title: 'Estável e Sem Travas', description: 'Assista seus programas favoritos sem interrupções.' },
  { icon: <ShieldOff className="h-8 w-8 text-highlight" />, title: 'Sem Anúncios', description: 'Experiência de imersão total sem propagandas.' },
  { icon: <Headset className="h-8 w-8 text-highlight" />, title: 'Suporte Premium', description: 'Nossa equipe está pronta para te ajudar 24 horas por dia.' },
  { icon: <Server className="h-8 w-8 text-highlight" />, title: 'Instalação Fácil', description: 'Configure rapidamente em qualquer dispositivo compatível.' },
];

const BenefitCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card p-6 rounded-xl border border-white/10 shadow-lg flex flex-col items-center text-center gap-6"
  >
    <div className="p-4 rounded-full bg-primary/10">
      {icon}
    </div>
    <span className="text-2xl font-semibold text-white">{title}</span>
    <p className="text-secondary text-sm">{description}</p>
  </motion.div>
);

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 relative bg-black/30">
      <div className="glow-effect"></div>
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-12"
        >
          A DinoFlick é diferente de tudo o que você já viu
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} index={index} {...benefit} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <button className="bg-primary text-white text-xl font-bold py-3 px-10 rounded-full hover:bg-primary/80 transition-all duration-300">
            Adquira o Seu Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

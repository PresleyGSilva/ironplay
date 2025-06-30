import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full h-[90vh] text-center relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          alt="Cena de filme"
          src="https://images.unsplash.com/photo-1674284077483-d90553153ac4"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e07] via-[#060e07]/60 to-transparent z-10" />
      </div>

      <div className="container z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            A experiência definitiva de entretenimento:
            <span className="text-green-500"> exclusiva, estável e incomparável!</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Filmes, séries, esportes e mais com qualidade superior e suporte dedicado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <a href="#planos">
            <Button size="lg" className="bg-green-500 text-white text-lg font-bold px-10 py-6 rounded-full hover:bg-green-600 transition">
              ADQUIRA O SEU AGORA
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    rating: 5,
    text: 'A qualidade da imagem é surreal! Parece que estou no cinema. O suporte também é super rápido.',
    alt: 'Foto de rosto de uma mulher sorrindo',
    description: 'Rosto de uma mulher feliz'
  },
  {
    name: 'Carlos Oliveira',
    rating: 5,
    text: 'Finalmente um serviço que não trava na hora do jogo! Recomendo pra todo mundo que gosta de esportes.',
    alt: 'Foto de rosto de um homem com barba',
    description: 'Rosto de um homem com barba'
  },
  {
    name: 'Juliana Pereira',
    rating: 5,
    text: 'Adoro a quantidade de séries e filmes, sempre tem algo novo pra assistir. O melhor investimento que fiz!',
    alt: 'Foto de rosto de uma jovem mulher com cabelo cacheado',
    description: 'Rosto de uma mulher com cabelo cacheado'
  },
];

const Rating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-highlight fill-highlight' : 'text-gray-600'}`} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black tracking-tighter"
          >
            O que nossos clientes dizem
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-white/10 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img  className="w-full h-full object-cover" alt={testimonial.alt} src="https://images.unsplash.com/photo-1646193186132-7976c1670e81" />
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <Rating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-secondary text-left">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
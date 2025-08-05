import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Pricing from '@/components/Pricing';

const PlansPage = () => {
  return (
    <>
      <Helmet>
        <title>Planos - IronPlay</title>
        <meta name="description" content="Escolha o plano ideal para você e sua família. Qualidade e preço justo." />
      </Helmet>
      <div className="py-12 md:py-20">
         <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-secondary text-center mb-16 max-w-2xl mx-auto px-4">
            Tenha acesso ilimitado a todo o nosso conteúdo com um dos nossos planos flexíveis. Sem contratos, sem complicações.
        </motion.p>
        <Pricing />
      </div>
    </>
  );
};

export default PlansPage;
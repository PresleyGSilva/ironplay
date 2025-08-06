import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const plansData = {
  kirvano: [
    {
      name: 'Plano Mensal',
      price: 'R$ 16,90',
      period: 'à vista',
      features: [
        '1 mês de acesso completo',
        'Assista em 1 tela simultânea',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box'
      ],
      isPopular: false,
      link: 'https://kirvano.com/checkout-mensal',
      badge: 'OFERTA POR TEMPO LIMITADO',
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 34,90',
      period: 'ou 2x de R$ 17,45',
      features: [
        '3 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Compatível com Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: false,
      link: 'https://kirvano.com/checkout-trimestral',
    },
    {
      name: 'Plano Semestral',
      price: 'R$ 59,90',
      period: 'ou 3x de R$ 19,97',
      features: [
        '6 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: false,
      link: 'https://kirvano.com/checkout-semestral',
    },
    {
      name: 'Plano Anual',
      price: 'R$ 109,90',
      period: 'ou 12x de R$ 9,16',
      features: [
        '12 meses de acesso completo',
        'Assista em 2 telas simultâneas',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: true,
      link: 'https://kirvano.com/checkout-anual',
    },
  ],
  braip: [
    {
      name: 'Plano Mensal',
      price: 'R$ 16,90',
      period: 'à vista',
      features: [
        '1 mês de acesso completo',
        'Assista em 1 tela simultânea',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box'
      ],
      isPopular: false,
      link: 'https://braip.com/checkout-mensal',
      badge: 'OFERTA POR TEMPO LIMITADO',
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 34,90',
      period: 'ou 2x de R$ 17,45',
      features: [
        '3 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Compatível com Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: false,
      link: 'https://braip.com/checkout-trimestral',
    },
    {
      name: 'Plano Semestral',
      price: 'R$ 59,90',
      period: 'ou 3x de R$ 19,97',
      features: [
        '6 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: false,
      link: 'https://braip.com/checkout-semestral',
    },
    {
      name: 'Plano Anual',
      price: 'R$ 109,90',
      period: 'ou 12x de R$ 9,16',
      features: [
        '12 meses de acesso completo',
        'Assista em 2 telas simultâneas',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: true,
      link: 'https://braip.com/checkout-anual',
    },
  ],
  cakto: [
    {
      name: 'Plano Mensal',
      price: 'R$ 16,90',
      period: 'à vista',
      features: [
        '1 mês de acesso completo',
        'Assista em 1 tela simultânea',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: false,
      link: 'https://pay.cakto.com.br/yah7jus',
      badge: 'OFERTA POR TEMPO LIMITADO',
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 34,90',
      period: 'ou 2x de R$ 17,45',
      features: [
        '3 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Compatível com Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: false,
      link: 'https://pay.cakto.com.br/34ixret',
    },
    {
      name: 'Plano Semestral',
      price: 'R$ 59,90',
      period: 'ou 3x de R$ 19,97',
      features: [
        '6 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: false,
      link: 'https://pay.cakto.com.br/z55jwqn',
    },
    {
      name: 'Plano Anual',
      price: 'R$ 109,90',
      period: 'ou 12x de R$ 9,16',
      features: [
        '12 meses de acesso completo',
        'Assista em 2 telas simultâneas',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: true,
      link: 'https://pay.cakto.com.br/7gg8spm',
    },
  ],
};

const getPlansByPlatform = (platform) => {
  return plansData[platform] || plansData.cakto;
};

const PricingCard = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full border-2 rounded-2xl p-4 bg-[#0b0b0b] shadow-lg border-[hsl(var(--primary))]">
        {plan.badge && (
          <div className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold mb-2 w-fit mx-auto">
            {plan.badge}
          </div>
        )}

        {plan.isPopular && (
          <div className="bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded-full font-bold mb-2 w-fit mx-auto">
            MAIS VENDIDO
          </div>
        )}

        <CardHeader className="text-center py-1">
          <CardTitle className="text-lg font-bold text-white mb-1">{plan.name}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col items-center text-center mb-3 px-2">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-3xl font-extrabold text-[hsl(var(--primary))] whitespace-nowrap leading-none">
              {plan.price}
            </span>
            <span className="text-gray-400 text-xs md:text-sm leading-none">{plan.period}</span>
          </div>

          <ul className="text-xs md:text-sm text-gray-200 space-y-1 mt-3 w-full text-left leading-tight">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-1">
                <CheckCircle2 className="text-[hsl(var(--primary))] w-4 h-4 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-0 mt-auto px-2 relative">
          <Button
            onClick={() => window.open(plan.link, '_blank')}
            className="w-full py-2 btn-primary font-bold rounded-xl transition-all text-sm relative overflow-hidden"
          >
            ACESSO IMEDIATO
            <span
              aria-hidden="true"
              className="absolute top-0 left-[-75%] w-20 h-full bg-white/30 transform skew-x-[-20deg] animate-[shine_2.5s_linear_infinite]"
            />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
  const location = useLocation();
  const path = location.pathname;

  let plataforma = 'cakto'; // novo padrão
  if (path.includes('/v1')) plataforma = 'braip';
  else if (path.includes('/v2')) plataforma = 'kirvano';

  const plans = getPlansByPlatform(plataforma);

  return (
    <section id="planos" className="py-20 px-6 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-fire-gradient"
        >
          Escolha seu plano
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes shine {
            0% { left: -75%; }
            100% { left: 125%; }
          }
        `}
      </style>
    </section>
  );
};

export default Pricing;

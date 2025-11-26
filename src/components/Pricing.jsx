import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

// 🧮 Função para calcular economia
function calcularEconomia(precoMensal, precoTotal, meses) {
  if (!meses || meses <= 1) return 0;
  const custoMensal = precoTotal / meses;
  const economia = ((precoMensal - custoMensal) / precoMensal) * 100;
  return Math.round(economia);
}

// ⭐ PLANO DE TESTE UNIVERSAL (aparece em TODAS as páginas)
const planoTeste = {
  name: 'Teste por 24 Horas!',
  price: 'R$ 4,90',
  value: 4.90,
  months: 0.03, // (1 dia)
  period: 'acesso imediato',
  features: [
    '24 horas de acesso completo',
    'Assista em 1 tela',
    '+ de 40 mil conteúdos',
    'Filmes / Séries / Canais AO VIVO',
    'Qualidade SD/HD/FHD/4K',
  ],
  badge: 'PLANO DE TESTE',
  link: 'https://checkout.vekssell.com.br/checkout/cmifvz9gu0hdooxohd9xlgdah?offer=8F3MXUL'
};

// 🔥 PLANOS Cakto / Kirvano / Vekssell
const plansData = {
  kirvano: [
    {
      name: 'Plano Mensal',
      price: 'R$ 18,90',
      value: 18.90,
      months: 1,
      period: 'à vista',
      features: [
        '1 mês de acesso completo',
        'Assista em 1 tela simultânea',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box'
      ],
      isPopular: false,
      link: 'https://pay.kirvano.com/516a7439-374b-40fd-8054-438f1a52892a',
      badge: 'OFERTA POR TEMPO LIMITADO',
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 38,90',
      value: 38.90,
      months: 3,
      period: 'ou 2x de R$ 19,45',
      features: [
        '3 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Compatível com Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://pay.kirvano.com/3e2c0b27-5713-45e1-a132-b5f7f134d0dd',
    },
    {
      name: 'Plano Semestral',
      price: 'R$ 68,90',
      value: 68.90,
      months: 6,
      period: 'ou 3x de R$ 22,97',
      features: [
        '6 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://pay.kirvano.com/9f83c306-7291-4abf-93c9-86d8a6e7620f',
    },
    {
      name: 'Plano Anual',
      price: 'R$ 128,90',
      value: 128.90,
      months: 12,
      period: 'ou 12x de R$ 10,74',
      features: [
        '12 meses de acesso completo',
        'Assista em 2 telas simultâneas',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: true,
      link: 'https://pay.kirvano.com/ff6be0a7-5687-41b5-8df8-6810ee03d1b6',
    },
  ],

  cakto: [
    {
      name: 'Plano Mensal',
      price: 'R$ 18,90',
      value: 18.90,
      months: 1,
      period: 'à vista',
      features: [
        '1 mês de acesso completo',
        'Assista em 1 tela simultânea',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://pay.cakto.com.br/tuadxhd',
      badge: 'OFERTA POR TEMPO LIMITADO',
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 38,90',
      value: 38.90,
      months: 3,
      period: 'ou 2x de R$ 19,45',
      features: [
        '3 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Compatível com Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://pay.cakto.com.br/6s2hb5i',
    },
    {
      name: 'Plano Semestral',
      price: 'R$ 68,90',
      value: 68.90,
      months: 6,
      period: 'ou 3x de R$ 22,97',
      features: [
        '6 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://pay.cakto.com.br/9j9b4td',
    },
    {
      name: 'Plano Anual',
      price: 'R$ 128,90',
      value: 128.90,
      months: 12,
      period: 'ou 12x de R$ 10,74',
      features: [
        '12 meses de acesso completo',
        'Assista em 2 telas simultâneas',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: true,
      link: 'https://pay.cakto.com.br/347v4vm',
    },
  ],

  vekssell: [
    {
      name: 'Plano Mensal',
      price: 'R$ 18,90',
      value: 18.90,
      months: 1,
      period: 'à vista',
      features: [
        '1 mês de acesso completo',
        'Assista em 1 tela simultânea',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://checkout.vekssell.com.br/checkout/cmiftuu7b0grw5bskjyvc86kh?offer=V27TFJ2',
      badge: 'OFERTA POR TEMPO LIMITADO',
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 38,90',
      value: 38.90,
      months: 3,
      period: 'ou 2x de R$ 19,45',
      features: [
        '3 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Compatível com Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://checkout.vekssell.com.br/checkout/cmiftuu7b0grw5bskjyvc86kh?offer=TCQ19O0',
    },
    {
      name: 'Plano Semestral',
      price: 'R$ 68,90',
      value: 68.90,
      months: 6,
      period: 'ou 3x de R$ 22,97',
      features: [
        '6 meses de acesso completo',
        'Assista em 1 tela simultânea',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      link: 'https://checkout.vekssell.com.br/checkout/cmiftuu7b0grw5bskjyvc86kh?offer=HWYC7YH',
    },
    {
      name: 'Plano Anual',
      price: 'R$ 128,90',
      value: 128.90,
      months: 12,
      period: 'ou 12x de R$ 10,74',
      features: [
        '12 meses de acesso completo',
        'Assista em 2 telas simultâneas',
        'Canais Adultos (opcional)',
        '+ de 40 mil conteúdos',
        'Qualidade SD/HD/FHD/4K',
        'Smart TV, Tablet, PC, TV Box',
      ],
      isPopular: true,
      link: 'https://checkout.vekssell.com.br/checkout/cmiftuu7b0grw5bskjyvc86kh?offer=2T3SIFK',
    },
  ],
};

// Função auxiliar
const getPlansByPlatform = (platform) => plansData[platform] || plansData.cakto;

// Card
const PricingCard = ({ plan, index, precoMensal }) => {
  const economia = calcularEconomia(precoMensal, plan.value, plan.months);

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
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-extrabold text-[hsl(var(--primary))] whitespace-nowrap leading-none">
                {plan.price}
              </span>
              <span className="text-gray-400 text-xs md:text-sm leading-none">{plan.period}</span>
            </div>

            {economia > 0 && (
              <span className="text-green-400 text-xs font-semibold mt-1">
                💸 Economize {economia}% comparado ao mensal
              </span>
            )}
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

// 🌟 COMPONENTE PRINCIPAL
const Pricing = () => {
  const location = useLocation();
  const path = location.pathname;

  // Definição da plataforma por rota
  let plataforma = 'cakto';
  if (path.includes('/v1')) plataforma = 'vekssell'; 
  else if (path.includes('/v2')) plataforma = 'kirvano';
  else if (path.includes('/v3')) plataforma = 'vekssell';

  // 🔥 SOMENTE V1 RECEBE O PLANO DE TESTE
  const plans =
    plataforma === 'vekssell' && path.includes('/v1')
      ? [planoTeste, ...getPlansByPlatform(plataforma)]
      : getPlansByPlatform(plataforma);

  const precoMensal = plans.find((p) => p.months === 1)?.value || 18.9;

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
            <PricingCard key={index} plan={plan} index={index} precoMensal={precoMensal} />
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

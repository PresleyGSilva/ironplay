import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais dispositivos são compatíveis?",
    answer: "Nosso serviço é compatível com Smart TVs (Samsung, LG, etc.), dispositivos Android, iOS, TV Box, Amazon Fire Stick, computadores e muito mais. Basicamente, qualquer dispositivo que possa instalar nosso aplicativo ou usar um player de IPTV."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte premium 24/7 via WhatsApp e Telegram. Nossa equipe está sempre pronta para ajudar com qualquer dúvida, problema de instalação ou instabilidade que você possa enfrentar."
  },
  {
    question: "O que acontece se o app cair?",
    answer: "Nossos servidores possuem uma estabilidade de 99.9%, o que significa que quedas são extremamente raras. Caso ocorra alguma instabilidade, nossa equipe de suporte age imediatamente para resolver o problema no menor tempo possível."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Nossos planos não possuem fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem taxas ou multas. Você continuará com acesso até o final do período já pago."
  }
];

const Faq = () => {
  return (
    <section className="py-20 md:py-28 bg-black/30">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black tracking-tighter"
          >
            Perguntas Frequentes
          </motion.h2>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Accordion type="single" collapsible className="w-full bg-card rounded-lg p-4 border border-white/10">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-secondary">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
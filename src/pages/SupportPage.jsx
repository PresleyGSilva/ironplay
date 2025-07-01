import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LifeBuoy, MessageSquare, Phone } from 'lucide-react';
import Faq from '@/components/Faq';
import { useToast } from '@/components/ui/use-toast';

const SupportPage = () => {
  const { toast } = useToast();

  // Função de redirecionamento para o link do Telegram
  const handleRedirectToTelegram = () => {
    // Redireciona para o Telegram
    window.location.href = "https://t.me/SuporteCineFlick"; // Link do chat do Telegram
  };

  const handleActionClick = (channel) => {
    toast({
      title: "Canal de Suporte 🚧",
      description: `O suporte via ${channel} ainda não está configurado.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Suporte - IronPlay</title>
        <meta name="description" content="Precisa de ajuda? Entre em contato com nossa equipe de suporte ou consulte nossas perguntas frequentes." />
      </Helmet>
      <div className="container py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <LifeBuoy className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Estamos aqui para ajudar
          </h1>
          <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
            Se você tiver qualquer dúvida ou problema, não hesite em nos contatar.
          </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto my-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="bg-card p-8 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-2">Chat Ao Vivo</h2>
                <p className="text-secondary mb-6">Fale com um de nossos especialistas agora mesmo.</p>
                <Button 
                  onClick={handleRedirectToTelegram} 
                  className="bg-primary hover:bg-primary/90 rounded-full font-bold px-8"
                >
                  Iniciar Chat
                </Button>
            </div>
             <div className="bg-card p-8 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-2">Telefone</h2>
                <p className="text-secondary mb-6">Ligue para nossa central de atendimento.</p>
                <Button 
                  onClick={() => handleActionClick('Telefone')} 
                  className="bg-primary hover:bg-primary/90 rounded-full font-bold px-8"
                >
                  Ver Número
                </Button>
            </div>
        </motion.div>

        <Faq />
      </div>
    </>
  );
};

export default SupportPage;

import React from 'react';
import { Clapperboard } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {
    toast
  } = useToast();
  const handleLinkClick = page => {
    toast({
      title: "Página em breve! 🚧",
      description: `A página de "${page}" ainda não foi criada.`
    });
  };
  return <footer className="w-full py-8 px-8 bg-black text-white">
      <div className="container flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <Clapperboard className="h-8 w-8 text-primary" />
          <span className="text-2xl font-black tracking-tighter">IronPlay
        </span>
        </div>
        <div className="flex gap-6">
            <button onClick={() => handleLinkClick('Política de Privacidade')} className="text-secondary hover:text-white transition-colors">Política de Privacidade</button>
            <button onClick={() => handleLinkClick('Termos de Uso')} className="text-secondary hover:text-white transition-colors">Termos de Uso</button>
        </div>
        <p className="text-sm text-secondary text-center">
          IfinitiPlay {currentYear} © Todos os direitos reservados. Desenvolvido por Presley G Silva.
        </p>
      </div>
    </footer>;
};
export default Footer;
import React from 'react';
import { Clapperboard } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const handleLinkClick = (page) => {
    toast({
      title: "Página em breve! 🚧",
      description: `A página de "${page}" ainda não foi criada.`,
    });
  };

  return (
    <footer className="w-full py-8 px-8 bg-black text-white">
      <div className="container flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Clapperboard className="h-8 w-8 text-primary" />
          <span className="text-2xl font-black tracking-tighter">IronPlay</span>
        </div>

        {/* Formas de pagamento */}
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Mastercard_Logo.svg" alt="MasterCard" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_elo.svg" alt="Elo" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Amex-logo.svg" alt="Amex" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Hipercard_logo.svg" alt="Hiper" className="h-8" />
        </div>

        {/* Site Seguro */}
        <div className="mt-4 flex justify-center gap-6 flex-wrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Google_Chrome_logo.svg" alt="Google Site Seguro" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Ssl-logo.svg" alt="SSL" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_Site_Blindado.svg" alt="Site Blindado" className="h-8" />
        </div>

        {/* Textos explicativos */}
        <div className="mt-6 text-center text-sm text-secondary">
          <p>
            Esta página não tem qualquer vínculo com o Facebook S/A e suas empresas, apenas usamos a plataforma para promover os nossos produtos. Ao sair da plataforma toda responsabilidade sobre produtos vendidos e oferecidos é de inteira responsabilidade da nossa empresa, bem como se houver quaisquer eventualidades legais.
          </p>
          <p className="mt-4">
            Não compre produtos piratas, não vendemos em marketplaces como: Mercado Livre, Shopee, Aliexpress, Facebook, Olx etc. Não damos suporte a produtos comprados nesses canais.
          </p>
        </div>

        {/* Links de Política e Termos */}
        <div className="flex gap-6 mt-6">
          <button
            onClick={() => handleLinkClick('Política de Privacidade')}
            className="text-secondary hover:text-white transition-colors"
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => handleLinkClick('Termos de Uso')}
            className="text-secondary hover:text-white transition-colors"
          >
            Termos de Uso
          </button>
        </div>

        {/* Texto final */}
        <p className="text-sm text-secondary text-center mt-6">
          IronPlay {currentYear} © Todos os direitos reservados. Desenvolvido por Presley G Silva.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

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
          <img
            src="https://oficialcineflick.com/wp-content/uploads/2024/12/FORMA-DE-PAGAMENTO.webp"
            alt="Formas de pagamento"
            className="h-8 sm:h-10 md:h-12"
          />
        </div>

        {/* Selo de site seguro */}
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <img
            src="https://oficialcineflick.com/wp-content/uploads/2024/12/SELO-SITE-SEGURO.webp"
            alt="Selo de site seguro"
            className="h-8 sm:h-10 md:h-12"
          />
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
        <div className="flex gap-6 mt-6 flex-wrap justify-center">
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

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center text-center">

        {/* LOGO */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src="/assets/kingplay-logo.jpg"
            alt="Logo da plataforma KingPlay - streaming de filmes e séries"
            className="h-24 sm:h-28 md:h-32 w-auto transition-all duration-300"
          />
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight select-none">
            Fire<span className="text-[hsl(var(--primary))]">Flick</span>
          </h2>
        </div>

        {/* FORMAS DE PAGAMENTO */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Formas de pagamento</h2>
          <img
            src="https://dinoflick.com/wp-content/uploads/2024/12/FORMA-DE-PAGAMENTO.webp"
            alt="Formas de Pagamento"
            className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* SELO SITE SEGURO */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Site seguro</h2>
          <img
            src="https://dinoflick.com/wp-content/uploads/2024/12/SELO-SITE-SEGURO.webp"
            alt="Selo de Site Seguro"
            className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* TEXTOS LEGAIS */}
        <div className="text-sm text-gray-400 space-y-4 max-w-4xl px-4">
          <p>
            Esta página não tem qualquer vínculo com o Facebook S/A e suas empresas, apenas usamos a plataforma para promover os nossos produtos.
            Ao sair da plataforma toda responsabilidade sobre produtos vendidos e ofertados é de inteira responsabilidade da nossa empresa, bem como se houver quaisquer eventualidades legais.
          </p>
          <p>
            Declaramos que o Facebook S/A não tem qualquer vínculo de associação em processos cíveis ou criminais.
            Nosso email de suporte é: <strong>suporte@kingplay.com.br</strong>
          </p>
          <p>
            Não compre produtos piratas, não vendemos em marketplaces como: Mercado Livre, Shopee, Aliexpress, Facebook, Olx etc.
            Não damos suporte a produtos comprados nestes canais.
          </p>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} KingPlay. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

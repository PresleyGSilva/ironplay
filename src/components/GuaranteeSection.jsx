import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-black/70">
      <div className="container mx-auto flex flex-col items-center justify-center text-center gap-10 px-4">
        
        {/* Imagem */}
        <img
          loading="lazy"
          decoding="async"
          width={300}
          height={350}
          src="https://dinoflick.com/wp-content/uploads/2024/12/GARANTIA.webp"
          alt="Garantia 7 dias sem riscos"
          className="rounded-lg shadow-lg"
        />

        {/* Texto e botão */}
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="text-[hsl(var(--primary))]">
              Experimente sem riscos por 7 dias
            </span> e só então decida se quer continuar
          </h2>

          <p className="mb-3 text-gray-300 leading-relaxed">
            Sem letras miúdas no contrato: você pode experimentar a <strong>FLireFlick</strong> e todos os conteúdos dela <strong>durante 7 dias.</strong>
          </p>
          <p className="mb-3 text-gray-300 leading-relaxed">
            Se dentro desse período você decidir não continuar com a <strong>FLireFlick</strong>, por qualquer motivo que seja, é só entrar em contato e nós devolveremos todo o seu dinheiro – sem fazer nenhuma pergunta.
          </p>
          <p className="mb-6 text-gray-300 leading-relaxed">
            A partir de agora, você não tem nada a perder.
          </p>

          {/* Botão com link para a seção de planos */}
          <a
            href="#planos"
            className="inline-block bg-[hsl(var(--primary))] hover:bg-[hsl(145,90%,40%)] text-black font-bold text-lg px-10 py-4 rounded-full transition"
          >
            ADQUIRA O SEU AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
